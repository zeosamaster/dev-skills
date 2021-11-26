import React from "react";
import * as metamask from "../utils/metamask";

export function useWeb3() {
  const [loading, setLoading] = React.useState(true);
  const [account, setAccount] = React.useState("");

  const getConnectedAccount = async () => {
    try {
      const connectedAccount = await metamask.getConnectedAccount();
      setAccount(connectedAccount);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setAccount("");
      setLoading(true);
    }
  };

  React.useEffect(() => {
    getConnectedAccount();
    metamask.onAccountChange(getConnectedAccount);
  }, []);

  const connect = React.useCallback(async () => {
    try {
      const account = await metamask.connectAccount();
      setAccount(account);
    } catch (error) {
      console.error(error);
    }
  }, [setAccount]);

  return {
    loading,
    connect,
    account,
  };
}
