import * as React from "react";
import styled from "styled-components";
import devices from "../theme/devices";

const TestimonialWrapper = styled.div`
    width: 100%;
    position: relative;
    background: ${({ theme: { colors } }) => colors.tan};
    padding: 2em 0px 5em;
    @media ${devices.desktopLg} {
        margin: 0px;
        padding: 4em 0 6em;
    }
`;
export const Header = styled.div`
    text-align: center;
    width: 100%;
    max-width: 1200px;
    margin: 0px auto;
    padding: 0px 1em;
    @media ${devices.desktopLg} {
        padding: 0px 2em;
    }
`;
export const Title = styled.h2`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.25em;
    margin: 0px 0px 1rem;
    @media ${devices.desktopLg} {
        font-size: 1.5em;
    }
`;
export const SubTitle = styled.h3`
    font-size: 1em;
    line-height: 1.2;
    color: dimgrey;
    margin: 0px 0px 2rem;
    @media ${devices.desktopLg} {
        font-size: 1.5em;
    }
`;
const Testimonials = () => (
    <TestimonialWrapper>
        <Header>
            <Title>Words from The People</Title>
            <SubTitle>People I worked with</SubTitle>
        </Header>
    </TestimonialWrapper>
);

export default Testimonials;
