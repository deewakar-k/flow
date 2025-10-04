import { Editor } from "@/components/editor";
import { Toolbar } from "@/components/toolbar";

export default function Home() {
  return (
    <div className="relative font-inter flex flex-col min-h-screen max-w-lg mx-auto">
      <div className="w-full flex-1 flex-col py-40">
        <Editor />
      </div>
      <div className="fixed bottom-5 inset-x-0 flex items-end justify-center">
        <Toolbar />
      </div>
    </div>
  );
}
