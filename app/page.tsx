"use client";

import Basebar from "@/components/Basebar";
import Sidebar from "@/components/Sidebar";
import ChatPage from "@/views/ChatPage";
import { useState } from "react";

export default function App(){
  const [selected, setSelected] = useState(0)
  return (
    <>
      <Sidebar setIndex={setSelected}/>
      <Basebar selected={selected}/>
      <ChatPage/>
    </>
    
  )
}