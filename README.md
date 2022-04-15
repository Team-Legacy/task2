# task2

## Building a Decentralized Library which allows;
  1. Upload
  2. Retrieve files
  3. Sharing of files


Using Moralis which is the fastest way to build and deploy dApps on Ethereum, BSC, Polygon, Solana, and Elrond (more coming). All Moralis dApps are cross-chain by default. Building on Moralis ensures that your dApp is future-proof. Even if new blockchains are invented, your dApp will instantly work on any chain.

Now we discuss the decentralized aspect of the libary using IPFS
IPFS knows how to find that sweet, sweet aardvark information by its contents, not its location (more on that, which is called content addressing,instead of asking one of Wikipedia's computers for the page, your computer uses IPFS to ask lots of computers around the world to share the page with you.
And, when you use IPFS, you don't just download files from someone else — your computer also helps distribute them. When your friend a few blocks away needs the same Wikipedia page, they might be as likely to get it from you as they would from your neighbor or anyone else using IPFS.

IPFS makes this possible for not only web pages but also any kind of file a computer might store, whether it's a document, an email, or even a database record.


## Memory Array Building
Interacting with the storage of a contract on the blockchain is among the most expensive operations of the EVM. Therefore, only necessary data should be stored and redundancy should be avoided if possible. This is in contrast to conventional software architecture, where storage is cheap and data is stored in a way that optimizes performance. While most of the times the only relevant cost of queries in those systems is time, in Ethereum even simple queries can cost a substantial amount of gas, which has a direct monetary value. One way to mitigate gas costs is declaring a variable public. This leads to the creation of a getter in the background allowing free access to the value of the variable. But what if we want to aggregate data from several sources? This would require a lot of reading from storage and would therefore be particularly costly.

## We us the memory array building when;

1. you want to retrieve aggregated data from storage.
2. you want to avoid paying gas when retrieving data.
3. your data has attributes that are subject to changes


## Implementation
The implementation of this pattern can be divided into two parts. Part one covers the way the requested data is stored, whereas part two explains the actual aggregation and retrieval of the data:

1. To make data retrieval convenient it makes sense to chose a data structure that is easy to iterate over. In Solidity this is achieved by an array. In cases where aggregation is necessary, the data usually has more than one attribute. This characteristic can be implemented by a custom data type in the form of a struct. Combining these requirements, we end up with an array of structs, with the struct containing all attributes of an item. Another indispensable part is a mapping, which keeps track of the number of expected data entries for every possible aggregation instance. This mapping will come into play in part two.

2. The aggregation is then performed in a view function, so that no gas is consumed. A problem that makes the task a little more difficult is the fact that Solidity does not allow an array of structs as a return value of a function yet. We therefore propose a workaround that only returns the IDs of the desired items. It is then the task of the requesting entity to use these IDs to query the structs one by one. As the state is not changed by these additional operations, the queries are free as well. To gather the IDs of the desired items we first create an array to store them. Since we are not allowed to change the contract state in a view function we will create this array in memory.


# Functions 

## 1. Upload files to blocks: 
which take in the inputs name, description, hashurl, category and author
This function allows the adding of files to a block

## 2. Get all files uploaded by an address: 
This function allows users to retrive all the files uploaded by a particular address

## 3. Get all Public files visible to an address:
Allows for the download of all the public files visible to a specific address

## 4. Get all Private files visible to an address:
Just like the get public files. The get private files allows specific addresses listed to get particular private files that not available to everyone

https://kovan.etherscan.io/address/0xb20fbd2a9e9db2ce827bb3d3e02cf627d6660cb9#code


