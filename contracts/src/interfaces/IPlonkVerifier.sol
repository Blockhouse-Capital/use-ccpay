// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.9;

interface IPlonkVerifier {
    function verifyProof(bytes memory proof, uint[] memory pubSignals) external view returns (bool);
}