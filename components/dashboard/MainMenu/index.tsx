"use client";

import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "@/lib/constants";

const MainMenu: React.FC = () => {
  return (
    <div className="bg-[var(--black-bean)] text-white flex justify-center gap-2 h-20">
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.text} {...item} />
      ))}
    </div>
  );
};

export default MainMenu;
