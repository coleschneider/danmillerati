import * as React from "react";
import styled, { css } from "styled-components";
import { Close as Cross } from "styled-icons/material/Close";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { Fullscreen } from "styled-icons/boxicons-regular/Fullscreen";
import { ExitFullscreen } from "styled-icons/boxicons-regular/ExitFullscreen";

export const ModalBackground = styled.div<{ open: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: grid;
    visibility: ${props => (props.open ? `visible` : `hidden`)};
    opacity: ${props => (props.open ? `1` : `0`)};
    transition: 0.5s;
    z-index: 10;
`;

const fullscreen = css`
    width: 100vw;
    height: 100vh;
    margin: 0;
    border-radius: 0;
`;
interface ModalScreen {
    isFullscreen: boolean;
    onClick?: (e: React.SyntheticEvent) => void;
}
export const ModalContainer = styled.div<ModalScreen>`
    box-sizing: border-box;
    align-self: center;
    justify-self: center;
    height: ${({ isFullscreen }) => (isFullscreen ? "100vh" : "80vh")};
    width: ${({ isFullscreen }) => (isFullscreen ? "100vw" : "80vw")};
    position: relative;
    align-items: center;
    background: black;
    overflow: scroll;
    box-shadow: 0 0 3em black;
    margin: ${({ isFullscreen }) =>
        isFullscreen ? "0px" : "calc(0.5em + 2vw)"};
`;

const controlsCss = css`
    position: absolute;
    cursor: pointer;
    z-index: 1;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.1em;
    width: 1.6em;
    :hover {
        transform: scale(1.07);
    }
`;

const Open = styled(Fullscreen)`
    ${controlsCss};
    border-radius: 0.4em;
    top: 0.5em;
    right: 2.8em;
`;
const Exit = styled(ExitFullscreen)`
    ${controlsCss};
    border-radius: 0.4em;
    top: 0.5em;
    right: 2.8em;
`;
const FullscreenToggle = ({ onClick, isFullscreen }: ModalScreen) =>
    isFullscreen ? <Exit onClick={onClick} /> : <Open onClick={onClick} />;

const Close = styled(Cross)`
    ${controlsCss};
    border-radius: 0.4em;
    top: 0.5em;
    right: 0.5em;
`;

const Next = styled(NavigateNext)`
    ${controlsCss};
    border-radius: 50%;
    top: 50%;
    right: 0.3em;
`;
export const ModalImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: -webkit-fill-available;
    display: block;
`;
export const ModalImagePadding = styled.div`
    width: 100%;
    padding-bottom: 49.72%;
    display: block;
`;

export const ModalImage = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
`;
const Prev = styled(NavigateBefore)`
    ${controlsCss};
    border-radius: 50%;
    top: 50%;
    left: 0.3em;
`;

export const controls = { FullscreenToggle, Close, Next, Prev };
