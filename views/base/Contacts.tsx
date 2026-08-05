import Contact from "@/components/Contact";
import { useState } from "react";
import SearchInput from "@/components/SearchInput";

export default function Contacts({setSelectedPage}: {setSelectedPage: (index: number) => void}) {
  const length = 5;
  const seqArray = Array.from({ length }, (_, index) => index);
  const [index, setIndex] = useState<number | null>(null);

  const handleClick = (n: number) => {
    if (index === n) {
      setIndex(null);
      
    } else {
      setIndex(n);
      setSelectedPage(n + 1);
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
          name="Jonny"
          message="Salam Anar"
          time="14:23"
          profile="SA"
        />
      ))}
    </>
  );
}
