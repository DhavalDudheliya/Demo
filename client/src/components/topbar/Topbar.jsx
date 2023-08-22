import React from "react";

function Topbar() {
  return (
    // Topbar
    <div className="w-full h-12 bg-secondary">
      {/* Topbar wrapper */}
      <div className="h-full p-4 flex items-center justify-between">
        {/* TopLeft */}
        <div className="font-bold text-2xl text-primary">L&Fadmin</div>
        {/* TopRight */}
        <div className="">Right</div>
      </div>
    </div>
  );
}

export default Topbar;
