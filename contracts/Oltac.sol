// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract ONFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    string public imageURI;
    event CreatedONFT(uint256 indexed tokenId, string picname);

    constructor() ERC721("Oltac NFT", "OFT")
    {
        tokenCounter = 0;
    }

    function create(string memory picname) public {
        _safeMint(msg.sender, tokenCounter);

       console.log("msg.sender", msg.sender);

       console.log("tokenId", tokenCounter);

      imageURI = baseTokenURI(picname);

        console.log("imageURI", imageURI);

        _setTokenURI(tokenCounter, formatTokenURI(imageURI));
        tokenCounter = tokenCounter + 1;
        emit CreatedONFT(tokenCounter, picname);
    }


  function baseTokenURI( string memory picname) public pure returns (string memory) {
    return string(abi.encodePacked("https://opensea-creatures-api.herokuapp.com/api/creature/", picname ));
  }



    function formatTokenURI(string memory URI) public pure returns (string memory) {
        return string(
                abi.encodePacked(
                                '{"name":"',
                                "Oltac NFT",
                                '", "description":"An in-memory Picture NFT script!", "attributes":"", "image":"',URI,'"}'
                            )
                        );
    }

}