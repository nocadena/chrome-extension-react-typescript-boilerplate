import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Popup from "./Popup";
import Layout from "../components/Layout";
import { Web3AuthProvider } from "../components/Web3AuthProvider";
chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider>
        <Web3AuthProvider>
          <Layout>
            <Popup />
          </Layout>
        </Web3AuthProvider>
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("popup")
  );
});
