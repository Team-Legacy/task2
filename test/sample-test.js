const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");
//const { add } = require("ramda");

use(solidity);

describe("Nova Legacy Library", function () {
  let dFtp,owner, address1, address2;

  //  fetch data from gas station
  before((done) => {
    setTimeout(done, 2000);
  });

  describe("DFtp", function () {
    it("Deployment test, should deploy", async function () {
      const DFtp = await ethers.getContractFactory("DFtp");
      dFtp = await DFtp.deploy();
      [owner, address1, address2] = await ethers.getSigners()
    });

    describe("These test cases for add file to the system and retriving them", function () {
      it("Adding file", async function () {


        await dFtp.addFile(1,"The lion king","The story of the lion in the jungle","hasdgsdfgdsgfgfsdhsdgh","Articles",true,[
        "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
        "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
        ], 123456);
        expect(await dFtp.getNumberOfItems()).to.equal(1);
     });

     it("retrieve All my uploads", async function () {
        const file = await dFtp.getAllMyUploadedFiles()
        expect(file[1].toString()).to.equal("The lion king");
        expect(file[0].toString()).to.equal(1);
     });

     it("ChangeVisibility of file", async function () {
        await dFtp.changeVisibility(1, false);
        const file = await dFtp.getAllMyUploadedFiles()
        expect(file[0][6]).to.equal(false);
     });
    });

    describe("Adding Peers to File Sharing", function () {
      it("share file", async function () {
        await dFtp.addFile(2,"The lion king","The story of the lion in the jungle","hasdgsdfgdsgfgfsdhsdgh","Articles",false,[], 1234567);
        await dFtp.addSharedPeers(2, ["0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"]);
        const file = await dFtp.getAllMyUploadedFiles()
        expect(file[0][7][0]).to.equal("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2");
       
      })

      it("stop sharing the file with 0x01be23585060835e02b77ef475b0cc51aa1e0709", async function () {
        await dFtp.removeSharedPeers(2, ["0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"]);
        const file = await dFtp.getAllMyUploadedFiles()
        expect(file[0][7][0]).to.equal(undefined);
      })
    })

    describe("Public and Private Access to files", function () {
      it("Have access to public elements", async function () {
        await dFtp.addFile(1,"The lion king","The story of the lion in the jungle","hasdgsdfgdsgfgfsdhsdgh","Articles",true,[], 1234567);

        assert.isArray(
        await dFtp.connect(address1).getAllPublicSharedFiles(),
        "an array is expected"
      );
      })

      it("Havr access to Private elements", async function () {
        await dFtp.addFile(1,"The lion king","The story of the lion in the jungle","hasdgsdfgdsgfgfsdhsdgh","Articles",false,[address1], 1234567);

        assert.isArray(
          await dFtp.connect(address1).getAllPublicSharedFiles(),
          "an array is expected"
        );
      })
    });
  });
});
