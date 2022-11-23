import React, { useState } from "react";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

function Navbar() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-2xl py-4">
              <span className="text-easyPurple">easy</span>invite
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavItems />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-easyPurple transition duration-200"
            >
              {open ? closeIcon : hamburgerIcon}
            </button>
          </div>
        </div>
      </div>
      {open && <MobileNav isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default Navbar;
