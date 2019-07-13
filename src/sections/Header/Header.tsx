import * as React from "react";
import styled from "styled-components";
import devices from "../../theme/devices";
import useScroll from "../../hooks/useScroll";
// eslint-disable-next-line
import Navigation from "./Navigation";
import Menu from "./Menu";

const HeadroomWrapper = styled.div`
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    border-width: 0;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    font: inherit;
`;
const HeadroomUnfixed = styled.div`
    margin: 0;
    padding: 0;
    border-width: 0;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    font: inherit;
    min-height: 0;
    min-width: 0;
    box-sizing: border-box;
    display: block;
`;

const MenuOverlay = styled.div<Partial<HeaderProps>>`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    opacity: ${({ isOpen }) => (isOpen ? "0.8" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    display: block;
    background: ${({ theme: { colors } }) => colors.black};
    transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1) 0s;

    @media ${devices.desktop} {
        display: none;
    }
`;
interface FixedNav {
    isFixed: boolean;
    isOpen: boolean;
}

const Nav = styled.nav<FixedNav>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-height: ${({ isOpen }) => (isOpen ? "100%" : "56px")};
    width: 100%;
    z-index: 99;
    overflow-y: hidden;
    transition: max-height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1) 0s,
        background 0.3s ease 0s, border 0.3s ease 0s;
    border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.grey}`};
    overscroll-behavior: contain contain;

    @media ${devices.desktop} {
        border: ${({ isFixed, theme: { colors } }) =>
            isFixed ? `1px solid ${colors.grey}` : "1px solid transparent"};

        background: ${({ isFixed, theme: { colors } }) =>
            isFixed ? colors.white : "transparent"};

        /* max-height: none/s; */
        bottom: auto;
        line-height: 56px;
    }
`;

const Header = () => {
    const [isOpen, toggle] = React.useState(false);
    const isFixed = useScroll("nav-id");

    const toggleMenu = () => toggle(!isOpen);
    return (
        <HeadroomWrapper>
            <HeadroomUnfixed>
                <MenuOverlay isOpen={isOpen} />
                <Nav isFixed={isFixed} isOpen={isOpen} id="nav-id">
                    <Menu isOpen={isOpen} onClick={toggleMenu} />
                    <Navigation isOpen={isOpen} isFixed={isFixed} />
                </Nav>
            </HeadroomUnfixed>
        </HeadroomWrapper>
    );
};
export default Header;
