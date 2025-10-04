import { FocusModeProvider } from "./focus-mode-ctx";
import { FontFamilyProvider } from "./font-family-ctx";
import { FontSizeProvider } from "./font-size-ctx";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <FontSizeProvider>
      <FontFamilyProvider>
        <FocusModeProvider>{children}</FocusModeProvider>
      </FontFamilyProvider>
    </FontSizeProvider>
  );
};
