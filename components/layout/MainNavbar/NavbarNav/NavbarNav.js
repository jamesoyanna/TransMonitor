import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import Faq from "./Faq";
import Support from "./Support";

export default () => (
  <Nav navbar className="border-left flex-row">
    <Support />
    <Faq />
    <Notifications />
    <UserActions />
  </Nav>
);
