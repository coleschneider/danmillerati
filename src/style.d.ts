import "styled-components";

declare module "styled-components" {
    // eslint-disable-next-line
    export interface DefaultTheme {
        layout: string;
        colors: {
            main: string;
            secondary: string;
            grey: string;
            mainBlue: string;
            white: string;
            black: string;
            overlay: string;
            lightGrey: string;
            tan: string;
        };
        devices: {
            desktop: string;
            mobile: string;
            tablet: string;
            tabletMax: string;
            mobileMax: string;
        };
    }
    // esxport type ThemingFunction = () => DefaultTheme;
}
