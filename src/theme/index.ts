import { DefaultTheme } from "styled-components";
import colors from "./colors";
import devices from "./devices";

const myTheme = (): DefaultTheme => ({
    devices,
    colors
});

export default myTheme;
