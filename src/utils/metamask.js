import { ethers } from "ethers";

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
