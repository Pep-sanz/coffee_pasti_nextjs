import { auth } from "@/lib/firebase/firebase.config";
import { registerUser } from "@/lib/firebase/firebase.service";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, userName } = await req.json();
    await registerUser({ userName, email, password });
    return NextResponse.json({ status: 200, message: "register succesfull" });
  } catch (err: any) {
    return NextResponse.json({ status: 404, message: "not found" });
  }
}
