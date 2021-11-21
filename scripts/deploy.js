// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

// TODO: change this to a ts file
async function main() {
  // @ts-ignore
  const [deployer, governance] = await hre.ethers.getSigners();

  const network = await ethers.provider.getNetwork();

  console.log("Network ", network);

  console.log("Deploying contracts with the account:", deployer.address);

  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, World!");

  // const Token = await hre.ethers.getContractFactory("Token");
  // const token = await Token.deploy();

  const Reward = await hre.ethers.getContractFactory("ERC20Mock");
  const reward = await Reward.deploy("Test Token", "TEST", 18);

  const StakingPools = await hre.ethers.getContractFactory("StakingPools");
  const stakingPools = await StakingPools.deploy(reward.address, governance.getAddress())

  await reward.deployed();
  await stakingPools.deployed();

  console.log("Reward deployed to:", reward.address);
  console.log("Staking pools deployed to:", stakingPools.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
