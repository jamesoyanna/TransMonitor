import React from "react";
import { Nav } from "shards-react";

import Notifications from "../NavbarNav/Notifications";
import UserActions from "../NavbarNav/UserActions";
import Faq from "../NavbarNav/Faq";
import Support from "../NavbarNav/Support";

export default () => (
  <Nav navbar className="border-left flex-row">
    <Support />
    <Faq />
    <Notifications />
    <UserActions />
  </Nav>
);
