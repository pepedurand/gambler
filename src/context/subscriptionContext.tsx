"use client";
import { useGetSubscriptionStatus } from "@/hooks/useGetSubscriptionStatus";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";

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
  const { data: subscriptionStatus, isLoading: isLoadingApi } =
    useGetSubscriptionStatus();
  const { isUserLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoadingApi && subscriptionStatus && isUserLoggedIn) {
      if (subscriptionStatus.status === "active") {
        return setUserHasAccess(true), setIsLoading(false);
      }
      setUserHasAccess(false);
      setIsLoading(false);
    }
  }, [isLoadingApi, subscriptionStatus, isUserLoggedIn]);

  const value = { userHasAccess, isLoading };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
}
