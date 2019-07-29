import React from "react";
import { Link, RouteComponentProps, NavLink } from "react-router-dom";
import { LogoWrapper, LogoLink, ListContainer, MenuItem } from "./headerStyles";
import LogoIcon from "./logo";

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
    exact?: boolean;
}
export const headerLinks: HeaderLink[] = [
    { text: "Home", to: "/", exact: true },
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
            {headerLinks.map(({ text, to, ...rest }) => (
                <MenuItem
                    isFixed={isFixed}
                    key={to}
                    pose={isOpen ? "open" : "closed"}
                >
                    <NavLink
                        {...rest}
                        activeClassName="active"
                        onClick={e => handleClick(e, to)}
                        to={to}
                    >
                        {text}
                    </NavLink>
                </MenuItem>
            ))}
        </ListContainer>
    );
};
export default Navigation;
