import * as React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { NavPose, PosedMenuItem } from "./animations";
import devices from "../../devices";
import LogoIcon from "./logo";

interface FixedNav {
    isFixed: boolean;
    isOpen: boolean;
}
export const Wrapper = styled.div`
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
const boxBorder = props => ({
    border:
        props.borderWidth > 0
            ? `${props.borderWidth}px solid ${
                  props.theme.colors[props.borderColor]
              }`
            : null
});
const fixedElement = props => ({
    top: props.top ? `${props.top}` : `0px`,
    left: props.left ? `${props.left}` : `0px`,
    right: props.right ? `${props.right}` : `0px`,
    bottom: props.bottom ? `${props.bottom}` : `0px`
});
const Fixed = styled(Wrapper)(
    fixedElement,
    (props: React.CSSProperties) => ({
        zIndex: props.zIndex ? props.zIndex : null
    }),
    { position: "fixed" }
);

export const Overlay = styled(Fixed)<Partial<FixedNav>>`
    background: ${({ theme: { colors } }) => colors.black};
    transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1) 0s;
    @media ${devices.desktopMin} {
        display: none;
    }
`;

export const Nav = styled(NavPose)`
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

export const ListContainer = styled.ul`
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
export const LogoWrapper = styled.li`
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
export const LogoLink = styled(Link)`
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

export const anchor = ({ color }: { color: string }) => css`
    a {
        cursor: pointer;
        position: relative;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.5em;
        text-decoration: none;
        color: black;
        transition: opacity 0.3s ease 0s;
        border-bottom: 1px solid transparent;
        @media ${devices.desktop} {
            font-size: 0.85em;
            color: ${color};
            letter-spacing: 0.8px;
            height: 56px;
            padding: 0px 0px 0.1em;
        }
        &.active {
            text-decoration: underline;
        }
    }
`;
export const MenuItem = styled(PosedMenuItem)<{ isFixed: boolean }>`
    opacity: 0;
    color: white;
    letter-spacing: 0.8px;
    height: 56px;
    padding: 0px 0px 0.1em;
    ${({ isFixed, theme: { colors } }) =>
        anchor({ color: isFixed ? colors.black : colors.white })}
    @media ${devices.desktop} {
        display: inline-block;
        transform: none !important;
        opacity: 1 !important;
        transition: none 0s ease 0s;
        margin: 0px 0px 0px 1.25em;
        
    }
`;

export const Logo = ({
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
