import React from "react";
import { Nav } from "shards-react";
//import NavbarSearch from "../../MainNavbar/NavbarSearch";
//import UserItem from "../NavbarNav/UserItem";

export default () => (
  <Nav navbar className="flex-row">
    <UserItem />
    <NavbarSearch />
  </Nav>
);
