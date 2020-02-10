import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";

import { Dispatcher, Constants } from "../../../flux";

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  render() {
    const { hideLogoText } = this.props;
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <NavbarBrand className="w-100 mr-0" href="#" style={styles}>
            <div className="d-table m-auto">
              {!hideLogoText && (
                <span className="d-none d-md-inline ml-1">TransMonitor</span>
              )}
            </div>
          </NavbarBrand>
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}
          >
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}

const styles = {
  position: "absolute",
  left: "2.92%",
  right: "86.46%",
  top: "25%",
  bottom: "26.67%",

  FontFamily: "San-serif",
  FontStyle: "normal",
  FontWeight: 900,
  FontSize: "24px",
  LineHeight: "28px",
  /* identical to box height */
  TextAlign: "right",

  color: "#1875F0"
};

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false
};

export default SidebarMainNavbar;
