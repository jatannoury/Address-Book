import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="addressBook">Address Book</div>
      <div className="nav1 ">
        <div className="sub_nav ">
          <a href="/contact_page">Display contacts</a>
        </div>
        <div className="sub_nav">
          <a href="/add_contact">Add contacts</a>
        </div>
        <div className="sub_nav">
          <a href="/">Logout</a>
        </div>
        <div className="sub_nav">
          <a href="/search_contact">Add contacts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
