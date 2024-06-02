"use client";

import { useGetUser } from "@/hooks/useGetUser";
import { auth } from "@/lib/firebase/firebase.config";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return <div>Dashboard</div>;
}
