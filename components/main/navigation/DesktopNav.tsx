"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { navigation } from "@/constants";
import clsx from "clsx";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="w-[140px] rounded-md border border-none">
      <nav itemScope itemType="https://schema.org/SiteNavigationElement">
        <ul className="flex h-[40px] w-full items-center justify-between font-sans font-medium text-gray-100">
          {navigation.map(({ label, route }) => (
            <li key={label} itemProp="name">
              <Link
                href={route}
                className={clsx(
                  "block text-[15px] font-bold tracking-wide outline-none md:text-base",
                  pathname === route ? "text-amber-500" : "text-gray-100",
                )}
                itemProp="url"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
