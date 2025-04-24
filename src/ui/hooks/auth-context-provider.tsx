import { WhoAmI } from '@/electron/api/api-user';
import { useCallback, useMemo, useState } from "react";
import { LocalStorage } from "../storage/store";
import { AuthContext } from "./use-auth-context";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<WhoAmI | undefined>(() => {
    return LocalStorage.getItem('user-data') ?? undefined;
  });

  const setUser = useCallback((user: WhoAmI) => {
    LocalStorage.setItem('user-data', user);
    setUserState(user);
  }, []);

  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
