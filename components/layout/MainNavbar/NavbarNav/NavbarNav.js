import React from "react";
import { Nav } from "shards-react";

import Notifications from "../../../../components/layout/MainNavbar/NavbarNav/Notifications";
import UserActions from "../../../../components/layout/MainNavbar/NavbarNav/UserActions";
import Faq from "../../../../components/layout/MainNavbar/NavbarNav/Faq";
import Support from "./Support";

export default () => (
  <Nav navbar className="border-left flex-row">
    <Support />
    <Faq />
    <Notifications />
    <UserActions />
  </Nav>
);
