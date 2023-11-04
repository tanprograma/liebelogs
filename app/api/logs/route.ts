import { connectDB } from "@/database/connectDB";
import { DiaryModel } from "@/database/models/diary";
import { LogModel } from "@/database/models/log";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  await connectDB();
  const res_data = await LogModel.find();
  return NextResponse.json(res_data);
}
export async function POST(req: NextRequest, res: NextResponse) {
  await connectDB();
  const req_data = await req.json();
  const res_data = await LogModel.create(req_data);
  await DiaryModel.create({
    content: `created a log with title ${res_data.title}`,
  });
  return NextResponse.json(res_data);
}
