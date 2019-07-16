import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 22.5em;
    height: 100%;
    background: #fff;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: right;
    visibility: visible;
    /* z-index: 10000; */
    right: 0;
`;
const Header = styled.div`
    padding: 3em 2.25em 1.75em 2.25em;
    display: block;
`;
const Section = styled.section`
    display: flex;
    -moz-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 0.75em;
`;
const Viewer = ({ children }: any) => (
    <Wrapper>
        <Header>
            <h1>Dan Site</h1>
        </Header>
        <Section>{children}</Section>
    </Wrapper>
);

export default Viewer;
