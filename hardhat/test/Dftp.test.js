const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

let id,
  name,
  description,
  hashurl,
  category,
  author,
  sharedPeers,
  deployedContract;

before("Deploy the smart contract", async () => {
  const Dftp = await ethers.getContractFactory("DFtp");
  const dftp = await Dftp.deploy();
  deployedContract = await dftp.deployed();
});

describe("Dftp", () => {
  it("upload a file to the network with all input parameters specified", async () => {
    id = 1;
    name = "The lion king";
    description = "The story of the lion in the jungle";
    hashurl = "hasdgsdfgdsgfgfsdhsdgh";
    category = "Articles";
    author = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
    sharedPeers = [
      "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
      "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    ];
    expect(id).to.not.be.undefined;
    assert.isNumber(id, "must be a number");
    expect(name).to.not.be.undefined;
    assert.isString(name, "must be a string");
    expect(description).to.not.be.undefined;
    assert.isString(description, "must be a string");
    expect(hashurl).to.not.be.undefined;
    assert.isString(hashurl, "must be a string");
    expect(category).to.not.be.undefined;
    assert.isString(category, "must be a string");
    expect(author).to.not.be.undefined;
    assert.isString(author, "must be a string");
    expect(sharedPeers).to.not.be.empty;
    assert.isArray(sharedPeers, "it should be an array of addresses");

    const AddFile = await deployedContract.addFile(
      id,
      name,
      description,
      hashurl,
      category,
      author,
      sharedPeers
    );

    assert.isObject(AddFile, "This should be an object");
    assert.property(AddFile, "data", "It must have a  data property");
    expect(AddFile).to.not.be.null;
    expect(AddFile).to.not.be.undefined;
    expect(AddFile).to.not.be.NaN;
    //console.log(await deployedContract.getAls());
  });
  it("get all uploaded files returned as an array", async () => {
    //console.log(await deployedContract.getAllUploadedFiles());
    assert.isArray(await deployedContract.getAllUploadedFiles());
  });
  it("get all private files accessible to an address", async () => {
    assert.isArray(
      await deployedContract.getAllPrivateSharedFiles(),
      "an array is expected"
    );
  });
  it("get all public files accessible to an address", async () => {
    assert.isArray(
      await deployedContract.getAllPublicSharedFiles(),
      "an array is expected"
    );
  });
});
