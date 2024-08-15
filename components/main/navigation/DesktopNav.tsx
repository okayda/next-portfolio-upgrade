import Link from "next/link";
import { navigation } from "@/constants";

export default function DesktopNav() {
  return (
    <div className="rounded-md border border-[#764AF1]/50 bg-[#0300145e] sm:w-[480px]">
      <nav>
        <ul className="flex h-[40px] w-full items-center justify-between px-5 font-sans text-gray-200">
          {navigation.map(
            ({ label, route }: { label: string; route: string }) => (
              <li key={label}>
                <Link
                  href={route}
                  className="block text-[14px] outline-none md:text-[16px]"
                >
                  {label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>
  );
}
