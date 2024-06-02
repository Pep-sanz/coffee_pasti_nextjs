import React from "react";
import { Button, Dropdown, Space, type MenuProps } from "antd";

type DropDownProps = {
  handleClickCategory: (category: string) => void;
};

export const DropDown = (props: DropDownProps) => {
  const { handleClickCategory } = props;
  const items: MenuProps["items"] = [
    {
      label: <Button onClick={() => handleClickCategory("EspressoBased")}>EspressoBased</Button>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <Button onClick={() => handleClickCategory("Flavored Coffees")}>Flavored Coffees</Button>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <Button onClick={() => handleClickCategory("Iced Coffees")}>Iced Coffees</Button>,
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: <Button onClick={() => handleClickCategory("Blended Drinks")}>Blended Drinks</Button>,
      key: "3",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button onClick={(e) => e.preventDefault()}>kategori</Button>
    </Dropdown>
  );
};
