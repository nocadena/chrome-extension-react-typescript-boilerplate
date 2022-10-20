import pump from "pump";
// import { WindowPostMessageStream } from "@metamask/post-message-stream";
import ObjectMultiplex from "obj-multiplex";
import browser from "webextension-polyfill";
import PortStream from "extension-port-stream";
import { obj as createThoughStream } from "through2";

// import { isManifestV3 } from "../helpers/mv3.utils";
// import shouldInjectProvider from "../helpers/provider-injection";

// These require calls need to use require to be statically recognized by browserify
const fs = require("fs");
const path = require("path");

const inpageContent = fs.readFileSync(
  path.join(__dirname, "..", "..", "dist", "chrome", "inpage.js"),
  "utf8"
);
const inpageSuffix = `//# sourceURL=${browser.runtime.getURL("inpage.js")}\n`;
const inpageBundle = inpageContent + inpageSuffix;
/**
 * Injects a script tag into the current document
 *
 * @param {string} content - Code to be executed in the current document
 */
function injectScript(content) {
  try {
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
injectScript(inpageBundle);
