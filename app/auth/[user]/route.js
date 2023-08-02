import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    console.log(params.slug);
}
