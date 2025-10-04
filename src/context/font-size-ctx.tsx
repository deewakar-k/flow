"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface FontSizeContextType {
  fontSize: number;
  cycleFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined
);

export const FontSizeProvider = ({ children }: { children: ReactNode }) => {
  const [fontSize, setFontSize] = useState(16);

  const cycleFontSize = () => {
    setFontSize((prev) => {
      if (prev === 16) return 18;
      if (prev === 18) return 20;
      return 16;
    });
  };
  return (
    <FontSizeContext.Provider value={{ fontSize, cycleFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error("useFontSize must be used within FontSizeProvider");
  }

  return context;
};
