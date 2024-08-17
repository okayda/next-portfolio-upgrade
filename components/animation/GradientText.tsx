import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GradientText({ text = "Your text" }: { text: string }) {
  return (
    <div>
      <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-[#03001417] px-4 py-1.5 font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
        <div
          className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#FFAA40]/50 via-[#FFF]/50 to-[#FFAA40]/50 bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit] ![mask-composite:subtract] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
        />
        <Sparkle size={20} className="text-[#B49BFF]" />
        <hr className="mx-2 h-4 w-[1px] shrink-0 bg-[#B49BFF]" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#FFAA40] via-[#FFF] to-[#FFAA40] bg-[length:var(--bg-size)_100%] bg-clip-text text-sm font-medium tracking-wide text-transparent md:text-base`,
          )}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
