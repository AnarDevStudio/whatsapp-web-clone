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
        m-4
        rounded-[10px]
        ${
          sender
            ? "bg-[#144d37] rounded-tr-none items-end self-end"
            : "bg-[#242626] rounded-tl-none"
        }
      `}
    >
      <Arrow sender={sender} />

      <div className="text-white">{message}</div>

      <div className="text-[#9fa4a4] text-[13px] self-end">{time}</div>

      {sender ? (
        <svg
          className="text-[#9fa4a4]"
          viewBox="0 0 24 24"
          width="16"
          preserveAspectRatio="xMidYMid meet"
          fill="currentColor"
        >
          <title>wds-ic-read</title>
          <path
            fill="currentColor"
            d="M14.73 6.01a1 1 0 0 1 1.41-.15l.01.01a1 1 0 0 1 .15 1.41L7.6 18.01a1 1 0 0 1-.73.37h-.05c-.26 0-.52-.11-.71-.3l-4.03-4.09a.99.99 0 0 1 0-1.41.99.99 0 0 1 1.41 0l3.25 3.29 7.99-9.86Zm5.71.12a1 1 0 0 1 1.41-.15h-.01a1 1 0 0 1 .15 1.41l-8.41 10.45a1 1 0 0 1-.73.37h-.05a1 1 0 0 1-.71-.3l-1.36-1.26a.55.55 0 0 1-.02-.81l.56-.68c.21-.2.53-.21.75-.03l.71.58 7.71-9.58Z"
          ></path>
        </svg>
      ) : null}
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
