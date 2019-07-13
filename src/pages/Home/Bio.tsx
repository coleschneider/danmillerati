import * as React from "react";
import styled from "styled-components";
import posed from "react-pose";
import devices from "../../theme/devices";
import bio from "./bio.jpg";
import secondBio from "./second_bio.jpg";

const P = posed.p({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
});

const SectionHeader = styled.h2`
    letter-spacing: 1px;
    font-size: 2em;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0px 0px 1rem;
    @media ${devices.desktop} {
        font-size: 2.5rem;
    }
`;
const BioWrapper = styled.div`
    padding: 2em 0px;
    @media ${devices.desktopMin} {
        padding: 4em 0px;
    }
`;
const BioContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    position: relative;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
    padding: 0px 1em;
    @media ${devices.desktop} {
        display: flex;
    }
    @media ${devices.desktopMin} {
        padding: 0 2em;
    }
`;
const BioBox = styled.div`
    text-align: center;
    @media ${devices.desktop} {
        text-align: left;
        flex: 0 0 49%;
    }
`;
const BioGrid = styled.div`
    position: relative;
    height: auto;
    margin: 0px 0px 2.5rem;
`;
const BioPrimaryImage = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 1;
    width: 75%;
`;
const PadBottom = styled.div`
    width: 100%;
    padding-bottom: 100%;
`;
const Placeholder = styled.div`
    background-color: ${({ theme }) => theme.colors.grey};
    position: absolute;
    top: 0px;
    bottom: 0px;
    opacity: 0;
    transition-delay: 0.25s;
    right: 0px;
    left: 0px;
`;
const BioImage = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
}`;
const BioText = styled.div`
    font-size: 1em;
    text-align: left;
    line-height: 1.5;
}
`;
const BioSecondaryImage = styled(BioPrimaryImage)`
    z-index: 2;
    bottom: -1em;
    right: 0px;
    width: 40%;
    position: absolute !important;
    overflow: hidden;
`;
const Bio = () => (
    <BioWrapper>
        <BioContainer>
            <BioBox>
                <BioGrid>
                    <BioPrimaryImage>
                        <PadBottom />
                        <Placeholder />
                        <BioImage src={secondBio} />
                    </BioPrimaryImage>
                    <BioSecondaryImage>
                        <PadBottom />
                        <Placeholder />
                        <BioImage src={bio} />
                    </BioSecondaryImage>
                </BioGrid>
            </BioBox>
            <BioBox>
                <SectionHeader>Hi, I&apos;m Dan</SectionHeader>
                <BioText>
                    <P>
                        I opened my Auto/Boat/ Aircraft upholstery shop in 1979.
                        I did some of the craziest cars in the country. Customs,
                        exotics, and many local customers who just wanted good,
                        honest clean work. I had many celebrity clients
                        including Charlie Sheen, Wilt Chamberlain, Motley
                        Crue&#39;s Nikki Sixx and Tommy Lee, Guns & Roses&#39;
                        Axel Rose, Slash, and Matt Sorum, Country singer Dwight
                        Yokum. I even did a custom dash board for the Sultan of
                        Brunei. I&#39;ve been in and on the cover of some of the
                        biggest car magazines in the industry. I was even quoted
                        in Hot Rod Magazine as being one of the top custom
                        upholsterers in the nation.
                    </P>
                </BioText>
                <BioText>
                    <P>
                        Now I am semi retired. I work in Camarillo 7-3 M-F at
                        the Camarillo shop (wife said it keeps me out of the
                        house). At home in my spare time I restore, my
                        motorcycles and my cool vintage Dodge Van. Swing by and
                        say hi or drop me an e-mail to talk old times.Hope to
                        hear from you.
                    </P>
                </BioText>
            </BioBox>
        </BioContainer>
    </BioWrapper>
);

export default Bio;
