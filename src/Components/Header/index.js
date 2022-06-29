import { Link } from "react-router-dom";
import { Container } from "./style";
import ToggleSwitch from "../ToggleSwitch";
import React from "react";

function Header() {
    return (
        <Container>
            <Link to="/">HOME</Link>
            <Link to="/projetos">projetos</Link>
            <ToggleSwitch />
        </Container>
    );
}
export default Header;
