import * as React from "react";
import styled from "styled-components";
import placeholderImage from "./small_hero.jpg";
import frontF1 from "../../photos/blackiesseats.jpg";
import devices from "../../theme/devices";
import resolveImage from "../../utils/resolveImage";

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
const Hero = () => {
    const heroRef = React.useRef(null);
    React.useEffect(() => {
        resolveImage(frontF1).then(() => {
            heroRef.current.src = frontF1;
        });
    }, []);
    return (
        <ImageWrapper>
            <Padding />
            <Background />
            <picture>
                <HeroImage ref={heroRef} src={placeholderImage} alt="" />
            </picture>
        </ImageWrapper>
    );
};

export default Hero;
