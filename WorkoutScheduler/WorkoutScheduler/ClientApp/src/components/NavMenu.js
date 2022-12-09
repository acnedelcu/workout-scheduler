import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { LoginMenu } from "./api-authorization/LoginMenu";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar id="navbar" className="navbar-expand-sm" container light>
          <NavbarToggler onClick={this.toggleNavbar} className="" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!this.state.collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/view-trainings">
                  Trainings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/make-plan">
                  Make a plan
                </NavLink>
              </NavItem>
              <LoginMenu></LoginMenu>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
