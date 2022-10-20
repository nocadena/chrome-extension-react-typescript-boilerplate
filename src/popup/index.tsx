import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Popup from "./Popup";
chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider>
        <Popup />
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("popup")
  );
});
