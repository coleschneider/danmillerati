import "styled-components";

declare module "styled-components" {
    // eslint-disable-next-line
    export interface DefaultTheme {
        colors: {
            main: string;
            secondary: string;
            grey: string;
            mainBlue: string;
            white: string;
            black: string;
            offWhite: string;
            overlay: string;
            dimGrey: string;
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
