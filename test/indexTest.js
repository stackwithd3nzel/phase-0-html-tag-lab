require('./helpers.js');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
let dom;
let document;

beforeEach(() => {
  dom = new JSDOM(html);
  document = dom.window.document;
  global.document = document;
});

describe("index.html", () => {
  it("has a <h1> element", () => {
    const h1 = document.querySelector("h1");
    const hint = "Did you code an <h1>Tag</h1> in index.html?";

    expect(h1, hint).to.exist;
  });

  describe("the <h1> element", () => {
    it('contains the text "Hello, World!"', () => {
      const h1 = document.querySelector("h1");
      const hint =
        'Does your H1 have exactly "Hello, World!" inside the opening and closing tag?';

      expect(h1, hint).to.contain.text("Hello, World!");
    });
  });

  it("has a <ul> element", () => {
    const ul = document.querySelector("ul");
    expect(ul, "The document should have a <ul> element").to.exist;
  });

  it("has a <ol> element", () => {
    const ol = document.querySelector("ol");
    expect(ol, "The document should have a <ol> element").to.exist;
  });

  // Add more tests as needed...
});
