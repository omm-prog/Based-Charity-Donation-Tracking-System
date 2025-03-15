import { ethers } from "ethers"; // ✅ Correct import

export async function connectWallet() {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      return { provider, signer, address };
    } catch (error) {
      console.error("Error connecting wallet:", error);
      return null;
    }
  } else {
    alert("MetaMask is not installed!");
    return null;
  }
}
