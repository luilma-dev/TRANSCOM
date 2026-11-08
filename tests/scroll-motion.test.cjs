const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

const source = ts.transpileModule(
  fs.readFileSync("src/components/ScrollMotion.tsx", "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }
).outputText;

function setup({ reduced = false, supported = true, viewport = 800 } = {}) {
  let effect;
  const observers = [];
  const listeners = new Map();
  class Element {
    constructor(top, nested = false) {
      this.top = top;
      this.classes = new Set();
      this.classList = {
        add: (...names) => names.forEach((name) => this.classes.add(name)),
        remove: (...names) => names.forEach((name) => this.classes.delete(name)),
      };
      this.parentElement = { closest: () => nested ? {} : null };
    }
    getBoundingClientRect() { return { top: this.top, bottom: this.top + 200 }; }
    contains(target) { return target === this; }
  }
  const visible = new Element(100);
  const above = new Element(-600);
  const below = new Element(1200);
  const nested = new Element(1400, true);
  const elements = [visible, above, below, nested];
  const preference = {
    matches: reduced,
    addEventListener: (_, fn) => listeners.set("preference", fn),
    removeEventListener: () => listeners.delete("preference"),
  };
  class Observer {
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      this.observed = new Set();
      observers.push(this);
    }
    observe(element) { this.observed.add(element); }
    unobserve(element) { this.observed.delete(element); }
    disconnect() { this.observed.clear(); }
  }
  const window = {
    innerHeight: viewport, scrollY: 0,
    matchMedia: () => preference,
    addEventListener() {}, removeEventListener() {},
    requestAnimationFrame: () => 1, cancelAnimationFrame() {},
  };
  if (supported) window.IntersectionObserver = Observer;
  const context = {
    exports: {}, Node: Element, IntersectionObserver: Observer, window,
    require: () => ({ useEffect: (fn) => { effect = fn; } }),
    document: {
      documentElement: { scrollHeight: 4000, style: { setProperty() {} } },
      querySelectorAll: () => elements,
      addEventListener: (event, fn) => listeners.set(event, fn),
      removeEventListener: (event) => listeners.delete(event),
    },
  };
  vm.runInNewContext(source, context);
  context.exports.ScrollMotion();
  const cleanup = effect();
  return { visible, above, below, nested, observers, preference, listeners, cleanup };
}

test("initial viewport and restored scroll never flash or disappear", () => {
  const state = setup();
  assert.equal(state.visible.classes.size, 0);
  assert.equal(state.above.classes.size, 0);
  assert.ok(state.below.classes.has("scroll-enter"));
});

test("group children never receive a second entrance", () => {
  const state = setup();
  assert.equal(state.nested.classes.size, 0);
  assert.equal(state.observers[0].observed.has(state.nested), false);
});

test("entrance plays once and supports tall blocks on mobile and desktop", () => {
  for (const viewport of [640, 1080]) {
    const state = setup({ viewport });
    const observer = state.observers[0];
    assert.equal(observer.options.threshold, 0);
    observer.callback([{ target: state.below, isIntersecting: true, boundingClientRect: { bottom: 600 } }]);
    assert.ok(state.below.classes.has("is-visible"));
    assert.equal(observer.observed.size, 0);
    observer.callback([{ target: state.below, isIntersecting: false, boundingClientRect: { bottom: 2000 } }]);
    assert.ok(state.below.classes.has("is-visible"));
  }
});

test("fast scroll past a block leaves it visible", () => {
  const state = setup();
  state.observers[0].callback([{ target: state.below, isIntersecting: false, boundingClientRect: { bottom: -1 } }]);
  assert.ok(state.below.classes.has("is-visible"));
});

test("keyboard focus immediately reveals an offscreen control", () => {
  const state = setup();
  state.listeners.get("focusin")({ target: state.below });
  assert.ok(state.below.classes.has("is-visible"));
});

test("reduced motion, missing observer and cleanup keep content visible", () => {
  for (const options of [{ reduced: true }, { supported: false }]) {
    const state = setup(options);
    assert.equal(state.below.classes.size, 0);
  }
  const state = setup();
  state.preference.matches = true;
  state.listeners.get("preference")();
  assert.equal(state.below.classes.size, 0);
  state.preference.matches = false;
  state.listeners.get("preference")();
  assert.ok(state.below.classes.has("scroll-enter"));
  state.cleanup();
  assert.equal(state.below.classes.size, 0);
  assert.equal(state.listeners.size, 0);
});
