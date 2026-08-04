export default function Message({
  sender = false,
  message,
  time,
}: {
  sender: boolean;
  message: string;
  time: string;
}) {
  return (
    <div
      className={`
        relative
        w-fit
        h-fit
        flex
        gap-1
        p-2
        m-2
        rounded-[10px]
        ${
          sender
            ? "bg-[#144d37] rounded-tr-none"
            : "bg-[#242626] rounded-tl-none"
        }
      `}
    >
      <Arrow sender={sender} />

      <div className="text-white">{message}</div>

      <div className="text-[#9fa4a4] text-[13px] self-end">
        {time}
      </div>
    </div>
  );
}

export function Arrow({ sender }: { sender: boolean }) {
  return (
    <div
      className={`
        before:content-['']
        before:absolute
        before:top-0
        before:w-0
        before:h-0

        ${
          sender
            ? `
              before:-right-2
              before:border-l-[8px]
              before:border-l-[#144d37]
              before:border-b-[8px]
              before:border-b-transparent
            `
            : `
              before:-left-2
              before:border-r-[8px]
              before:border-r-[#242626]
              before:border-b-[8px]
              before:border-b-transparent
            `
        }
      `}
    />
  );
}