import React from "react";

import Link from "next/link";
import { Log } from "@/interfaces/interfaces";
import PageContainer from "../components/pageContainer";

const page = async () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/logs`;
  let reviews: Log[] = [];
  try {
    const req = await fetch(`${url}/reviews`, { cache: "no-store" });

    reviews = (await req.json()).map((i: any) => {
      i.created_at = new Date(i.created_at);
      i.modified_at = new Date(i.modified_at);
      return i;
    });
  } catch (error) {
    reviews = [];
  }

  return (
    <div>
      <div>
        <Link href={"/reviews/create"}>create reviews</Link>
      </div>
      <PageContainer route="url" data={reviews} />;
    </div>
  );
};

export default page;
