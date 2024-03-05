"use client";

import Link from "next/link";
import Image from "next/image";
import { MENU_ITEM_SIZE } from "@/lib/constants";

interface MenuItemProps {
  src: string;
  alt: string;
  text: string;
  route: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { src, alt, text, route } = props;
  return (
    <Link
      href={route}
      className="flex flex-col justify-center items-center p-2 text-xs sm:hover:bg-[var(--black)]"
    >
      <Image
        className="mix-blend-screen mb-1"
        src={src}
        alt={alt}
        width={MENU_ITEM_SIZE}
        height={MENU_ITEM_SIZE}
      />
      <p>{text}</p>
    </Link>
  );
};

export default MenuItem;
