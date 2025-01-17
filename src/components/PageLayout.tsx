import { Col, Container } from "react-bootstrap"
import NavBar from "./NavBar.tsx";
import NavBarButtons from "./NavBarButtons.tsx";
import React from "react";

type PageLayoutProps = {
    children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <Container>
            <Col>
                <NavBar />
            </Col>
            <h1>Task Management</h1>
            {children}
            <footer>
                <NavBarButtons />
            </footer>
        </Container>
    );
};

export default PageLayout;