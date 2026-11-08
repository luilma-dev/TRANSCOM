// Validate the generated cascade, where responsive utilities previously won.
// Run after `npm run build`.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const postcss = require("postcss");
const selectorParser = require("postcss-selector-parser");

const directory = "out/_next/static/css";
const css = postcss.parse(fs.readdirSync(directory)
  .filter((name) => name.endsWith(".css"))
  .map((name) => fs.readFileSync(path.join(directory, name), "utf8")).join("\n"));

function styles(classes, width) {
  const result = {};
  css.walkRules((rule) => {
    for (let parent = rule.parent; parent; parent = parent.parent) {
      if (parent.type !== "atrule" || parent.name !== "media") continue;
      const min = parent.params.match(/min-width:\s*(\d+)px/);
      const max = parent.params.match(/max-width:\s*(\d+)px/);
      if ((min && width < +min[1]) || (max && width > +max[1])) return;
      if (parent.params.includes("prefers-reduced-motion:reduce")) return;
    }
    let matches = false;
    selectorParser((selectors) => selectors.each((selector) => {
      if (selector.nodes.every((node) => node.type === "class" && classes.includes(node.value))) matches = true;
    })).processSync(rule.selector);
    if (!matches) return;
    rule.walkDecls((declaration) => {
      result[declaration.prop] = declaration.value;
    });
  });
  return result;
}

const source = fs.readFileSync("src/app/page.tsx", "utf8") +
  fs.readFileSync("src/components/QuemSomosExpansion.tsx", "utf8");
const panels = [...source.matchAll(/className="(mobile-panel [^"]+)"/g)]
  .map((match) => match[1].split(/\s+/));

test("all three panels stay square and full width on tablet and desktop", () => {
  assert.equal(panels.length, 3);
  for (const width of [768, 1024, 1366, 1920]) {
    for (const panel of panels) {
      const actual = styles(panel, width);
      assert.equal(actual["border-radius"], "0", `radius at ${width}px`);
      assert.match(actual.width, /var\(--page-width/);
      assert.match(actual["margin-inline"], /var\(--page-width/);
    }
  }
});

test("photos stay square and motion uses the same duration at every width", () => {
  const photo = source.match(/className="(mobile-team-photo [^"]+)"/)[1].split(/\s+/);
  for (const width of [390, 768, 1366, 1920]) {
    assert.equal(styles(photo, width)["border-radius"], "0");
    assert.match(styles(["scroll-enter", "is-visible"], width).transition, /1400ms|1\.4s/);
  }
});
