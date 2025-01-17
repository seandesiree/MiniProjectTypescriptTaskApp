import React from "react";
import { Nav, Navbar as BootstrapNavbar, NavLink } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <BootstrapNavbar>
            <Nav>
                <NavLink href="/">Home</NavLink>
                {isAuthenticated && (
                    <>
                        <Nav.Link href="/TaskDashboard">Task Dashboard</Nav.Link>
                        <Nav.Link href="/protected">Protected</Nav.Link>
                    </>
                )}
            </Nav>
        </BootstrapNavbar>
    );
};

export default NavBar;