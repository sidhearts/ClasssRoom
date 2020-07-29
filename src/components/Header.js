import React, { Component } from 'react';
import { Nav, Navbar, Button, NavItem, OverlayTrigger, Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faSignOutAlt, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import fire from '../config/fire';

const popover = (
    <Popover id="popover-basic">
      <Popover.Content className="container">
        <Nav.Link className="pb-0">Join Class</Nav.Link>
        <hr/>
        <Nav.Link className="pt-0">Create Class</Nav.Link>
      </Popover.Content>
    </Popover>
  );

class Header extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }


    render() {
        return (
            <div>
                <Navbar bg="light" fixed="top">
                    <Navbar.Brand href="#">ClassRoom</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link><FontAwesomeIcon icon={faHome} className="mr-2" size="lg" /> Classes</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <FontAwesomeIcon icon={faPlus} size="lg" />
                            </OverlayTrigger>
                        </Nav.Link>
                        <Nav.Link href="help"><FontAwesomeIcon icon={faQuestionCircle} /> Help</Nav.Link>
                        <Button onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt} /> Sign Out</Button>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default Header;