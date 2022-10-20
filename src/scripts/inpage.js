import { ethers } from "ethers";

function getProvider() {
  return new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/d62fb642f5ad46ec98639ad9d23de080"
  );
}

function setGlobalProvider(providerInstance) {
  window.ethereum = providerInstance;
  window.dispatchEvent(new Event("ethereum#initialized"));
}

setGlobalProvider(getProvider());
