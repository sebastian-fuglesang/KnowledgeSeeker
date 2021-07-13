import { Navbar, Button } from "trunx";
import { Link } from 'react-router-dom';
import React, { useContext } from "react";

export default function KsNavbar() {
    return (
        <Navbar>
            <Navbar.Menu>
                <Navbar.Start>
                    <Navbar.Item>
                        <Link to="/">KnowledgeSeeker</Link>
                    </Navbar.Item>
                </Navbar.Start>

                <Navbar.End>
                    <Navbar.Item>
                        <Link to="/">Om oss</Link>
                    </Navbar.Item>

                    <Navbar.Item>
                        <Link to="/">Finn internship</Link>
                    </Navbar.Item>

                    <Navbar.Item>
                        <Link to="/">Finn bedrifter</Link>
                    </Navbar.Item>

                    <Link to="/RegisterUserTypePage">
                        <Button isLink m2>Registrer deg</Button>
                    </Link>

                    <Link to="/LoginPage">
                        <Button isLink m2>Logg inn</Button>
                    </Link>

                </Navbar.End>
            </Navbar.Menu>
        </Navbar>
    )
}