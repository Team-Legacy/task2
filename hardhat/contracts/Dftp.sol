// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DFtp {
    struct Data {
        uint256 id;
        string name;
        string description;
        string hashUrl;
        string category;
        address author;
        address[] sharedPeers;
    }

    Data[] private myStorage;

    // upload files to blocks in the EVN
    function addFile(
        uint256 _id,
        string memory _name,
        string memory _description,
        string memory _hashUrl,
        string memory _category,
        address _author,
        address[] calldata _sharedPeers
    ) public {
        Data memory myData = Data(
            _id,
            _name,
            _description,
            _hashUrl,
            _category,
            msg.sender,
            _sharedPeers
        );
        //i would save this to my db
        myStorage.push(myData);
    }

    // get all fiels uploaded by an address
    function getAllUploadedFiles() public view returns (Data[] memory) {
        Data[] memory result;
        Data[] memory arr = myStorage;
        uint256 k = 0; //result array index
        for (uint256 i = 0; i < arr.length; i++) {
            if (arr[i].author == msg.sender) {
                result[k] = arr[i];
                k++;
            }
        }

        return result;
    }

    // get all public files Visible to an address
    function getAllPublicSharedFiles() public view returns (Data[] memory) {
        Data[] memory result;
        Data[] memory arr = myStorage;
        uint256 k = 0; //result array index
        for (uint256 i = 0; i < arr.length; i++) {
            if (arr[i].author != msg.sender && arr[i].sharedPeers.length < 1) {
                result[k] = arr[i];
                k++;
            }
        }

        return result;
    }

    // get all private files visible to an address
    function getAllPrivateSharedFiles() public view returns (Data[] memory) {
        Data[] memory result;
        Data[] memory arr = myStorage;
        uint256 k = 0; //result array index
        for (uint256 i = 0; i < arr.length; i++) {
            if (arr[i].author != msg.sender && arr[i].sharedPeers.length > 0) {
                for (uint256 j = 0; j < arr[i].sharedPeers.length; j++) {
                    if (arr[i].sharedPeers[j] == msg.sender) {
                        result[k] = arr[i];
                        k++;
                    }
                }
            }
        }

        return result;
    }
}