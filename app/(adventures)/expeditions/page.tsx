"use client";

import { useState } from "react";

import { EXPEDITIONS } from "@/lib/constants";
import BeginExpeditionButton from "./components/BeginExpeditionButton";

const ExpeditionsPage: React.FC = () => {
  const [activeExpedition, setActiveExpedition] = useState<string>("");

  return (
    <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {EXPEDITIONS.map(
        ({ title, description, time }) =>
          (title === activeExpedition || !activeExpedition) && (
            <div
              key={title}
              className="w-full h-40 p-4 bg-black flex flex-col justify-between shadow-md rounded-lg"
            >
              <div className="w-full flex justify-between">
                <p>{title}</p>
                <p>time: {time / 60}h</p>
              </div>
              <div className="w-full flex">{description}</div>
              <BeginExpeditionButton
                {...{
                  title,
                  disabled: !!activeExpedition,
                  isActive: title === activeExpedition,
                  handleClick: setActiveExpedition,
                }}
              />
            </div>
          )
      )}
    </div>
  );
};

export default ExpeditionsPage;
