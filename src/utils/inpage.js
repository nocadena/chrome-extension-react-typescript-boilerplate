import { ethers } from "ethers";
import { initializeProvider } from "../providers/initializeInpageProvide";

const CONTENT_SCRIPT = "metamask-contentscript";
const INPAGE = "metamask-inpage";

function getProvider() {
  return new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/d62fb642f5ad46ec98639ad9d23de080"
  );
}

function setGlobalProvider(providerInstance) {
  window.ethereum = providerInstance;
  window.dispatchEvent(new Event("ethereum#initialized"));
  console.log(Injected);
}

setGlobalProvider(getProvider());

// const metamaskStream = new WindowPostMessageStream({
//   name: INPAGE,
//   target: CONTENT_SCRIPT,
// });

// initializeProvider({
//   connectionStream: metamaskStream,
//   logger: log,
//   shouldShimWeb3: true,
// });
