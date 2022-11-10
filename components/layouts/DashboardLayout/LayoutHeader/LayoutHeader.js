import React from "react";
import { useRouter } from "next/router";

const LayoutHeader = () => {
  const router = useRouter()

  return (
    <div className="flex h-12 w-full border-b border-white border-opacity-10 py-2">
      <div className="flex">
        <div className="inline-flex items-center mx-4 opacity-70 text-xs"><span className="truncate">Grow</span></div>
        <span className="opacity-70 flex items-center">
        {/* <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><path d="M16 3.549L7.12 20.600"></path></svg> */}
        </span>
        <div className="mx-4 inline-flex items-center opacity-70 text-xs"><span className="truncate">{router.pathname.slice(1)}</span></div>
      </div>
    </div>
  );
};

export default LayoutHeader;
