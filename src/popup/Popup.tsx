import { Box, Text, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import "./Popup.scss";

export default function Popup() {
  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  return (
    <Box>
      <Text>Hi</Text>
      <Button>Moin</Button>
    </Box>
  );
}
