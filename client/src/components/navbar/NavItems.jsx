import React from "react";
import { Link } from "react-scroll";

function NavItems(props) {
  return (
    <>
      <Link
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="inviteMaker"
        spy={true}
        duration={500}
        smooth={true}
        offset={props.isMobile ? 100 : -200}
        className="hover:text-easyPurple transition duration-200 cursor-pointer"
      >
        Create Invite
      </Link>
      <Link
        onClick={() => props.isMobile && props.closeMobileMenu()}
        to="about"
        spy={true}
        duration={1000}
        smooth={true}
        className="hover:text-easyPurple transition duration-200 cursor-pointer"
      >
        About
      </Link>
    </>
  );
}

export default NavItems;
