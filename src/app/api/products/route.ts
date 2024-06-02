import { db } from "@/lib/firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const collRef = collection(db, "products");
    const products = await getDocs(collRef);

    const results = products.docs.map((res) => {
      return {
        id: res.id,
        ...res.data(),
      };
    });

    return NextResponse.json({ status: 200, message: "success", data: results });
  } catch (error: any) {
    return NextResponse.json({ status: 200, message: "field" || error.message, data: {} });
  }
}
