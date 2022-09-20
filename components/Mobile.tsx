import Image from "next/image";
import React, { useEffect, useState } from "react";

/* Components */
import { UserInfo } from "../types/types";
import Card from "./Card";
import Tabs from "./Tabs";

/* Assets */
import follow from "../assets/icons/follow.svg";
import nft from "../assets/icons/receive_square.svg";
import token from "../assets/icons/send_square.svg";
import share from "../assets/icons/share.svg";
import avatar from "../assets/images/lemon.jpg";
import navaraLogo from "../assets/logos/navara_logo.svg";
import logo from "../assets/logos/navara_logo_custom.svg";
import { useDebounce } from "../hooks/useDebounce";
import API from "../services/api";
import SearchDropdown from "./SearchDropdown";
import { Spinner } from "./Spinner";
const items: { icon: any; text: string }[] = [
  {
    icon: token,
    text: "Token",
  },
  {
    icon: nft,
    text: "NFT",
  },
  {
    icon: follow,
    text: "Follow",
  },
  {
    icon: share,
    text: "Share",
  },
];

const categories = ["Token", "NFT"];
const user: UserInfo = {
  name: "Do Nam Trung",
  alias: "@trungdo",
  domain: "trungdo.nns.one",
  address: "0x123.789",
  expirationDate: "09/27",
  isValid: true,
  avatar: avatar,
  logo: logo,
};

const Mobile: React.FC = () => {
  const [resultSearch, setResultSearch] = useState(false);

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // State and setters for ...
  // Search term
  const [searchTerm, setSearchTerm] = useState("");
  // API search results
  const [results, setResults] = useState([]);
  // Searching status (whether there is pending API request)
  const [isSearching, setIsSearching] = useState(false);

  const [data, setData] = useState([]);
  // Debounce search term so that it only gives us latest value ...
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // API search function
  const searchCharacters = async (search: any) => {
    return await API.get("domain/find", {
      params: {
        domain: search,
      },
    }).then((result) => {
      console.log(result.data);
      setResults(result.data);
    });
  };
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then((results: any) => {
          setIsSearching(false);
        });
      } else {
        setResults([]);
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  console.log(results, "results");
  return (
    <div className="max-w-xs mx-auto">
      <div className="flex justify-center mb-5">
        <Image src={navaraLogo} className="mx-auto" />
      </div>
      <SearchDropdown
        placeholder="Seach other address"
        className=" p-2"
        onChange={handleSearch}
        value={searchTerm}
        searching={resultSearch}
      />
      {isSearching && (
        <div className="my-3">
          <Spinner />
        </div>
      )}
      {/* {results &&
        results?.map((result) => ( */}
      {/* {results && ( */}
      {/* <Transition
        show={results}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      > */}
      <div className="flex cursor-pointer hover:bg-gray-200">
        {/* <div className="p-2">
          <Image src={token} width="15" height="15" />
        </div> */}

        {/* <div className="flex p-1 flex-col">
          <p>{results.domain}</p>
        </div> */}
      </div>
      {/* </Transition> */}
      {/* )} */}

      <Card {...user} />
      <div className="relative -top-11 mx-auto pt-3 px-5 w-4/5 h-16 bg-white rounded-t-2xl">
        <div className="flex justify-between">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="divider relative flex flex-col items-center w-[50px]"
              >
                <Image src={item.icon} width="16px" height="16px" />
                <p className="mt-2 text-xs">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Tabs tabList={categories} />
    </div>
  );
};

export default Mobile;
