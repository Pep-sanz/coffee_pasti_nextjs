"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="hero-section brightness-100 flex min-h-screen items-center justify-between px-6">
      <div className="flex flex-col justify-center gap-6 w-full max-w-[500px] h-full lg:ms-20">
        <div className="text_shadow text-[1.5rem] md:text-[2.5rem] font-semibold drop-shadow-lg flex flex-col ">
          <p>Kopi yang Pasti, Kehangatan yang Pasti. Selamat Datang di</p>
          <p className="text-[2.5rem] lg:text-[4.5rem] mt-1 font-extrabold">
            <span className="text-primary bgne">Coffee</span> <span>Pasti</span>
          </p>
        </div>
        <Button onClick={() => router.push("/menu")}>Beli Sekarang</Button>
      </div>
    </main>
  );
}
