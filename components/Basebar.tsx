"use client";

import SearchInput from "./SearchInput";
import { headerType } from "./Header";
import Messages from "@/views/base/Messages";

export default function Basebar({ selected }: { selected: number }) {

  const basePageType = () => {
    if(selected === 0) return <Messages/>
  }

  return (
    <aside className="bg-[#161717] w-160 h-screen border border-[#2e2f2f]">
      {headerType({ selected })}
      <SearchInput placeholder="Search or start a new chat" />
      {basePageType()}
    </aside>
  );
}
