"use client";

import React, { createContext, useState, useContext } from "react";

interface ImageType {
  image: string;
  setImageValue: (value: string) => void;
}

interface ImageProviderProps {
  children: React.ReactNode;
}

export const MyImage = createContext<ImageType | undefined>(undefined);

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [image, setImage] = useState<string>("/coffee.jpeg");

  const setImageValue = (value: string) => {
    setImage(value);
  };

  const imageValue: ImageType = {
    image: image,
    setImageValue: setImageValue,
  };

  return <MyImage.Provider value={imageValue}>{children}</MyImage.Provider>;
}

export const useImageContext = () => {
  const image = useContext(MyImage);
  if (!image) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return image;
}