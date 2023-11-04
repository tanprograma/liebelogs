import { Diary, Log } from "@/interfaces/interfaces";
import Image from "next/image";

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

  const diary_req = await fetch(`${url}/diary`, { cache: "no-cache" });
  const diaries: Diary[] = await diary_req.json();
  const log_req = await fetch(`${url}/logs`, { cache: "no-cache" });
  const logs: Log[] = await log_req.json();
  const thoughts = logs.filter((i) => i.category == "thoughts").length;
  const reviews = logs.filter((i) => i.category == "reviews").length;
  const plans = logs.filter((i) => i.category == "plans").length;
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-title">Diary Entries</div>
        <div className="stat-value">{diaries.length}</div>
        <div className="stat-desc">diaries</div>
      </div>

      <div className="stat">
        <div className="stat-title">Thoughts Entries</div>
        <div className="stat-value">{thoughts}</div>
        <div className="stat-desc">
          Thoughts ({Math.ceil((thoughts * 100) / logs.length)}%)
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Plans Entries</div>
        <div className="stat-value">{plans}</div>
        <div className="stat-desc">
          Plans ({Math.ceil((plans * 100) / logs.length)}%)
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Reviews Entries</div>
        <div className="stat-value">{reviews}</div>
        <div className="stat-desc">
          Reviews ({Math.ceil((reviews * 100) / logs.length)}%)
        </div>
      </div>
    </div>
  );
}
