import React from "react";

function NavItems(props) {
  return (
    <>
      <a
        onClick={() => props.isMobile && props.closeMobileMenu()}
        href="#"
        className="hover:text-easyPurple transition duration-200"
      >
        About
      </a>
      <a
        onClick={() => props.isMobile && props.closeMobileMenu()}
        href="#"
        className="hover:text-easyPurple transition duration-200"
      >
        Contact
      </a>
    </>
  );
}

export default NavItems;
