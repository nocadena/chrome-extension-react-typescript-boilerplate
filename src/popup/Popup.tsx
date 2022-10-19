import React, { useEffect } from "react";
import "./Popup.scss";
import { injectScript } from "../utils/src";

//{(window as any).ethereum.getBalance("0x1F98431c8aD98523631AE4a59f267346ea31F984")}
export default function Popup() {
  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);
  injectScript();

  return (
    <div className="popupContainer">
      Hello, Justin Heinz Ketchup! {(window as any).ethereum == null}
    </div>
  );
}
