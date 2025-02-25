import { WhoAmI } from "@/electron/api/user";
import { useState } from "react";
import { LocalStorage } from "../storage/store";

export default function useWhoAmI() {
  const [whoAmI, setWhoAmIState] = useState<WhoAmI | undefined>(() => {
    const results = LocalStorage.getItem('user-data');
    return results ?? undefined;
  });

  function setWhoAmI(whoAmIResponse: WhoAmI) {
    LocalStorage.setItem('user-data', whoAmIResponse);
    setWhoAmIState(whoAmIResponse);
  };

  return { whoAmI, setWhoAmI };
}
