import { Box, Text, Button, ChakraProvider, theme } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./Popup.scss";
import { injectScript } from "../utils/src";
import Home from "../pages/Home";

//{(window as any).ethereum.getBalance("0x1F98431c8aD98523631AE4a59f267346ea31F984")}
export default function Popup() {
  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);
  injectScript();

  return <Home />;
}
