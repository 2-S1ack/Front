import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Source+Sans+Pro:wght@300&display=swap');
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1.5;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    body {
        font-family: 'Source Sans Pro', sans-serif;;
    }
    * {
    font-family: 'Source Sans Pro', sans-serif;;
    }

    html{
        --color-login-btn:#4a154b;
        --color-login-btn-hover:#703578;
        --color-background: #350d36;
        --color-bright-violet: #5d3d5e;
        --color-status:#2bac76;
        --color-sidebar-back: #3f0e40;
        --color-sidebar-text: #bfafbf;
        --color-chatbox-word :#cfcfcf;
        --color-chatinput-header-btn:#cacaca;
        --color-chatinput-footer-btn:#606060;
        --color-chatinput-footer-back : #f2f2f2;
    
    }
`;

export default GlobalStyle;
