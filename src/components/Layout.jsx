import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <div className=" bg-background text-foreground">
      <div className="mx-auto max-w-7xl px- sm:px- lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
