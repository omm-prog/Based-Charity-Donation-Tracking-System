# Based Charity Donation Tracking System

## 📌 Project Overview
The **Based Charity Donation Tracking System** is a blockchain-powered crowdfunding platform designed to ensure **secure, transparent, and traceable** donations. NGOs can create campaigns, donors can contribute funds, and funds are held in escrow until the NGO provides proof of completion. If proof isn't submitted, the funds are **automatically refunded** to donors.

## 🚀 Features
- **NGO Campaign Creation** 📢
- **Donor Contributions via Blockchain** 💰
- **Escrow-Based Fund Holding** 🔐
- **Automated Refunds if Proof Not Submitted** ⏳
- **MetaMask Integration for Secure Transactions** 🦊
- **Smart Contract Deployment on Ganache/Testnet** ⛓️

## 🏗️ Tech Stack
- **Solidity** (Smart Contracts)
- **Ganache** (Local Ethereum Blockchain)
- **Web3.js / Ethers.js** (Blockchain Interaction)
- **React.js** (Frontend UI)
- **MetaMask** (Crypto Wallet)
- **IPFS / Firebase** (Proof Submission Storage)

## 📜 Smart Contract Structure
The smart contract follows a **state-based model** with the following states:
1. `Active` – Campaign is open for donations.
2. `Successful` – Campaign reached its funding goal.
3. `Failed` – Proof not submitted; funds are refunded.

## 📌 Installation Guide
### 1️⃣ Clone the Repository
```bash
  git clone https://github.com/omm-prog/charity-donation-tracking.git
  cd charity-donation-tracking
```
### 2️⃣ Install Dependencies
```bash
  npm install
```
### 3️⃣ Start Ganache (Local Blockchain)
- Open **Ganache** and create a new workspace.
- Copy the RPC URL (e.g., `http://127.0.0.1:7545`).

### 4️⃣ Deploy Smart Contract
```bash
  truffle migrate --reset --network development
```
### 5️⃣ Run the Frontend
```bash
  npm start
```

## 🔗 Smart Contract Functions
| Function | Description |
|----------|------------|
| `createCampaign` | Allows an NGO to start a new campaign. |
| `donateToCampaign` | Enables donors to contribute funds securely. |
| `submitProof` | NGO submits proof of fund usage. |
| `withdrawFunds` | Allows NGO to withdraw funds upon proof verification. |
| `autoRefund` | Automatically refunds donors if proof isn't submitted in time. |
| `getCampaigns` | Fetches all active campaigns. |

## 📷 Screenshots
### 🔹 **Homepage (Campaign List)**
![Homepage](assets/homepage.png)
### 🔹 **Donation Page**
![Donation Page](assets/donation.png)

## 🎯 Future Enhancements
- ✅ **Multi-chain Support (Ethereum, Polygon, etc.)**
- ✅ **AI-based Fraud Detection for NGOs**
- ✅ **Decentralized Identity Verification**

## 🤝 Contributing
1. **Fork** the repository.
2. **Create** a new branch.
3. **Commit** changes and push.
4. Submit a **pull request**.

## 📩 Contact
👤 **Om Chauhan**  
📧 [omm-prog@github](https://github.com/omm-prog)

---

🎉 **Let's build a transparent and secure donation platform together!**
