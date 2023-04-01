const { ethers } = require("hardhat");

async function main() {
  const accounts = await ethers.getSigners();
  const arbiter = accounts[0];
  const beneficiary = accounts[1];

  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(arbiter.address, beneficiary.address);
  await escrow.deployed();

  console.log("Escrow contract deployed at:", escrow.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/deploy.js --network localhost
// Escrow contract deployed at: 0x5FbDB2315678afecb367f032d93F642f64180aa3
