import { headerType } from "./Header";
import Contacts from "@/views/base/Contacts";
import Calls from "@/views/base/Calls";
import Status from "@/views/base/Status";

export default function Basebar({ selected, setSelectedPage }: { selected: number; setSelectedPage: (index: number) => void }) {

  const basePageType = () => {
    if(selected === 0) return <Contacts setSelectedPage={setSelectedPage}/>
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
