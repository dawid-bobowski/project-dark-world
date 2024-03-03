"use client";

import Image from "next/image";
import { MENU_ITEM_SIZE } from "@/lib/constants";

interface MenuItemProps {
  src: string;
  alt: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { src, alt, text } = props;
  return (
    <button className="flex flex-col justify-center items-center p-2 text-xs hover:bg-[var(--black)]">
      <Image
        className="mix-blend-screen mb-1"
        src={src}
        alt={alt}
        width={MENU_ITEM_SIZE}
        height={MENU_ITEM_SIZE}
      />
      <p>{text}</p>
    </button>
  );
};

export default MenuItem;