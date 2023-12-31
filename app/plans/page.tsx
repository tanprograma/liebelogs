import React from "react";

import Link from "next/link";
import { Log } from "@/interfaces/interfaces";
import PageContainer from "../components/pageContainer";

const page = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/logs`;
  let plans: Log[] = [];
  try {
    const req = await fetch(`${url}/plans`, { cache: "no-store" });
    plans = (await req.json()).map((i: any) => {
      i.created_at = new Date(i.created_at);
      i.modified_at = new Date(i.modified_at);
      return i;
    });
  } catch (error) {
    plans = [];
  }

  return (
    <div>
      <div>
        <Link href={"/plans/create"}>create plans</Link>
      </div>
      <PageContainer route="url" data={plans} />;
    </div>
  );
};

export default page;
