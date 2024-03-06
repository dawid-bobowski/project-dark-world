"use client";

import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "@/lib/constants";

const MainMenu: React.FC = () => {
  return (
    <div className="sticky bottom-0 w-full h-20 bg-[var(--black-bean)] text-white flex justify-center gap-2">
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={item.text}
          {...item}
        />
      ))}
    </div>
  );
};

export default MainMenu;
