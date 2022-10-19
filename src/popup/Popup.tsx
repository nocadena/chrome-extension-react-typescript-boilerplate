import { Box, Text, Button, ChakraProvider, theme } from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function Popup() {
  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    chrome.runtime.sendMessage({ popupMounted: true });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Text>Hi</Text>
        <Button>Moin</Button>
      </Box>
    </ChakraProvider>
  );
}
