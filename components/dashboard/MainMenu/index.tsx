"use client";

import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "@/lib/constants";

const MainMenu: React.FC = () => {
  return (
    <div className="bg-[var(--black-bean)] text-white flex justify-center gap-2 h-20 sticky bottom-0">
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.text} src={item.src} alt={item.alt} text={item.text} />
      ))}
    </div>
  );
};

export default MainMenu;
