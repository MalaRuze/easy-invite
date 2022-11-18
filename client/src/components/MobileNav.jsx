import React from "react";
import NavItems from "./NavItems";

function MobileNav(props) {
  return (
    <div className="absolute right-10 flex flex-col text-right space-y-3 pb-3 max-h-24 md:hidden">
      <NavItems
        isMobile={props.isMobile}
        closeMobileMenu={props.closeMobileMenu}
      />
    </div>
  );
}

export default MobileNav;
