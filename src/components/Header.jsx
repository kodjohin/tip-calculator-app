import React from 'react';
import styled from 'styled-components';

import LogoImage from "../images/logo.svg"

const StyledLogo = styled.img`
    width:70px;
`

const Header = () => {
    return (
        <>
            <StyledLogo src={LogoImage} alt="splitter" />
        </>
    )
}

export default Header
