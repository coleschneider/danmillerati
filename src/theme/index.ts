import { DefaultTheme } from "styled-components";
import colors from "./colors";
import devices from "./devices";

const myTheme = (layout: string): DefaultTheme => ({
    devices,
    colors,
    layout
});

export default myTheme;
