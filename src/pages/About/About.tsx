import * as React from "react";
import styled from "styled-components";
import meAndJagger from "../../photos/about/me_and_jagger.jpeg";
import threeDogs from "../../photos/about/three_dogs.jpg";
import bowieSingle from "../../photos/about/bowie.jpg";
import devices from "../../theme/devices";

const IntroWrapper = styled.div`
    height: 100%;
    position: relative;
    background: ${({ theme: { colors } }) => colors.offWhite};
`;
const IntroContainer = styled.div`
    height: 100%;
    max-width: 1200px;
    margin: 0px auto;
    padding: 2em 1em;
    @media ${devices.desktop} {
        display: flex;
        justify-content: space-between;
        padding: 0 2em;
    }
`;
const IntroBox = styled.div`
    position: relative;
    height: 100%;
    @media ${devices.desktop} {
        width: 50%;
        display: flex;
        justify-content: center;
        min-height: 600px;
        align-items: center;
    }
    @media ${devices.desktop} {
        height: 100vh;
        padding: 56px 0px 0px;
    }
`;
const IntroRow = styled.div`
    width: 100%;
`;
const SnapshotWrapper = styled.div`
    width: 100%;
    transform: translateX(0px) rotate(0deg) translateZ(0px);
`;
const SnapshotCard = styled.div<{ isFlipped: boolean }>`
    display: block;
    transform-style: preserve-3d;
    transform-origin: center center;
    cursor: pointer;
    height: auto;
    width: 75%;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 4px 0px;
    user-select: none;
    z-index: 2;
    padding: 0px;
    border-radius: 2px;
    margin: 0px auto;
    border-width: 0.5em;
    border-style: solid;
    border-color: white;
    border-image: initial;
    transition: transform 0.3s;
    transform: ${({ isFlipped }) =>
        !isFlipped
            ? "rotateY(0deg) translateZ(0px)"
            : "rotateY(180deg) translateZ(0px)"};
    @media ${devices.desktop} {
        width: 65%;
    }
    @media ${devices.desktopMin} {
        left: -1em;
        width: 75%;
    }
`;
const SnapshotFront = styled.div`
    position: relative;
    overflow: hidden;
    backface-visibility: hidden;
    width: 100%;
    backface-visibility: hidden;
    -webkit-user-drag: none;
    transform: rotateY(0deg);
`;
const Padding = styled.div`
    width: 100%;
    padding-bottom: 133.3%;
`;
const Image = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: none 0s ease 0s;
    display: block;
`;
const SnapshotBack = styled(SnapshotFront)`
    backface-visibility: hidden;
    transform: rotateY(180deg);
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute !important;
`;

const FlipText = styled.div`
    opacity: 1;
    position: relative;
    right: 1em;
    z-index: 0;
    text-align: center;
    font-weight: bold;
    color: dimgrey;
    user-select: none;
    text-transform: capitalize;
    padding: 1rem 0px 0px;
`;
const IntroTitle = styled.h2`
    opacity: 1;
    user-select: none;
    font-family: A, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
    text-align: center;
    font-size: 2em;
    z-index: 2;
    line-height: 1;
    padding: 3rem 1rem 0px;
    @media ${devices.desktop} {
        font-size: 2.5em;
    }
    @media ${devices.desktop} {
        color: white;
    }
`;

const IntroHero = styled.div`
    display: none;
    @media ${devices.desktop} {
        display: block;
        right: 0px;
        top: 0px;
        bottom: 0px;
        height: 100%;
        width: 50%;
        position: absolute !important;
    }
`;
const IntroBgImg = styled.div`
    ::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 100%;
        width: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, 0.2);
    }
    position: relative;
    overflow: hidden;
    @media ${devices.desktopMin} {
        display: block;
        right: 0px;
        top: 0px;
        bottom: 0px;
        height: 100%;
        width: 100%;
        position: absolute !important;
    }
`;
const BodyText = styled.div`
    font-size: 1em;
    max-width: 800px;
    margin: 1em auto 2em;
    @media ${devices.desktopMin} {
        padding: 2em;
    }
`;
const Paragraph = styled.p`
    line-height: 1.6;
    margin: 0 0 2rem;
