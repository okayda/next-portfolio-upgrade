import Link from "next/link";
import { navigation } from "@/constants";

export default function DesktopNav() {
  return (
    <div className="w-[140px] rounded-md border border-none">
      <nav>
        <ul className="flex h-[40px] w-full items-center justify-between font-sans font-medium text-gray-100">
          {navigation.map(
            ({ label, route }: { label: string; route: string }) => (
              <li key={label}>
                <Link
                  href={route}
                  className="block text-[15px] font-bold tracking-wide outline-none md:text-[16px]"
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
