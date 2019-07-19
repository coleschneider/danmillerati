import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { Link, RouteComponentProps } from "react-router-dom";
import LogoIcon from "./logo";
import devices from "../../theme/devices";

const ListContainer = styled.ul`
    text-align: left;
    list-style: none;

    @media ${devices.desktop} {
        width: 100%;
        max-width: 1200px;
        display: flex;
        padding: 0px 2em;
        margin: 0px auto;
    }

    padding: 6em 0px 0px 1em;
`;
const LogoWrapper = styled.li`
    position: absolute;
    top: 0px;
    left: 1em;
    margin-right: auto;
    @media ${devices.desktopMin} {
        left: 2em;
    }
    @media ${devices.desktop} {
        position: relative;
        top: auto;
        left: auto;
        margin-left: 0px;
    }
`;
const LogoLink = styled(Link)`
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.5em;
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
    transition: opacity 0.3s ease 0s;
    border-bottom: 1px solid transparent;
    @media ${devices.desktop} {
        font-size: 0.85em;
        letter-spacing: 0.8px;
        height: 56px;
        padding: 0px 0px 0.1em;
    }
`;

const Item = posed.li({
    open: { x: 0, opacity: 1 },
    closed: { x: -100, opacity: 0 }
});
const MenuItem = styled(Item)`
    opacity: 0;
    @media ${devices.desktop} {
        display: inline-block;
        transform: none !important;
        opacity: 1 !important;
        transition: none 0s ease 0s;
        margin: 0px 0px 0px 1.25em;
    }
`;

const Logo = ({
    isFixed,
    iconType,
    viewBox
}: Partial<HeaderProps> & { iconType: IconTypes; viewBox: string }) => (
    <LogoWrapper>
        <LogoLink to="/">
            <LogoIcon
                viewBox={viewBox}
                iconType={iconType}
                height="56px"
                isFixed={isFixed}
            />
        </LogoLink>
    </LogoWrapper>
);

export interface HeaderLink {
    text: "Home" | "About" | "Contact" | "Gallery";
    to: string;
}
export const headerLinks: HeaderLink[] = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Contact", to: "/contact" },
    { text: "Gallery", to: "/gallery" }
];

const Navigation = ({
    isOpen,
    isFixed,
    toggle,
    history
}: RouteComponentProps & HeaderProps) => {
    const handleClick = (e: React.SyntheticEvent, to: string) => {
        e.preventDefault();
        toggle();
        history.push(to);
    };

    return (
        <ListContainer>
            <Logo
                viewBox="0 0 194.69 53.44"
                iconType="Logo"
                isFixed={isFixed}
            />
            {headerLinks.map(({ text, to }) => (
                <MenuItem key={to} pose={isOpen ? "open" : "closed"}>
                    <Link
                        onClick={e => handleClick(e, to)}
                        className={isFixed ? "stick" : undefined}
                        to={to}
                    >
                        {text}
                    </Link>
                </MenuItem>
            ))}
        </ListContainer>
    );
};
export default Navigation;
