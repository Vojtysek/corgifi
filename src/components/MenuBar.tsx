"use client";

import { Drag } from "./Manager/Draggable";
import { Menus } from "./Data/Menus";
import { useMenuContext } from "./Manager/Provider/MenuProvider";

export interface MenuProps {
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const MenuBar = () => {
  const { menu: map, setMenuValue: setMapValue } = useMenuContext();

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
