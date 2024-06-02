"use client";

import { Input } from "antd";
import { FaSearch } from "react-icons/fa";

export const InputSearch = ({ handleSearchProducts }: { handleSearchProducts: (value: string) => void }) => {
  return (
    <div className="w-full ">
      <Input
        placeholder="Search"
        className="max-w-[30rem] w-full"
        onChange={(e) => {
          handleSearchProducts(e.target.value);
        }}
        prefix={<FaSearch />}
      />
    </div>
  );
};
