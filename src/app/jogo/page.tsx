"use client";
import { useAuth } from "@/context/authContext";
import { redirect } from "next/navigation";

export default function LightningRoulette() {
  const { isUserLoggedIn } = useAuth();

  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  return (
    <>
      <iframe
        width="1280px"
        height="1080px"
        src="https://live.leon.red/frontend/evo/r2/"
      ></iframe>
    </>
  );
}
