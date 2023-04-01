const { ethers } = require("hardhat");

async function main() {
  const accounts = await ethers.getSigners();
  const arbiter = "0x315F60449DaB3D321aF75821b576E7F436308635";
  const beneficiary = "0x4B40f99E93A8814be7fDe5F6AaFA5e9823E13728";
  //   const depositor = "0x3f39Ae58Cb1148ec1Ad903648319359Cfdc34a02";

  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(arbiter, beneficiary);
  await escrow.deployed();

  console.log("Escrow contract deployed at:", escrow.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/deploy-sepolia.js --network sepolia
// Escrow contract deployed at: 0x9db5D32894a5474265b356408f16C0599315ecbd
