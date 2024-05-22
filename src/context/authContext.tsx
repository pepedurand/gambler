"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  isUserLoggedIn: false,
  loading: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  async function initilizaUser(user: any) {
    if (user) {
      setCurrentUser({ ...user });
      setIsUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsUserLoggedIn(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    return onAuthStateChanged(auth, initilizaUser);
  }, []);

  const value = { currentUser, isUserLoggedIn, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
