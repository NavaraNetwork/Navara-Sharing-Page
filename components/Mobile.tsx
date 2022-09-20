import Image from "next/image";
import React, { useState } from "react";

import { Transition } from "@headlessui/react";
import { UserInfo } from "../types/types";

/* Components */
import Card from "./Card";
import Tabs from "./Tabs";
/* Assets */
import follow from "../assets/icons/follow.svg";
import nft from "../assets/icons/receive_square.svg";
import token from "../assets/icons/send_square.svg";
import share, { default as IconTest } from "../assets/icons/share.svg";
import avatar from "../assets/images/lemon.jpg";
import navaraLogo from "../assets/logos/navara_logo.svg";
import logo from "../assets/logos/navara_logo_custom.svg";
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
    setLoading(true);
    setSearchText(event.target.value);
    if (searchText === "") {
      setTimeout(() => {
        setLoading(false);
        setResultSearch(true);
      }, 3000);
    } else {
      setLoading(false);
      setResultSearch(false);
    }
  };
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const fakeData = [
    {
      name: "quanganhdo.nns.one",
      address: "0x32823FFA26CE889adEC765B8b60E96bD0BDA0217",
      icon: IconTest,
    },
    {
      name: "quanganhtran.nns.one",
      address: "0x32823FFA262131313123123123sss6bD0BDA0217",
      icon: IconTest,
    },
    {
      name: "tuando.nns.one",
      address: "0x32823FFA26CE889adEC2131360E96bD0BDA0217",
      icon: IconTest,
    },
  ];
  return (
    <div className="max-w-xs mx-auto">
      <div className="flex justify-center mb-5">
        <Image src={navaraLogo} className="mx-auto" />
      </div>

      <SearchDropdown
        placeholder="Seach other address"
        className=" p-2"
        onChange={handleSearch}
        value={searchText}
        searching={resultSearch}
      />
      {loading && (
        <div className="my-3">
          <Spinner />
        </div>
      )}
      {resultSearch ? (
        <>
          {fakeData.map((item) => {
            return (
              <Transition
                show={resultSearch}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="flex cursor-pointer hover:bg-gray-200">
                  <div className="p-2">
                    <Image src={item.icon} width="30" height="30" />
                  </div>

                  <div className="flex p-1 flex-col">
                    <p>{item.name}</p>
                  </div>
                </div>
              </Transition>
            );
          })}
          <></>
        </>
      ) : (
        <></>
      )}

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
