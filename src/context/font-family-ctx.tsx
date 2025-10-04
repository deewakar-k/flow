"use client";

import { createContext, useContext, useState } from "react";

interface FontFamilyContextType {
  fontFamily: string;
  fontDisplay: string;
  cycleFontFamily: () => void;
}

const FontFamilyContext = createContext<FontFamilyContextType | undefined>(
  undefined
);

const FONT_DISPLAY_NAMES: Record<string, string> = {
  "--font-inter": "Sans",
  "--font-newYork": "Serif",
};

export const FontFamilyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fontFamily, setFontFamily] = useState("--font-inter");

  const cycleFontFamily = () => {
    setFontFamily((prev) => {
      if (prev === "--font-inter") return "--font-newYork";
      return "--font-inter";
    });
  };

  const fontDisplay = FONT_DISPLAY_NAMES[fontFamily] || fontFamily;

  return (
    <FontFamilyContext.Provider
      value={{ fontFamily, fontDisplay, cycleFontFamily }}
    >
      {children}
    </FontFamilyContext.Provider>
  );
};

export const useFontFamily = () => {
  const ctx = useContext(FontFamilyContext);

  if (ctx === undefined) {
    throw new Error("useFontFamily must be within FontFamilyProvider");
  }

  return ctx;
};
