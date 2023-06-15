"use client";

import React, { createContext, useState, useContext } from "react";

interface ImageType {
  image: Map<string, string>;
  setImageValue: (key: string, value: string) => void;
}

interface ImageProviderProps {
  children: React.ReactNode;
}

export const Image = createContext<ImageType>({
  image: new Map(),
  setImageValue: () => {},
});

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [image, setImage] = useState<Map<string, string>>(new Map());

  const setImageValue = (key: string, value: string) => {
    const newImage = new Map(image);
    newImage.set(key, value);
    setImage(newImage);
  };

  const imageValue: ImageType = {
    image: image,
    setImageValue: setImageValue,
  };

  return <Image.Provider value={imageValue}>{children}</Image.Provider>;
};

export const useImageContext = () => {
  const image = useContext(Image);
  if (!image) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return image;
};
