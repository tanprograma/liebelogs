import React from "react";

import Link from "next/link";
import { Log } from "@/interfaces/interfaces";
import PageContainer from "../components/pageContainer";

const page = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/logs`;
  const req = await fetch(`${url}/thoughts`, { cache: "no-store" });
  const plans: Log[] = (await req.json()).map((i: any) => {
    i.created_at = new Date(i.created_at);
    i.modified_at = new Date(i.modified_at);
    return i;
  });

  return (
    <div>
      <div>
        <Link href={"/thoughts/create"}>create thought</Link>
      </div>
      <PageContainer route="url" data={plans} />;
    </div>
  );
};

export default page;
