import { connectDB } from "@/database/connectDB";
import { DiaryModel } from "@/database/models/diary";
import { LogModel } from "@/database/models/log";
import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: { category: string };
}
export async function GET(
  req: NextRequest,

  { params }: Props
) {
  await connectDB();
  const res_data = await LogModel.find({ category: params.category });
  if (!res_data) return NextResponse.json([]);
  return NextResponse.json(res_data);
}
