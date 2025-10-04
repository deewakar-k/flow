"use client";

import { useFocusMode } from "@/context/focus-mode-ctx";
import { useFontFamily } from "@/context/font-family-ctx";
import { useFontSize } from "@/context/font-size-ctx";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

export const Editor = () => {
  const { fontSize } = useFontSize();
  const { fontFamily } = useFontFamily();
  const { isFocusMode } = useFocusMode();

  const [content, setContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const parseContentForFocusMode = () => {
    const lastPeriodIndex = content.lastIndexOf(".");

    if (lastPeriodIndex === -1) {
      return { mutedText: "", activeText: content };
    }

    return {
      mutedText: content.slice(0, lastPeriodIndex + 1),
      activeText: content.slice(lastPeriodIndex + 1),
    };
  };

  const { mutedText, activeText } = parseContentForFocusMode();

  const sharedStyles = {
    fontSize: `${fontSize}px`,
    fontFamily: `var(${fontFamily})`,
  };

  const sharedClasses =
    "resize-none font-[450] w-full flex-1 whitespace-pre-wrap leading-relaxed p-0 m-0";

  return (
    <div className="relative w-full flex-1">
      {isFocusMode && (
        <div
          className={`${sharedClasses} absolute inset-0 pointer-events-none`}
          style={sharedStyles}
          aria-hidden="true"
        >
          <span className="text-foreground/20">{mutedText}</span>
          <span className="text-foreground">{activeText}</span>
        </div>
      )}

      <TextareaAutosize
        autoFocus
        value={content}
        onChange={handleChange}
        placeholder="Clear your thoughts..."
        className={`${sharedClasses} scroll-hide focus:outline-none bg-transparent outline-none placeholder:text-foreground/20 ${
          isFocusMode ? "text-transparent caret-foreground" : ""
        }`}
        style={sharedStyles}
      />
    </div>
  );
};
