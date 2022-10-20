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
console.log("bddd", fs);
console.log("bddd", path);
const inpageContent = require("../../dist/js/inpage");
console.log("maybe?", inpageContent);
// const inpageContent = fs.readFileSync(
//   path.join(__dirname, "..", "..", "dist", "chrome", "inpage.js"),
//   "utf8"
// );
// const inpageSuffix = `//# sourceURL=${browser.runtime.getURL("inpage.js")}\n`;
// const inpageBundle = inpageContent + inpageSuffix;
/**
 * Injects a script tag into the current document
 *
 * @param {string} content - Code to be executed in the current document
 */
function injectScript() {
  // try {
  console.log("inpagecontent0", window.location.pathname);
  console.log("inpagecontent0", path.join("js", "inpage.js"));
  console.log("inpagecontent0__dirname", __dirname);
  // fs.readdir(__dirname, null, function (err, files) {
  //   console.log("inpagecontent0,files", files);
  // });
  fs.readFile(
    path.join(__dirname, "inpage.js"), //   path.join(__dirname, "..", "..", "dist", "js", "inpage.js"),
    "utf8",
    function (err, inpageContent) {
      console.log("inpagecontent", inpageContent);
      //FAILS in chrome://extensions tap!! -> try normal website
      const inpageSuffix = `//# sourceURL=${browser.runtime.getURL(
        "inpage.js"
      )}\n`;
      console.log("inpagecontent2", inpageSuffix);
      const content = inpageContent + inpageSuffix;

      console.log("injecting");

      const container = document.head || document.documentElement;
      const scriptTag = document.createElement("script");
      scriptTag.setAttribute("async", "false");
      scriptTag.textContent = content;
      container.insertBefore(scriptTag, container.children[0]);
      container.removeChild(scriptTag);
    }
  );
  // } catch (error) {
  //   console.error("MetaMask: Provider injection failed.", error);
  // }
}
injectScript();
