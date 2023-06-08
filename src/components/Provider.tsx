"use client";

import React, { createContext, useState, useContext } from "react";

// Define the context type
interface MyContextType {
  map: Map<string, boolean>;
  setMapValue: (key: string, value: boolean) => void;
}

interface MyContextProviderProps {
  children: React.ReactNode;
}

// Create the context
export const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  // Define the state for the map
  const [map, setMap] = useState<Map<string, boolean>>(new Map());

  // Function to update the map value
  const setMapValue = (key: string, value: boolean) => {
    const newMap = new Map(map);
    newMap.set(key, value);
    setMap(newMap);
  };

  // Create the context value
  const contextValue: MyContextType = {
    map,
    setMapValue,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Custom hook to use the context values
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
