import * as React from "react";
import styled, { css } from "styled-components";

import posed from "react-pose";
import { Link } from "react-router-dom";
import devices from "../../theme/devices";

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

const Item = posed.li({
    open: { x: 0, opacity: 1 },
    closed: { x: -100, opacity: 0 }
});
export const anchor = ({ color }: { color: string }) => css`
    a {
        cursor: pointer;
        position: relative;
        font-weight: bold;
        color: ${({ theme: { colors } }) => colors.black};
        text-transform: uppercase;
        font-size: 1.5em;
        text-decoration: none;
        transition: opacity 0.3s ease 0s;
        border-bottom: 1px solid transparent;
        @media ${devices.desktop} {
            color: ${color};
            font-size: 0.85em;
            letter-spacing: 0.8px;
            height: 56px;
            padding: 0px 0px 0.1em;
        }
        &.active {
            text-decoration: underline;
        }
    }
`;
export const MenuItem = styled(Item)<{ isFixed: boolean }>`
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
