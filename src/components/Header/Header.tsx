import * as React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { withRouter, RouteComponentProps } from "react-router-dom";
import devices from "../../theme/devices";
import Menu from "./Menu";
import Navigation from "./Navigation";
import useScroll from "../../hooks/useScroll";

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
const PosedGroupNav = posed.nav({
    open: {
        height: "auto",
        delayChildren: 200,
        staggerChildren: 50
    },
    closed: {
        height: "56px",
        staggerChildren: 50,
        delay: 300
    }
});
const MenuOverlay = styled.div<Partial<HeaderProps>>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: block;
    background: ${({ theme: { colors } }) => colors.black};
    transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1) 0s;
    @media ${devices.desktopMin} {
        display: none;
    }
`;
interface FixedNav {
    isFixed: boolean;
    isOpen: boolean;
}

const Nav = styled(PosedGroupNav)<FixedNav>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme: { colors } }) => colors.white};
    left: 0;
    width: 100%;
    z-index: 5;
    overflow-y: hidden;
    transition: background 0.3s ease 0s, border 0.3s ease 0s;
    border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.grey}`};
    overscroll-behavior: contain contain;
    @media ${devices.desktop} {
        line-height: 56px;
        border: ${({ isFixed, theme: { colors } }) =>
            isFixed ? `1px solid ${colors.grey}` : "1px solid transparent"};
        background: ${({ isFixed, theme: { colors } }) =>
            isFixed ? colors.white : "transparent"};
        max-height: 56px;
        bottom: auto;
    }
`;

const Header = (props: RouteComponentProps) => {
    const [isOpen, toggle] = React.useState(false);
    const isFixed = useScroll("nav-id");

    const toggleMenu = () => toggle(!isOpen);
    return (
        <HeadroomWrapper>
            <HeadroomUnfixed>
                <MenuOverlay isOpen={isOpen} />
                <Nav
                    pose={isOpen ? "open" : "closed"}
                    isOpen={isOpen}
                    isFixed={isFixed}
                    id="nav-id"
                >
                    <Menu isOpen={isOpen} onClick={toggleMenu} />
                    <Navigation
                        {...props}
                        toggle={toggleMenu}
                        isOpen={isOpen}
                        isFixed={isFixed}
                    />
                </Nav>
            </HeadroomUnfixed>
        </HeadroomWrapper>
    );
};
export default withRouter(Header);
