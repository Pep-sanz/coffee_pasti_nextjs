"use client";

import Providers from "@/lib/providers";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <Providers>
        <main
          className="
    bg-bgPrimary 
    shadow-md shadow-neutral-500 rounded-md min-h-[80vh] w-full xl:max-w-[50%] flex flex-col justify-center items-center gap-10 px-6
    "
        >
          <div className="text-4xl font-bold text-primary">
            Sign <span className="text-white">{pathName === "/sign-up" ? "Up" : "In"}</span>
          </div>
          {children}
          <div className="text-white">
            {pathName === "/sign-up" ? "Already have an account?" : "Don't have an account?"}
            <Link href={pathName === "/sign-up" ? "/sign-in" : "/sign-up"} className="text-sky-500 italic underline">
              Sign-{pathName === "/sign-up" ? "in" : "up"}
            </Link>
          </div>
        </main>
      </Providers>
    </div>
  );
}
