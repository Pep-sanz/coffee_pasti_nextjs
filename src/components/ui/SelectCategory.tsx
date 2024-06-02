"use client";

import { Select, Space } from "antd";

type SelectProps = {
  handleClickCategory: (category: string) => void;
};

const options = [
  { value: "All Coffees", label: "All Coffees" },
  { value: "EspressoBased", label: "EspressoBased" },
  { value: "Flavored Coffees", label: "Flavored Coffees" },
  { value: "Iced Coffees", label: "Iced Coffees" },
  { value: "Blended Drinks", label: "Blended Drinks" },
];

export const SelectCategory = (props: SelectProps) => {
  const { handleClickCategory } = props;
  const handleChange = (value: string) => {
    handleClickCategory(value);
  };
  return <Select defaultValue={options[0].value} style={{ width: 200 }} onChange={handleChange} options={options} />;
};
