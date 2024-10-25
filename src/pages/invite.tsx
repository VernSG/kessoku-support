import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Invite() {
  const router = useRouter();
  useEffect(() => {
    window.location.href =
      "https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D1256409606373113988%26permissions%3D8%26scope%3Dbot";
  }, [router]);
}
