"use client";
import Logo from "@/assets/logo.svg";
import links from "@/utils/links";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const pathName = usePathname();

  return (
    <aside className="flex flex-col items-center align-items py-4 px-8 bg-muted h-full">
      <Image src={Logo} alt="logo" />
      <div className="flex flex-col mt-20 gap-y-4 w-full">
        {links.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={pathName == link.href ? "default" : "link"}
          >
            <Link href={link.href} className="flex items-center gap-x-2 ">
              {link.icon} <span className="capitalize">{link.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
