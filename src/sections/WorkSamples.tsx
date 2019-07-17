import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import devices from "../theme/devices";
import thirtyTwoCoupe from "../photos/lg/32coupeFlkr.jpg";
import fiftySixSeats from "../photos/lg/56seats.jpg";
import fiskerRightFront from "../photos/lg/Rightfrontcornner.jpg";
import jaugeFisker from "../photos/lg/Jauge-Jense-Viking-Concept-Bike-by-Henrik-Fisker-Seat.jpg";
import { Header, Title, SubTitle } from "./Testimonials";

const WorkWrapper = styled.div`
    background: ${({ theme: { colors } }) => colors.black};
    padding: 2em 0px;
`;
const WorkTitle = styled(Title)`
    color: white;
`;
const WorkList = styled.ul`
    max-width: 1200px;
    width: 100%;
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
    flex-flow: row wrap;
    padding: 0px 1em;
    cursor: pointer;
    @media ${devices.desktopMin} {
        padding: 0 2em;
    }
`;

const WorkLink = styled(Link)`
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
`;
const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
`;
const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    color: white;
    opacity: 0;
    visibility: hidden;
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease 0s;
    :hover {
    }
`;
const WorkItem = styled.li`
    flex: 0 0 49.5%;
    margin: 0 0 1%;
    width: 100%;
    position: relative;
    &:hover ${ImageContainer} {
        opacity: 1;
        visibility: visible;
    }
`;
const WorkImage = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    display: block;
`;
const Padding = styled.div`
    width: 100%;
    padding-bottom: 66.6667%;
    height: 100%;
`;
const Overlay = styled.div`
    background-color: rgb(17, 17, 17);
    position: absolute;
    top: 0px;
    bottom: 0px;
    opacity: 0;
    transition-delay: 0.25s;
    right: 0px;
    left: 0px;
    height: 100%;
`;
interface ImagePreview {
    src: string;
    description: string;
    to: string;
}

const images: ImagePreview[] = [
    {
        src: thirtyTwoCoupe,
        description: "32 Ford 3 Window",
        to: "5"
    },
    {
        src: fiftySixSeats,
        description: "56' Seats",
        to: "24"
    },
    {
        src: fiskerRightFront,
        description: "Fisker",
        to: "97"
    },
    {
        src: jaugeFisker,
        description: "Fisker concept bike",
        to: "83"
    }
];
const ImageDescription = styled.span`
    font-weight: bold;
    margin: 1rem 0 0;
`;
const ImagePreview = images.map(({ src, to, description }) => (
    <WorkItem key={src}>
        <WorkLink to={`/gallery/${to}`}>
            <ImageWrapper>
                <Padding />
                <Overlay />

                <WorkImage src={src} />
            </ImageWrapper>
            <ImageContainer>
                <ImageDescription>{description}</ImageDescription>
            </ImageContainer>
        </WorkLink>
    </WorkItem>
));
const WorkSamples = () => (
    <WorkWrapper>
        <Header>
            <WorkTitle>Recent Work</WorkTitle>
            <SubTitle>Some exampless</SubTitle>
        </Header>
        <WorkList>{ImagePreview}</WorkList>
    </WorkWrapper>
);

export default WorkSamples;
