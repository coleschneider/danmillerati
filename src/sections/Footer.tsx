import * as React from "react";
import styled from "styled-components";
import devices from "../theme/devices";

const FooterWrapper = styled.footer`
    display: block;
    position: relative;
    width: 100%;
    background: ${({ theme: { colors } }) => colors.black};
`;
const FooterOuter = styled.div`
    opacity: 0.99999;
    max-width: 1200px;
    padding: 3em 1em;
    margin: 0px auto;
    @media ${devices.desktopMin} {
        padding: 3.5em 2em;
    }
`;
const Footer = () => <FooterWrapper />;

export default Footer;
