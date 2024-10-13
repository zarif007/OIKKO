import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-sm shadow-slate-900 p-6 w-full">
      <Link href="/" className="text-xl font-bold">
        Oikko
      </Link>
    </div>
  );
};

export default Navbar;
