import React from "react";

import Link from "next/link";
import { Log } from "@/interfaces/interfaces";
import PageContainer from "../components/pageContainer";

const page = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/logs`;
  const req = await fetch(`${url}/reviews`, { cache: "no-store" });

  const plans: Log[] = (await req.json()).map((i: any) => {
    i.created_at = new Date(i.created_at);
    i.modified_at = new Date(i.modified_at);
    return i;
  });

  return (
    <div>
      <div>
        <Link href={"/reviews/create"}>create reviews</Link>
      </div>
      <PageContainer route="url" data={plans} />;
    </div>
  );
};

export default page;
