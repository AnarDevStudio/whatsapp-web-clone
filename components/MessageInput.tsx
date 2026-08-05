"use client";

import { useState } from "react";

export default function MessageInput({
  onSend,
}: {
  onSend: (message: string) => void;
}) {
  const [message, setMessage] = useState("");

  return (
    <div className="flex bg-[#242626] p-2 justify-between items-center gap-2 rounded-full">
      <div className="text-white flex space-x-3">
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <title>plus-rounded</title>
          <path
            fill="currentColor"
            d="M11 13H5.5a1 1 0 1 1 0-2H11V5.5a1 1 0 1 1 2 0V11h5.5a1 1 0 1 1 0 2H13v5.5a1 1 0 1 1-2 0V13Z"
          ></path>
        </svg>
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          fill="currentColor"
        >
          <title>wds-ic-sticker-smiley</title>
          <path
            fill="currentColor"
            d="M8.5 10.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          ></path>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M16.82 19.98A6.97 6.97 0 0 1 12 22H9.27A7.27 7.27 0 0 1 2 14.73V9.27A7.27 7.27 0 0 1 9.27 2h5.46A7.27 7.27 0 0 1 22 9.27v2.54c0 1.94-.77 3.8-2.15 5.17l-3.03 3ZM14.72 4H9.28A5.27 5.27 0 0 0 4 9.27v5.46A5.27 5.27 0 0 0 9.27 20h2.06a.9.9 0 0 0 .68-.88l-.02-2.26v-.11a5.5 5.5 0 0 1-4.65-2.6.6.6 0 0 1 .03-.6c.12-.2.3-.3.53-.3h5.7a4.8 4.8 0 0 1 3.22-1.23l2.26.01c.5 0 .9-.4.9-.9V9.07H20A5.27 5.27 0 0 0 14.73 4Zm-.71 15.11c0 .15-.01.3-.04.44a4.96 4.96 0 0 0 1.44-.99l3.03-3c.46-.46.83-.99 1.09-1.56-.15.02-.3.03-.46.03h-2.26A2.8 2.8 0 0 0 14 16.84l.02 2.26Z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="flex w-120">
          <input
            type="text"
            placeholder="Type a message"
            className="bg-[#242626] caret-green-500 text-white w-full flex items-start placeholder:text-[#9fa4a4] border-none focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div
          className="bg-[#21c063] rounded-full p-2 cursor-pointer"
          onClick={() => {
            onSend(message);
            setMessage("");
          }}
        >
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <title>wds-ic-send-filled</title>
            <path
              fill="currentColor"
              d="M5.4 19.43a.99.99 0 0 1-.95-.1.93.93 0 0 1-.45-.83V14l8-2-8-2V5.5c0-.37.15-.65.45-.84a1 1 0 0 1 .95-.09l15.4 6.5c.42.19.63.5.63.93 0 .43-.21.74-.63.93l-15.4 6.5Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
