import Contact from "@/components/Contact";
import { useState } from "react";

export default function Status() {
  const length = 5;
  const seqArray = Array.from({ length }, (_, index) => index);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div>
        <Contact
          name="My Status"
          isStatus={true}
          message="click the add Status Update"
          profile="AS"
        />
      </div>

      <div className="mb-5 pl-3 text-white text-[15px] font-semibold">
        Recent
      </div>
      {seqArray.map((n) => (
        <Contact
          key={n}
          isStatus={true}
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
