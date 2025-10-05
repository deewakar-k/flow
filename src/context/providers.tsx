import { ThemeProvider } from "next-themes";
import { FocusModeProvider } from "./focus-mode-ctx";
import { FontFamilyProvider } from "./font-family-ctx";
import { FontSizeProvider } from "./font-size-ctx";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <FontSizeProvider>
      <FontFamilyProvider>
        <FocusModeProvider>
          <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
            {children}
          </ThemeProvider>
        </FocusModeProvider>
      </FontFamilyProvider>
    </FontSizeProvider>
  );
};
