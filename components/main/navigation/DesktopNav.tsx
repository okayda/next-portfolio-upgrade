import Link from "next/link";
import { navigation } from "@/constants";

export default function DesktopNav() {
  return (
    <div className="rounded-md border border-none sm:w-[140px]">
      <nav>
        <ul className="flex h-[40px] w-full items-center justify-between font-sans font-medium text-gray-200">
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
