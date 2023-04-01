const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Test Escrow", async () => {
  before("Deploy Escrow", async () => {
    const accounts = await ethers.getSigners();
    arbiter = accounts[0];
    beneficiary = accounts[1];

    const Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(arbiter.address, beneficiary.address);
    await escrow.deployed();

    // console.log("Escrow contract deployed at:", escrow.address);
  });
  it("Only arbiter should be able to approve the escrow", async () => {
    await expect(escrow.connect(beneficiary).approve()).to.be.reverted;
    await escrow.connect(arbiter).approve();
    // await escrow.connect(beneficiary).approve();
    expect(await escrow.connect(beneficiary).isApproved()).to.be.true;
    expect(await escrow.connect(arbiter).isApproved()).to.be.true;
  });
});

// depositor = ethers.provider.getSigner(0);
// beneficiary = ethers.provider.getSigner(1);
// arbiter = ethers.provider.getSigner(2);
