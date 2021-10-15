import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
`;

export default GlobalStyles;