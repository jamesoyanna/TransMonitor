import React from "react";
import { Nav } from "shards-react";
import NavbarSearch from "../NavbarSearch";
import UserItem from "../NavbarNav/UserItem";

export default () => (
  <Nav navbar className="flex-row">
  
    <NavbarSearch />
    <UserItem />
  </Nav>
);
