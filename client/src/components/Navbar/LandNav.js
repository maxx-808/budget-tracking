import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./Nav.css";

const NavTest = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const currentPage = props.page[0].page;

  useEffect(() => {
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    if (currentPage === "login") {
      login.classList.add("hidden");
    } else if (currentPage === "register") {
      register.classList.add("hidden");
    }
  });

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Budget Tracking :D</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                target="blank"
                href="https://www.github.com/maxx-808/budget-tracking"
              >
                Github Repo
              </NavLink>
            </NavItem>
            <UncontrolledDropdown className="dropDownNav" nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="dropDownNavPieces">
                  <NavLink
                    className="dropDownNavItems"
                    target="blank"
                    href="https://www.github.com/maxx-808"
                  >
                    Github
                  </NavLink>
                </DropdownItem>
                <DropdownItem className="dropDownNavPieces">
                  <NavLink
                    className="dropDownNavItems"
                    target="blank"
                    href="https://www.linkedin.com/in/max-higa-2460351b4/"
                  >
                    LinkedIn
                  </NavLink>
                </DropdownItem>
                <DropdownItem className="dropDownNavPieces">
                  <NavLink
                    className="dropDownNavItems"
                    target="blank"
                    href="https://maxx-808.github.io/portfolio-react/"
                  >
                    Portfolio
                  </NavLink>
                </DropdownItem>
                <DropdownItem className="dropDownNavPieces">
                  <NavLink
                    className="dropDownNavItems"
                    target="blank"
                    href="https://docs.google.com/document/d/1Miox-krIs-7t6rZeaTUT29gVSKrHD0Sf0FtkZESXulU/edit?usp=sharing"
                  >
                    Resume
                  </NavLink>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem className="dropDownNavPieces">
                  <NavLink
                    className="dropDownNavItems"
                    target="blank"
                    href="https://www.github.com/maxx-808/budget-tracking"
                  >
                    Github Repo
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav id="rightNav" navbar>
            <NavItem id="login" className="landNav">
              <NavLink href="/login/">Login</NavLink>
            </NavItem>
            <NavItem id="register" className="landNav">
              <NavLink href="/register/">Register Now!</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavTest;
