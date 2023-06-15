"use client";

import React, { createContext, useState, useContext } from "react";

interface ImageType {
  image: string;
  setImageValue: (value: string) => void;
}

interface ImageProviderProps {
  children: React.ReactNode;
}

export const Image = createContext<ImageType>({
  image: "",
  setImageValue: () => {},
});

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [image, setImage] = useState<string>("");

  const setImageValue = (value: string) => {
    setImage(value);
  };

  const imageValue: any = {
    image,
    setImageValue,
  };

  return <Image.Provider value={imageValue}>{children}</Image.Provider>;
};

export const useImageContext = () => {
  const { image, setImageValue } = useContext(Image);
  if (!{image, setImageValue}) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return { image, setImageValue };
};
