import React from 'react';
import styled from 'styled-components';

import LogoImage from "../images/logo.svg"

const StyledLogo = styled.img`
    width:70px;
`

const Logo = () => {
    return (
        <>
            <StyledLogo src={LogoImage} alt="splitter" />
        </>
    )
}

export default Logo
