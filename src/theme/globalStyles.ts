import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        min-height: 0;
        min-width: 0;
        box-sizing: border-box;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        vertical-align: baseline;
        margin: 0;
        padding: 0;
        border-width: 0;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        font: inherit;
    }

    html,
    body {
            text-size-adjust: 100%;
    font-weight: normal;
    font-family: 'Roboto';
    }
 
    head {
        display: none;
    }
    html {
        display: block;
        color: -internal-root-color;
    }

    body {
        font-size: 1em;
    color: rgb(27, 27, 27);
    line-height: 1;
    font-variant-ligatures: none;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    text-shadow: rgba(0, 0, 0, 0.01) 0px 0px 1px;
    }

    .App_Container {
        outline: none;
    }

    .skip {
        line-height: 57px;
        color: white;
        z-index: 101;
        position: fixed;
        top: -100%;
        padding: 0 1em;
        background: rgb(40, 103, 207);
    }

    nav {
        background: white;

        @media screen and (min-width:900px) {
            background: transparent;
        }
    }
nav ul li a {
    cursor: pointer;
    position: relative;
    font-weight: bold;
    color: rgb(27, 27, 27);
    text-transform: uppercase;
    font-size: 1.5em;
    text-decoration: none;
    transition: opacity 0.3s ease 0s;
    border-bottom: 1px solid transparent;
}
nav ul li a.stick {
    color: rgb(27, 27, 27);
}
nav ul li a:hover {
    opacity: 0.7;

}
    img {
        display: block;
        width: 100%;
        height: auto;
    }
    @media screen and (min-width:900px) {
        nav ul li a.stick {
            color: rgb(27, 27, 27);
        }
        nav ul li a {
    font-size: 0.85em;
    color: white;
    letter-spacing: 0.8px;
    height: 56px;
    padding: 0px 0px 0.1em;
}
}
`;
