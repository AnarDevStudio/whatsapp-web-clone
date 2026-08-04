import Message from "@/components/Message";

export default function ChatPage({
  selectedPage,
}: {
  selectedPage: number;
}) {


  return (
    <>
      <div
        className="
        w-screen
        h-screen
        bg-black
        [mask-image:url('https://static.whatsapp.net/rsrc.php/yx/r/voSdkk88H7C.svg')]
        mask-repeat
        mask-size-[360px_640px]
        absolute
        -z-20
      "
      />
      {selectedPage === 1 && <Message sender={true} message="Hello" time="12:00" profile="https://static.whatsapp.net/rsrc.php/yS/r/T_xj3a3ApC9.webp"/>}
      {selectedPage === 2 && <h1>sik</h1>}
      {selectedPage === 3 && <h1>am</h1>}
      {selectedPage === 4 && <h1>got</h1>}
    </>
  );
}
