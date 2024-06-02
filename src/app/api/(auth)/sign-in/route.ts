import { auth } from "@/lib/firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return NextResponse.json({ message: "Login successful", status: 200 });
  } catch (error: any) {
    console.error("Login failed:", error.message);
    return NextResponse.json({ error: "Login failed", status: 400, message: error.message });
  }
}
