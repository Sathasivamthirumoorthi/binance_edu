const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const User = await hre.ethers.getContractFactory("user");
    const user = await User.deploy();

    await user.deployed();
    console.log("User Info address:", user.address);

    // saveFrontendFiles(sampleContract);

}

// function saveFrontendFiles(contract) {
//     const fs = require("fs");
//     const contractsDir = __dirname + "/../src/abis";

//     if (!fs.existsSync(contractsDir)) {
//         fs.mkdirSync(contractsDir);
//     }

//     fs.writeFileSync(
//         contractsDir + "/contract-address.json",
//         JSON.stringify({ SampleContract: contract.address }, undefined, 2)
//     );

//     const SampleContractArtifact = artifacts.readArtifactSync("SampleContract");

//     fs.writeFileSync(
//         contractsDir + "/SampleContract.json",
//         JSON.stringify(SampleContractArtifact, null, 2)
//     );
// }

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });