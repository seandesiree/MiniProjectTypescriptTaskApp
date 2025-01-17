import { Col, Container} from "react-bootstrap"
import LoginButton from "./LoginButton.tsx"
import LogoutButton from "./LogoutButton.tsx"
import React from "react";

const HomePage: React.FC = ()  => {
    return (
        <Container>
            <Col>
                <h1>Welcome to Task Management</h1>
                <LoginButton />
                <LogoutButton />
            </Col>
        </Container>
    );
};

export default HomePage;