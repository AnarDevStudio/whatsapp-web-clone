type ContactProps = {
  name: string;
  message: string;
  time?: string;
  profile: string;
  onClick?: () => void;
  classA?: string;
  isStatus?: boolean;
};

export default function Contact({
  name,
  message,
  time,
  profile,
  isStatus = false,
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
          <div className="h-11 w-11 bg-blue-600 rounded-full mr-4">
            <span className="h-8 w-8 bg-[#21c063] rounded-full">
              <svg
                viewBox="0 0 24 24"
                height="8"
                width="8"
                preserveAspectRatio="xMidYMid meet"
                fill="currentColor"
              >
                <title>ic-add</title>
                <path
                  fill="currentColor"
                  d="M11 13H6a.97.97 0 0 1-.71-.29A.97.97 0 0 1 5 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h5V6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v5h5c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 18 13h-5v5c0 .28-.1.52-.29.71A.94.94 0 0 1 12 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 18v-5Z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white">{name}</span>
            <span className="text-[#ffffff99] text-[14px]">{message}</span>
          </div>
        </div>
        <div className="text-[#ffffff99] text-[12px] flex flex-col justify-center items-end">
          {isStatus ? null : <span>{time}</span>}
          {isStatus ? null : (
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
          )}
        </div>
      </div>
    </div>
  );
}
