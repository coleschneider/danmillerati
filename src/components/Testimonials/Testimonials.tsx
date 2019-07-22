import * as React from "react";
import styled from "styled-components";
import devices from "../../theme/devices";

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
const Testimonial = styled.div`
    border: 10px solid ${({ theme: { colors } }) => colors.lightGrey};
    padding: 40px 0 25px 0;
    margin: 50px;
    text-align: center;
    border-radius: 20px;
    flex: 1 0 25%;
    position: relative;
    ::before {
        content: "\f10d";
        width: 100px;
        height: 100px;
        line-height: 100px;
        background: #fff;
        margin: 0 auto;
        font-size: 70px;
        font-weight: 900;
        color: tomato;
        position: absolute;
        top: -60px;
        left: 0;
        right: 0;
    }
`;
const TestimonialTitle = styled.h3`
    padding: 7px 0;
    margin: 0 -30px 20px;
    border: 7px solid ${({ theme: { colors } }) => colors.grey};
    border-radius: 7px;
    background: ${({ theme: { colors } }) => colors.grey};
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.lightGrey};
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    ::before {
        content: "";
        border-top: 15px solid ${({ theme: { colors } }) => colors.lightGrey};
        border-left: 15px solid transparent;
        border-bottom: 15px solid transparent;
        position: absolute;
        bottom: -37px;
        left: 0;
    }
    ::after {
        content: "";
        border-top: 15px solid ${({ theme: { colors } }) => colors.lightGrey};
        border-right: 15px solid transparent;
        border-bottom: 15px solid transparent;
        position: absolute;
        bottom: -37px;
        right: 0;
    }
`;
const Post = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    font-style: italic;
    color: ${({ theme: { colors } }) => colors.black};
    text-transform: capitalize;
`;
const TestimonialDescription = styled.p`
    padding: 0 20px;
    margin: 0;
    font-size: 15px;
    color: #6f6f6f;
    letter-spacing: 1px;
`;
const TestimonialsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    flex-direction: column;
    margin: 0 auto;
    @media ${devices.desktopMin} {
        flex-direction: row;
    }
`;
const Testimonials = () => (
    <TestimonialWrapper>
        <Header>
            <Title>Words from The People</Title>
            <SubTitle>People I worked with</SubTitle>
        </Header>
        <TestimonialsList>
            <Testimonial>
                <TestimonialTitle>
                    Hot Rod
                    <Post> - Magazine </Post>
                </TestimonialTitle>
                <TestimonialDescription>
                    &quot;One of the Top Auto Upholsterers in the Nation&quot;
                </TestimonialDescription>
            </Testimonial>
            <Testimonial>
                <TestimonialTitle>
                    Hot Rod
                    <Post> - Magazine </Post>
                </TestimonialTitle>
                <TestimonialDescription>
                    &quot;One of the Top Auto Upholsterers in the Nation&quot;
                </TestimonialDescription>
            </Testimonial>
            <Testimonial>
                <TestimonialTitle>
                    Hot Rod
                    <Post> - Magazine </Post>
                </TestimonialTitle>
                <TestimonialDescription>
                    &quot;One of the Top Auto Upholsterers in the Nation&quot;
                </TestimonialDescription>
            </Testimonial>
        </TestimonialsList>
    </TestimonialWrapper>
);

export default Testimonials;
