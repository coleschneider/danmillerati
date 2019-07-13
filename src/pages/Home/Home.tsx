import React from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import Hero from "../../sections/Hero";
import devices from "../../theme/devices";
import Bio from "./Bio";
import Testimonials from "../../sections/Testimonials";
import WorkSamples from "../../sections/WorkSamples";

const Container = posed.div({
    enter: { staggerChildren: 50 }
});
const Splash = styled(Container)`
    width: 100%;
    position: relative;
`;
const Box = styled.div`
    position: absolute;
    width: 100%;
    top: 55%;
    transform: translate(0px, -50%);
    text-align: center;
    z-index: 2;
    padding: 0px 2rem;
`;

const FadeText = posed.h2({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});
const H2 = styled(FadeText)`
    opacity: 1;
    color: white;
    padding: 0 0 1rem;
    font-size: 2.5em;
`;
const H3 = styled(FadeText)`
    font-family: A, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
    color: white;
    font-size: 1.25em;
    line-height: 1.3;
    display: inline-block;
    width: 100%;
    padding: 0px 0px 1rem;
    @media ${devices.desktop} {
        font-size: 1.5em;
    }
    @media ${devices.desktopMin} {
        width: auto;
    }
`;
const Title = styled.div`
    display: inline-block;
    font-weight: 900;
    color: white;
    font-style: italic;
    position: relative;
    width: 4.5em;
    margin: 0px 0.5rem 0px 0px;
    ::after {
        content: "";
        height: 0.25em;
        width: 100%;
        opacity: 0.3;
        position: absolute;
        bottom: 0.1em;
        left: 0px;
        right: 0px;
        z-index: 3;
        background: white;
    }
`;
const SlideWord = posed.span({
    enter: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "-50%" }
});
const Word = styled(SlideWord)`
    opacity: 0;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    text-align: center;
`;

function usePrevious({ value }: { value: any }) {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
function useTextAnimation(words: string[]) {
    const [activeWord, setWord] = React.useState(0);
    const setNextWord = () =>
        activeWord === words.length - 1 ? setWord(0) : setWord(activeWord + 1);
    React.useEffect(() => {
        const interval = setTimeout(() => setNextWord(), 2000);
        return () => {
            clearTimeout(interval);
        };
    });
    return words[activeWord];
}
function Home() {
    const words = ["Auto", "Boat", "Aircrafts"];

    const word = useTextAnimation(words);
    const prevWord = usePrevious({ value: word });
    return (
        <>
            <Splash>
                <Box>
                    <H2>
                        Dan Miller&#39;s{" "}
                        <Title>
                            <PoseGroup>
                                <Word
                                    posed={prevWord !== word ? "enter" : "exit"}
                                    key={word}
                                >
                                    {word}
                                </Word>
                            </PoseGroup>
                        </Title>
                        Upholstery
                    </H2>

                    <H3>Since 1979</H3>
                </Box>
                <Hero />
            </Splash>
            <Bio />
            <Testimonials />
            <WorkSamples />
        </>
    );
}

export default Home;
