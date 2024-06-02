"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { useRouter, usePathname } from "next/navigation";

import React, { useEffect } from "react";
import { auth } from "./firebase/firebase.config";
import { Navbar } from "@/components/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const disableNavbar = ["/sign-in", "/sign-up"];

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/sign-in");
      }
    });
  }, []);

  return (
    <>
      <QueryClientProvider client={client}>
        <AntdRegistry>
          {!disableNavbar.includes(usePathname()) && <Navbar />}
          {children}
        </AntdRegistry>
      </QueryClientProvider>
    </>
  );
}
