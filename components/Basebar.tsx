import { headerType } from "./Header";
import Messages from "@/views/base/Messages";
import Calls from "@/views/base/Calls";
import Status from "@/views/base/Status";

export default function Basebar({ selected, changeIndex }: { selected: number; changeIndex: () => void }) {

  const basePageType = () => {
    if(selected === 0) return <Messages changeIndex={changeIndex}/>
    if(selected === 1) return <Calls/>
    if(selected == 2) return <Status/>
  }

  return (
    <aside className="bg-[#161717] w-160 h-screen border border-[#2e2f2f]">
      {headerType({ selected })}
      {basePageType()}
    </aside>
  );
}
