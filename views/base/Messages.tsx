import Contact from "@/components/Contact";
import { useState } from "react";
import SearchInput from "@/components/SearchInput";


export default function Messages({changeIndex} : {changeIndex: () => void}) {
  const length = 5;
  const seqArray = Array.from({ length }, (_, index) => index);
  const [index, setIndex] = useState<number | null>(null);

  const handleClick = (n: number) => {
    if (index === n) {
      setIndex(null);
      
    } else {
      setIndex(n);
      changeIndex();
    }
  };

  return (
    <>
      <SearchInput placeholder="Search or start a new chat" />
      {seqArray.map((n) => (
        <Contact
          key={n}
          classA={index === n ? "bg-[#262524]" : ""}
          onClick={() => handleClick(n)}
          name="TURAL Emi"
          message="Salam Anar"
          time="14:23"
          profile="SA"
        />
      ))}
    </>
  );
}
