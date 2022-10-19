// These require calls need to use require to be statically recognized by browserify

var fs = require("fs");
import * as path from "path";

import { browser } from "webextension-polyfill";

/**
 * Injects a script tag into the current document
 *
 * @param {string} content - Code to be executed in the current document
 */
export function injectScript() {
  try {
    const inpageContent = fs.readFileSync(
      path.join(__dirname, "..", "..", "dist", "chrome", "inpage.js"),
      "utf8"
    );
    const inpageSuffix = `//# sourceURL=${browser.runtime.getURL(
      "inpage.js"
    )}\n`;
    const content = inpageContent + inpageSuffix;

    console.log("injecting");

    const container = document.head || document.documentElement;
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("async", "false");
    scriptTag.textContent = content;
    container.insertBefore(scriptTag, container.children[0]);
    container.removeChild(scriptTag);
  } catch (error) {
    console.error("MetaMask: Provider injection failed.", error);
  }
}
