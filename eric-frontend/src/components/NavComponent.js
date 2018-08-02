import React from 'react';
import '../styles/NavComponent.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <span className="headerLogo">Eric Ribeiro</span>
        </div>
        <div>
          <Navbar className="navBar" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/service">Bookings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign Up</NavLink>
                </NavItem>
                 <NavItem>
                  <NavLink href="/admin">Login</NavLink>
                </NavItem>
<<<<<<< HEAD
                <NavItem>
                  <NavLink href="/reset">Reset</NavLink>
                </NavItem>
                 <NavItem>
                  <NavLink href="/forgot">Forgot</NavLink>
                </NavItem>
=======
>>>>>>> d47d4e5253c6d3986330dde6e7ee109d3f0be6fe
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
};

export default NavComponent;