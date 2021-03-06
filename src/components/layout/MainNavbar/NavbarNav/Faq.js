import React from "react";
import { NavItem, NavLink } from "shards-react";
class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem className="">
        <NavLink className="" onClick={this.toggleNotifications}>
          <p>FAQ</p>
        </NavLink>
      </NavItem>
    );
  }
}

export default Notifications;
