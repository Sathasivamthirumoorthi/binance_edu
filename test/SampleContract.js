const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sample Contract", () => {
    let User_info, user_info;

    beforeEach(async () => {
        User_info = await ethers.getContractFactory("user");
        user_info = await User_info.deploy();
    });

    it("Setting User Info", async () => {
        expect(user_info.register(1,"Jeeva","qwertyui","clg","kg"))
    });

    it("Getting User Info", async () => {
        const get = expect(user_info.getuser(1))
        console.log(get)
    });

});