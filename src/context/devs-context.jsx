import React from "react";
import { getDevs } from "../services/db";

export const DevsContext = React.createContext();

export function DevsContextProvider({ children }) {
  const [devs, setDevs] = React.useState(null);

  const fetchDevs = async () => {
    const devs = await getDevs();
    setDevs(devs);
  };

  React.useEffect(() => {
    fetchDevs();
  }, []);

  return (
    <DevsContext.Provider value={{ devs }}>{children}</DevsContext.Provider>
  );
}
