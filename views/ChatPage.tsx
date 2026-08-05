import Message from "@/components/Message";
import MessageInput from "@/components/MessageInput";

export default function ChatPage({ selectedPage }: { selectedPage: number }) {
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
      <div className="w-full min-h-screen flex flex-col justify-end">
        <div className="w-full flex flex-col">
          {selectedPage === 1 && (
            <>
              <Message sender={true} message="Hello" time="12:00" />
              <Message sender={false} message="Hello" time="12:00" />
            </>
          )}
          {selectedPage === 2 && (
            <Message sender={false} message="Hello" time="12:00" />
          )}
          {selectedPage === 3 && <h1>am</h1>}
          {selectedPage === 4 && <h1>got</h1>}
        </div>
        <div className=" bottom-0 w-fit p-2">
          <MessageInput onSend={() => console.log("send")} />
        </div>
      </div>
    </>
  );
}
