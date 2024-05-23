import { getSubscriptionStatus } from "@/api/subscription";
import { useAuth } from "@/context/authContext";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const useGetSubscriptionStatus = () => {
  const { currentUser } = useAuth();

  const email = currentUser?.email;

  return useQuery({
    queryKey: ["email"],
    enabled: !!email,
    queryFn: () => getSubscriptionStatus(email ?? null),
  });
};
