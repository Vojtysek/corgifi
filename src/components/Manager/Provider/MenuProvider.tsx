"use client";

import React, { createContext, useState, useContext } from "react";

interface MenuType {
  menu: Map<string, boolean>;
  setMenuValue: (key: string, value: boolean) => void;
}

interface MenuProviderProps {
  children: React.ReactNode;
}

export const MyMenu = createContext<MenuType | undefined>(undefined);

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menu, setMenu] = useState<Map<string, boolean>>(new Map());

  const setMenuValue = (key: string, value: boolean) => {
    const newMenu = new Map(menu);
    newMenu.set(key, value);
    setMenu(newMenu);
  };

  const menuValue: MenuType = {
    menu: menu,
    setMenuValue: setMenuValue,
  };

  return <MyMenu.Provider value={menuValue}>{children}</MyMenu.Provider>;
};

export const useMenuContext = () => {
  const menu = useContext(MyMenu);
  if (!menu) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return menu;
};
