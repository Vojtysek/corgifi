"use client";

import { Drag } from "../components/Draggable";
import { Menus } from "./Data/Menus";
import { useMyContext } from "./Provider";

export interface MenuProps {
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const MenuBar = () => {
  const { map, setMapValue } = useMyContext();

  const handleOpenMenu = (menu: MenuProps): void => {
    if (map.get(menu.name) === true) {
      setMapValue(menu.name, false);
    } else {
      setMapValue(menu.name, true);
    }
  };

  const Menu = (menu: MenuProps) => {
    return (
      <div onClick={() => handleOpenMenu(menu)} className=" w-[20px] h-[20px]">
        {menu.icon}
      </div>
    );
  };

  return (
    <>
      <Drag name="Menu">
        {Menus.map((menu: MenuProps) => (
          <Menu key={menu.name} {...menu} />
        ))}
      </Drag>
    </>
  );
};

export default MenuBar;
