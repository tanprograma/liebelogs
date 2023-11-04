import { connectDB } from "@/database/connectDB";
import { DiaryModel } from "@/database/models/diary";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  await connectDB();
  const res_data = await DiaryModel.find();

  return NextResponse.json(res_data);
}
export async function POST(req: NextRequest, res: NextResponse) {
  await connectDB();
  const req_data = await req.json();
  const res_data = await DiaryModel.create(req_data);

  return NextResponse.json(res_data);
}
