import { ethers, upgrades } from "hardhat";

async function main() {
  const EUSD = await ethers.getContractFactory("eUSD");
  const eUSD = await upgrades.deployProxy(EUSD, [
    "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
    134400,
  ]);
  await eUSD.deployed();

  console.log("eUSD deployed to:", eUSD.address);
}

main().catch((error) => {
  console.error(error);
});
