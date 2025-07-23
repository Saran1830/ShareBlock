# 🔐 ShareBlock

**Secure & Decentralized File Sharing Platform**

ShareBlock is a decentralized platform that enables secure file storage and sharing using IPFS.

---

## 🚀 Run Locally

Follow these steps to set up the project on your local machine.

---

### 1. Clone the Repository

```bash
git clone https://github.com/Saran1830/ShareBlock.git
cd ShareBlock
```

---

### 2. Start the Frontend

```bash
cd client
npm install
npm run dev
```

This starts the frontend on [http://localhost:5173](http://localhost:5173)

---

### 3. Set Up the Backend (Smart Contracts)

```bash
cd backend
npm install --save-dev hardhat
```

---

### 4. Start the Local Blockchain

Open a **new terminal** and run:

```bash
npx hardhat node
```

Leave this terminal running.

---

### 5. Deploy Smart Contracts

In another terminal (while inside the `backend` folder):

```bash
npx hardhat run --network localhost scripts/deploy.js
```

---

You're now ready to use ShareBlock locally! 🎉  
Visit: [http://localhost:5173](http://localhost:5173)
