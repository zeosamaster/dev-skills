import { useEffect, useState } from "react";

import { getDevs } from "../services/db";
import { DevTable } from "../components/DevTable";

export function Devs() {
  const [devs, setDevs] = useState(null);

  const fetchDevs = async () => {
    const devs = await getDevs();
    setDevs(devs);
  };

  useEffect(() => {
    fetchDevs();
  }, []);

  return <DevTable devs={devs} />
}