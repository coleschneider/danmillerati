import React from "react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import Hero from "../../components/Hero/Hero";
import devices from "../../theme/devices";
import Bio from "./Bio";
import Testimonials from "../../components/Testimonials/Testimonials";
import WorkSamples from "../../components/Work/Work";

const SlideWordWrapper = posed.div({
    open: {
        delayChildren: 200,
        staggerChildren: 500,
        transition: { type: "spring", stiffness: 800, damping: 20 }
    },
    closed: { delay: 300 }
});

const Item = posed.h2({
    open: { y: "0%", opacity: 1 },
    closed: { y: "100%", opacity: 0 }
});

const Splash = styled.div`
    top: 60px;
    z-index: -1;
    top: 0;
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

const H2 = styled(Item)`
    opacity: 1;
    color: white;
    padding: 0 0 1rem;
    font-size: 2.5em;
`;
const H3 = styled(Item)`
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

function usePrevious({ value }: { value: string }) {
    const ref = React.useRef<string>();
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
    const words = ["Auto", "Boat", "Aircraft"];

    const word = useTextAnimation(words);
    const prevWord = usePrevious({ value: word });
    return (
        <>
            <Splash>
                <Box key="box">
                    <SlideWordWrapper initialPose="closed" pose="open">
                        <H2 key="h2">
                            Dan Miller&#39;s{" "}
                            <Title>
                                <PoseGroup>
                                    <Word
                                        posed={
                                            prevWord !== word ? "enter" : "exit"
                                        }
                                        key={word}
                                    >
                                        {word}
                                    </Word>
                                </PoseGroup>
                            </Title>
                            Upholstery
                        </H2>

                        <H3 key="h3"> Since 1979</H3>
                    </SlideWordWrapper>
                </Box>
                <Hero key="some" />
            </Splash>
            <Bio />
            <Testimonials />
            <WorkSamples />
        </>
    );
}

export default Home;
