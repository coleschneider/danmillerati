import * as React from "react";
import styled from "styled-components";
import devices from "../../theme/devices";
// @ts-ignore
// eslint-disable-next-line
const seats = require("../../photos/lg/32roadstertomhaynes.jpg");
const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;

    @media ${devices.desktop} {
        height: 100vh;
    }

    top: 0;
    left: 0;
    width: 100%;
    min-height: 250px;
    height: calc(100vh - 56px);

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.3);
    }
`;
const Padding = styled.div`
    width: 100%;
    padding-bottom: 66.6667%;
`;
const Background = styled.div`
    background-color: ${({ theme: { colors } }) => colors.tan};
    position: absolute;
    top: 0;
    bottom: 0;
    opacity: 0;
    transition-delay: 0.25s;
    right: 0;
    left: 0;
`;
const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
`;
const Hero = ({ children }: { children: any }) => (
    <ImageWrapper>
        <Padding />
        <Background />
        {/* <Padding />
        <Background />
        <picture>
            <HeroImage src={seats} alt="" />
        </picture> */}
        {children}
    </ImageWrapper>
);
export default Hero;
