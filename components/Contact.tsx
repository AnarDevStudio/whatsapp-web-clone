type ContactProps = {
  name: string;
  message: string;
  time: string;
  profile: string;
  onClick: () => void;
  classA: string;
};

export default function Contact({
  name,
  message,
  time,
  profile,
  onClick,
  classA,
}: ContactProps) {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer group items-center m-2 group mt-2 hover:bg-[#262524] rounded-2xl p-1 select-none ${classA}`}
    >
      <div className="flex justify-between w-full p-2">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-blue-600 rounded-full mr-4"></div>
          <div className="flex flex-col">
            <span className="text-white">{name}</span>
            <span className="text-[#ffffff99] text-[14px]">{message}</span>
          </div>
        </div>
        <div className="text-[#ffffff99] text-[12px] flex flex-col justify-center items-end">
          <span>{time}</span>
          <span className="text-end flex justify-end mt-1 invisible group-hover:visible group-hover:translate-x-0 translate-x-5 transition-all">
            <svg
              viewBox="0 0 24 24"
              height="20"
              width="20"
              preserveAspectRatio="xMidYMid meet"
              fill="currentColor"
            >
              <title>ic-expand-more</title>
              <path
                fill="currentColor"
                d="M12 14.95a1.1 1.1 0 0 1-.38-.06.88.88 0 0 1-.32-.21l-4.6-4.6a.95.95 0 0 1-.28-.7.95.95 0 0 1 .98-.97c.28-.01.52.08.7.27l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.28.95.95 0 0 1 .97.97c0 .29-.09.52-.27.7l-4.6 4.6c-.1.1-.2.18-.32.22a1.1 1.1 0 0 1-.38.06Z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
