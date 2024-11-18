"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Home");
  }, [router]);

  return null; // Return null because the component redirects immediately
}
