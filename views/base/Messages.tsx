import Contact from "@/components/Contact";
import { useState } from "react";

export default function Messages() {
  const length = 5;
  const seqArray = Array.from({ length }, (_, index) => index);
  const [index, setIndex] = useState(0);

  return (
    <>
      {seqArray.map((n) => (
        <Contact
          key={n}
          classA={index === n ? "bg-[#262524]" : ""}
          onClick={() => setIndex(n)}
          name="TURAL Emi"
          message="Salam Anar"
          time="14:23"
          profile="SA"
        />
      ))}
    </>
  );
}
