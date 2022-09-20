import Image from "next/image";
import React from "react";

import search from "../assets/icons/search.svg";

type SearchProps = {
  placeholder?: string;
  className?: string;
  onChange?: (event: any) => void;
  onSubmit?: (event: any) => void;
  value?: string;
  searching?: boolean;
};

const SearchDropdown: React.FC<SearchProps> = ({
  placeholder,
  className,
  onChange,
  onSubmit,
  value,
}) => {
  return (
    <>
      <div
        className={`flex rounded-lg border items-center gap-4  px-2 ${className}`}
      >
        <Image src={search} />
        <div>
          <input
            id="first_name"
            className=" w-64 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            type="search"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </>
  );
};

export default SearchDropdown;
