import Contact from "@/components/Contact";
import { useState } from "react";
import SearchInput from "@/components/SearchInput";


export default function Calls() {
  const length = 5;
  const seqArray = Array.from({ length }, (_, index) => index);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <SearchInput placeholder="Search name, number or @username" />
      <div className="mb-5 pl-3 text-white text-[15px] font-semibold">Recent</div>
      {seqArray.map((n) => (
        <Contact
          key={n}
          classA={index === n ? "bg-[#262524]" : ""}
          onClick={() => setIndex(n)}
          name="TURAL Emi"
          message="Missed call"
          time="Yesterday"
          profile="SA"
        />
      ))}
    </>
  );
}