`;
function About() {
    const [isFlipped, flip] = React.useState(false);
    return (
        <div style={{ position: "relative" }}>
            <IntroWrapper>
                <IntroContainer>
                    <IntroBox>
                        <IntroRow>
                            <SnapshotWrapper>
                                <SnapshotCard
                                    isFlipped={isFlipped}
                                    onClick={() => flip(!isFlipped)}
                                >
                                    <SnapshotFront>
                                        <Padding />
                                        <picture>
                                            <Image src={threeDogs} />
                                        </picture>
                                    </SnapshotFront>
                                    <SnapshotBack>
                                        <Padding />
                                        <picture>
                                            <Image src={bowieSingle} />
                                        </picture>
                                    </SnapshotBack>
                                </SnapshotCard>
                            </SnapshotWrapper>
                            <FlipText>Click me to flip!</FlipText>
                        </IntroRow>
                    </IntroBox>
                    <IntroBox>
                        <IntroTitle>About me and my 3 dogs</IntroTitle>
                    </IntroBox>
                    <IntroHero>
                        <IntroBgImg>
                            <div
                                style={{
                                    width: "100%",
                                    paddingBottom: "66.4815%"
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: "rgb(234, 234, 234)",
                                    position: "absolute",
                                    top: "0px",
                                    bottom: "0px",
                                    opacity: 0,
                                    right: "0px",
                                    left: "0px"
                                }}
                            />
                            <picture>
                                <Image src={meAndJagger} />
                            </picture>
                        </IntroBgImg>
                    </IntroHero>
                </IntroContainer>
            </IntroWrapper>
            <BodyText>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vel diam felis. Maecenas elementum lorem nec quam
                    placerat, et tempus urna commodo. Aenean ac diam eu massa
                    pellentesque placerat. In et odio suscipit, laoreet nunc a,
                    mollis orci. Proin finibus tempus efficitur. In hac
                    habitasse platea dictumst. Morbi convallis ipsum felis, sed
                    consectetur leo laoreet eu. Ut turpis odio, pharetra in
                    interdum vel, aliquam sed mauris. Maecenas quis laoreet
                    odio, vitae volutpat tortor. Nam a nisi et orci vehicula
                    porttitor vitae sed metus. Praesent sapien ipsum, commodo et
                    nisi ac, maximus aliquam sem. Maecenas at mauris vel ipsum
                    ullamcorper commodo vel dapibus augue.
                </Paragraph>
                <Paragraph>
                    Nunc tellus sem, egestas quis lacinia eget, porta a magna.
                    Duis feugiat laoreet ultricies. Mauris sodales eu quam eu
                    malesuada. Donec dapibus sagittis dui, a hendrerit metus
                    iaculis et. Etiam lorem enim, sagittis et feugiat ut,
                    facilisis vel lorem. Duis in sem id augue bibendum ultrices
                    quis id erat. Maecenas ut mi tortor. Praesent ac blandit
                    tortor. In eget elit blandit, auctor justo vitae, pharetra
                    erat. Nam arcu quam, imperdiet nec varius sed, molestie at
                    metus. Vestibulum odio augue, scelerisque porttitor magna
                    sit amet, sodales iaculis nisl. Praesent a urna ullamcorper,
                    consectetur ipsum et, pharetra magna. Aenean rhoncus, dui a
                    dapibus viverra, erat arcu viverra orci, nec placerat nisi
                    purus in nulla. Ut ut consequat lacus, vel posuere ante.
                    Nullam ipsum eros, viverra et felis ac, dapibus maximus
                    eros.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla vel diam felis. Maecenas elementum lorem nec quam
                    placerat, et tempus urna commodo. Aenean ac diam eu massa
                    pellentesque placerat. In et odio suscipit, laoreet nunc a,
                    mollis orci. Proin finibus tempus efficitur. In hac
                    habitasse platea dictumst. Morbi convallis ipsum felis, sed
                    consectetur leo laoreet eu. Ut turpis odio, pharetra in
                    interdum vel, aliquam sed mauris. Maecenas quis laoreet
                    odio, vitae volutpat tortor. Nam a nisi et orci vehicula
                    porttitor vitae sed metus. Praesent sapien ipsum, commodo et
                    nisi ac, maximus aliquam sem. Maecenas at mauris vel ipsum
                    ullamcorper commodo vel dapibus augue.
                </Paragraph>
            </BodyText>
        </div>
    );
}
export default About;
