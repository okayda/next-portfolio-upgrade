import Image from "next/image";
import Link from "next/link";

import DesktopNav from "./DesktopNav";
import ShineBorder from "@/components/animation/ShineBorder";

export default function Navigation() {
  return (
    <div
      className="fixed left-0 top-0 z-10 h-[65px] w-full bg-[#03001444] shadow-lg shadow-[#2A0E61]/70 backdrop-blur-md"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="mx-auto flex h-full max-w-[480px] items-center px-3 sm:max-w-[1400px] md:px-8">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <DesktopNav />

          <Link
            itemProp="url"
            target="_blank"
            href="https://github.com/okayda"
            className="hidden sm:block"
          >
            <ShineBorder
              className="min-h-[40px] self-center bg-transparent px-5 text-center font-medium text-gray-200"
              color={["#764AF1", "#FE8FB5", "#FFAA40"]}
            >
              <div className="flex items-center justify-center gap-3">
                <span className="self-center tracking-wide">Github</span>
                <Image
                  src="/svgs/github.svg"
                  alt="Github Logo"
                  height={16}
                  width={16}
                />
              </div>
            </ShineBorder>
          </Link>
        </div>
      </div>
    </div>
  );
}
