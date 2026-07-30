import { useState } from "react";

type SearchInput = {
  placeholder: string;
};

export default function SearchInput({ placeholder }: SearchInput) {
  
  const [value, setValue] = useState("");

  const isEmply = (n: string) => {
    if (n.trim()) {
      return (
        <div
          onClick={() => setValue("")}
          className="mr-3 text-white hover:bg-[#343636] cursor-pointer"
        >
          <span aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              height="20"
              width="20"
              preserveAspectRatio="xMidYMid meet"
              fill="currentColor"
            >
              <title>ic-close</title>
              <path
                fill="currentColor"
                d="m12 13.4-4.9 4.9a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27.95.95 0 0 1-.28-.7c0-.28.1-.52.28-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.98c.3 0 .53.1.71.28l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.27c.28 0 .52.09.7.27.18.18.27.42.27.7 0 .28-.09.52-.27.7L13.4 12l4.9 4.9c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27L12 13.4Z"
              ></path>
            </svg>
          </span>
        </div>
      );
    }
  };

  return (
    <div className="bg-[#2e2f2f] rounded-full h-9 flex items-center pl-2 m-2">
      <span className="text-[#abacac] ml-1">
        <svg
          viewBox="0 0 24 24"
          height="16"
          width="16"
          preserveAspectRatio="xMidYMid meet"
          fill="currentColor"
        >
          <title>ic-search</title>
          <path
            fill="currentColor"
            d="M9.5 16a6.27 6.27 0 0 1-4.61-1.89A6.27 6.27 0 0 1 3 9.5c0-1.82.63-3.35 1.89-4.61A6.27 6.27 0 0 1 9.5 3c1.82 0 3.35.63 4.61 1.89A6.27 6.27 0 0 1 16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-5.6-5.6A5.96 5.96 0 0 1 9.5 16Zm0-2c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 14 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 9.5 5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 5 9.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 9.5 14Z"
          ></path>
        </svg>
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeholder}
        className="outline-0 pl-2 text-white text-[11px] w-full placeholder:text-[14px]"
      />
      {isEmply(value)}
    </div>
  );
}
