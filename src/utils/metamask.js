import { ethers } from "ethers";

import erc20abi from "./erc20.abi.json";

const tokenAddresses = {
  DEVS: "0x25ed58c027921e14d86380ea2646e3a1b5c55a8b",
};

function getEthereum() {
  const { ethereum } = window;

  if (!ethereum) {
    throw new Error("Ethereum object doesn't exist!");
  }

  return ethereum;
}

export const getProvider = () => {
  return new ethers.providers.Web3Provider(getEthereum());
};

export const getSigner = () => {
  const provider = getProvider();
  return provider.getSigner();
};

export const getConnectedAccount = async () => {
  const accounts = await getEthereum().request({ method: "eth_accounts" });

  if (accounts.length === 0) {
    throw new Error("No authorized account found");
  }

  return accounts[0];
};

export const connectAccount = async () => {
  const accounts = await getEthereum().request({
    method: "eth_requestAccounts",
  });
  return accounts[0];
};

export const onAccountChange = (cb) => {
  getEthereum().on("accountsChanged", cb);
};

export const getFirstTokenId = async (symbol, account) => {
  const contractId = tokenAddresses[symbol];
  const abi = erc20abi;
  const signer = getSigner();

  try {
    const tokenInst = new ethers.Contract(contractId, abi, signer);
    const tokenId = await tokenInst.tokenOfOwnerByIndex(account, 0);
    return Number(tokenId);
  } catch (e) {
    return null;
  }
};

export const getDevId = async (account) => {
  return await getFirstTokenId("DEVS", account);
};
