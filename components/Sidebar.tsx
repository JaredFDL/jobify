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
    <aside className="py-4 px-8 bg-muted h-full">
      <Image src={Logo} alt="logo" />
      <div>
        {links.map((link) => (
          <Button key={link.href} asChild>
            <Link href={link.href}></Link>
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
