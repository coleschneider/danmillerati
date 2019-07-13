import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import devices from "../../theme/devices";
import Logo from "../Header/logo";
import { headerLinks, HeaderLink } from "../Header/Navigation";

const FooterWrapper = styled.footer`
    display: block;
    position: relative;
    width: 100%;
    background: ${({ theme: { colors } }) => colors.black};
`;
const FooterOuter = styled.div`
    opacity: 0.99999;
    max-width: 1200px;
    padding: 3em 1em;
    margin: 0px auto;
    @media ${devices.desktopMin} {
        padding: 3.5em 2em;
    }
`;
const FooterInfo = styled.div`
    display: block;
`;
const FooterInner = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow: row;
    border-top: 1px solid rgb(54, 54, 54);
    padding: 2em 0px 0px;
    margin: 0px auto;
`;

const FooterHeader = styled.h3`
    margin: -1.25rem 0px 0.25rem;
`;
const FooterHomeLink = styled.a`
    display: inline-block;
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
`;
const FooterParagraph = styled.p`
    color: ${({ theme: { colors } }) => colors.dimGrey};
`;

const SitemapList = styled.ul`
    list-style: none;
    margin: 1.5em 0 0;
    text-align: left;
    @media ${devices.desktopMin} {
        text-align: right;
        margin: 0;
    }
`;
const ListItem = styled.li`
    display: inline-block;
    margin: 0 1em 0.5em 0;
    @media ${devices.desktopMin} {
        margin: 0 0 0.5em 1em;
    }
`;
const SiteMapLink = styled(Link)`
    color: ${({ theme: { colors } }) => colors.white};
    text-decoration: none;
`;
const ExternalLink = styled.a`
    color: ${({ theme: { colors } }) => colors.white};
    text-decoration: none;
`;
const SitemapItem = ({ to, text }: HeaderLink) => (
    <ListItem>
        <SiteMapLink to={to}>{text}</SiteMapLink>
    </ListItem>
);
const Footer = () => (
    <FooterWrapper>
        <FooterOuter>
            <FooterInner>
                <FooterInfo>
                    <FooterHeader>
                        <FooterHomeLink>
                            <Logo
                                iconType="Logo"
                                width="100%"
                                fill="white"
                                viewBox="0 0 194.69 53.44"
                                maxWidth="80px"
                            />
                        </FooterHomeLink>
                    </FooterHeader>
                    <FooterParagraph>
                        Copyright © 2019 Dan Miller ATI. All rights reserved.
                    </FooterParagraph>
                </FooterInfo>
                <div>
                    <SitemapList>
                        {headerLinks.map(link => (
                            <SitemapItem {...link} key={link.text} />
                        ))}
                    </SitemapList>
                    <SitemapList>
                        <ExternalLink href="https://www.facebook.com/dan.miller.75248795">
                            <Logo
                                iconType="Facebook"
                                fill="white"
                                viewBox="0 0 512 512"
                                width="1.75em"
                                height="1.75em"
                                margin="0px -0.5rem -0.75rem -0.25rem"
                            />
                        </ExternalLink>
                    </SitemapList>
                </div>
            </FooterInner>
        </FooterOuter>
    </FooterWrapper>
);

export default Footer;
