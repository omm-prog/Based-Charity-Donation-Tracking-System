import React, { useState, useEffect } from "react";
import { connectWallet } from "./blockchain/connectWallet";
import { getContract } from "./blockchain/contract";
import { ethers } from "ethers";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [campaignName, setCampaignName] = useState("");
  const [campaignGoal, setCampaignGoal] = useState("");

  useEffect(() => {
    async function init() {
      const wallet = await connectWallet();
      if (wallet) {
        setWalletAddress(wallet.address);
        const contractInstance = await getContract(wallet.signer);
        setContract(contractInstance);
      }
    }
    init();
  }, []);

  async function createCampaign() {
    if (!contract) return alert("Contract not loaded");
    try {
      console.log("Creating campaign...");
      const tx = await contract.createCampaign(
        campaignName,
        "Test description",
        ethers.utils.parseEther(campaignGoal),
        7
      );
      await tx.wait();
      alert("✅ Campaign created successfully!");
      setCampaignName("");
      setCampaignGoal("");
      fetchCampaigns(); // Auto refresh campaigns
    } catch (error) {
      console.error("❌ Error creating campaign:", error);
    }
  }

  async function fetchCampaigns() {
    if (!contract) return alert("Contract not loaded");

    try {
      console.log("Fetching campaigns...");

      // 🔥 **Step 1: Get total campaign count**
      const totalCampaigns = await contract.campaignCount();
      console.log("Total Campaigns:", totalCampaigns.toString());

      if (totalCampaigns.toNumber() === 0) {
        alert("⚠️ No campaigns found!");
        return;
      }

      // 🔥 **Step 2: Fetch all campaigns dynamically**
      const campaignsArray = [];
      for (let i = 0; i < totalCampaigns.toNumber(); i++) {
        try {
          const campaign = await contract.campaigns(i);
          console.log(`📢 Campaign ${i}:`, campaign);

          campaignsArray.push({
            name: campaign.name,
            goal: ethers.utils.formatEther(campaign.goal),
            balance: ethers.utils.formatEther(campaign.balance),
            owner: campaign.owner,
          });
        } catch (error) {
          console.log(`❌ Error fetching campaign at index ${i}:`, error);
        }
      }

      console.log("✅ Fetched campaigns:", campaignsArray);
      setCampaigns(campaignsArray);
    } catch (error) {
      console.error("❌ Error fetching campaigns:", error);
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blockchain Crowdfunding</h1>
      <h3>Wallet: {walletAddress || "Not Connected"}</h3>

      <button onClick={fetchCampaigns}>Fetch Campaigns</button>

      <h2>Create a Campaign</h2>
      <input
        type="text"
        placeholder="Campaign Name"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Goal (ETH)"
        value={campaignGoal}
        onChange={(e) => setCampaignGoal(e.target.value)}
      />
      <button onClick={createCampaign}>Create</button>

      <h2>All Campaigns</h2>
      {campaigns.length === 0 ? (
        <p>No campaigns available</p>
      ) : (
        campaigns.map((c, index) => (
          <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>{c.name}</h3>
            <p>🎯 Goal: {c.goal} ETH</p>
            <p>💰 Balance: {c.balance} ETH</p>
            <p>👤 Owner: {c.owner}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
