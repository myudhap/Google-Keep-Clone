import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 4px 25px;
    border-bottom: 1px solid rgba(60, 64, 67, 0.2);
    box-shadow: 0px 5px 10px grey;
`

const Header = () => {
    return (
        <Nav>
            <p>Google Keep Clone</p>
        </Nav>
    );
}

export default Header;