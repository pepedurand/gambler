"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
import { getSubscriptionStatus } from "@/api/subscription";

const SubscriptionContext = createContext({
  userHasAccess: false,
  isLoading: false,
});

export function useSubscription() {
  return useContext(SubscriptionContext);
}

export function SubscriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userHasAccess, setUserHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser, isUserLoggedIn } = useAuth();

  useEffect(() => {
    async function checkSubscriptionStatus() {
      const email = currentUser?.email ?? null;
      const subscriptionStatus = await getSubscriptionStatus(email);
      if (subscriptionStatus && subscriptionStatus?.status === "active") {
        return setUserHasAccess(true), setIsLoading(false);
      }
      setUserHasAccess(false), setIsLoading(false);
    }
    if (isUserLoggedIn) {
      checkSubscriptionStatus();
    }
    if (!isUserLoggedIn) {
      setUserHasAccess(false);
    }
  }, [isUserLoggedIn]);

  const value = { userHasAccess, isLoading };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
