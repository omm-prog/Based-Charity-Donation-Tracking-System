import { ethers } from "ethers"; // ✅ Correct import
import contractABI from "./CrowdfundingABI.json";

const contractAddress = "0xe2899bddFD890e320e643044c6b95B9B0b84157A"; // Replace with your deployed contract address

export async function getContract(signer) {
  return new ethers.Contract(contractAddress, contractABI, signer);
}
