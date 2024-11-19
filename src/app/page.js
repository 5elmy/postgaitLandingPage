"use client";


import { redirect } from "next/navigation";

export default function Home() {


  return redirect("/Home"); // Return null because the component redirects immediately
}
