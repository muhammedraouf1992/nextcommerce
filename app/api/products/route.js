import { api } from "@/app/components/woocommerce/woocommerce";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { data } = await api.get("products");

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 401 });
  }
}
