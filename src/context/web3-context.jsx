import React from "react";
import * as metamask from "../utils/metamask";

export const Web3Context = React.createContext();

export function Web3ContextProvider({ children }) {
  const [account, setAccount] = React.useState();
  const [token, setToken] = React.useState();

  const getConnectedAccount = React.useCallback(async () => {
    try {
      const acc = await metamask.getConnectedAccount();
      setAccount(acc);
      return acc;
    } catch (e) {
      setAccount(null);
      return null;
    }
  }, [setAccount, setToken]);

  const getDevId = React.useCallback(
    async (acc) => {
      try {
        if (!acc) {
          throw Error("No account available");
        }

        const tok = await metamask.getDevId("D4R", acc);
        setToken(tok);
        return tok;
      } catch (e) {
        setToken(null);
        return null;
      }
    },
    [setAccount, setToken]
  );

  React.useEffect(() => {
    async function fetchData() {
      const acc = await getConnectedAccount();
      await getDevId(acc);
    }

    fetchData();
    metamask.onAccountChange(fetchData);
  }, []);

  const connect = React.useCallback(async () => {
    try {
      const account = await metamask.connectAccount();
      setAccount(account);
    } catch (e) { }
  }, [setAccount]);

  const loading = account === undefined || token === undefined;

  return (
    <Web3Context.Provider value={{ loading, account, token, connect }}>
      {children}
    </Web3Context.Provider>
  );
}
