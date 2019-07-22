import React from "react";
import styled from "styled-components";
import devices from "../../theme/devices";

const MenuBar = styled.span`
    position: absolute;
    display: block;
    width: 40%;
    height: 2px;
    left: 30%;
    transition: all 0.3s ease 0s;
    background: ${({ theme: { colors } }) => colors.black};
`;
const BarOne = styled(MenuBar)`
    top: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "29px" : "23px")};
    transform: ${({ isOpen }: { isOpen: boolean }) =>
        isOpen ? "rotate(45deg)" : "rotate(0)"};
`;
const BarTwo = styled(MenuBar)`
    transform: ${({ isOpen }: { isOpen: boolean }) =>
        isOpen ? "23px" : "25px"};
    transform: ${({ isOpen }: { isOpen: boolean }) =>
        isOpen ? "rotate(-45deg)" : "rotate(0)"};
`;
const MenuToggle = styled.div`
    position: absolute;
    z-index: 999;
    top: 0px;
    right: 0px;
    padding: 0px;
    margin: 0px;
    transition: transform 0.3s ease 0s;
    @media ${devices.desktop} {
        display: none;
    }
    @media ${devices.desktopMin} {
        right: 1em;
    }
`;
const MenuIcon = styled.button`
    cursor: pointer;
    position: relative;
    float: right;
    width: 3.5rem;
    outline: none;
    height: 3.5rem;
    color: ${({ theme: { colors } }) => colors.black};
    font-family: inherit;
    font-size: inherit;
    -webkit-appearance: none;
    resize: none;
    background: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 0px;
`;

interface Props {
    isOpen: boolean;
    onClick: () => void;
}
const Menu = ({ isOpen, onClick }: Props) => {
    return (
        <MenuToggle>
            <MenuIcon onClick={onClick}>
                <BarOne isOpen={isOpen} />
                <BarTwo isOpen={isOpen} />
            </MenuIcon>
        </MenuToggle>
    );
};

export default Menu;
