import { WhoAmI } from "@/electron/api/api-user";
import { createContext, useContext } from "react";

export interface AuthContextType {
  user?: WhoAmI;
  setUser: (user: WhoAmI) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }

  return context;
}
