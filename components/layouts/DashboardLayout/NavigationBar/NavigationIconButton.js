import React from "react";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";

const NavigationIconButton = ({ route, isActive = false }) => {
  console.log(route.link, isActive)
  return (
    <Tooltip.Root delayDuration={0}>
      <Tooltip.Trigger>
        <div
          className={[
            " w-10 h-10 cursor-pointer rounded p-2 opacity-70 transition duration-300 hover:bg-[#3c5c5a] hover:opacity-100",
            // " opacity-70 rounded cursor-pointer w-full p-2 transition duration-300 hover:bg-[#45899c] hover:opacity-100",
            `${isActive ? " bg-[#3c5c5a] opacity-100" : ""}`,
          ].join("")}
        >
          <Link href={route.link}>{route.icon}</Link>
        </div>
      </Tooltip.Trigger>
        <Tooltip.Content side="right" arrowPadding={3} >
          {/* <Tooltip.Arrow className="radix-tooltip-arrow"/> */}

          <div
          className={[
            'ml-1 bg-[#16201f] shadow py-1 px-2  leading-none', // background
            ' ', //border
          ].join(' ')}
        >
          <span className="text-scale-1200 text-xs">{route.label}</span>
        </div>
        </Tooltip.Content>
    </Tooltip.Root>
  );
};

export default NavigationIconButton;
