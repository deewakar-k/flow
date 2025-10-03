"use client";

export const Editor = () => {
  return (
    <textarea
      placeholder="Clear your thoughts..."
      className="resize-none font-[450] focus:outline-none w-full whitespace-pre-wrap bg-transparent outline-none placeholder:text-foreground/20"
    />
  );
};
