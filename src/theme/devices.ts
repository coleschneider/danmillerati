export const size = {
    mobile: 576,
    tablet: 768,
    desktopMin: 768,
    desktop: 900,
    desktopLg: 1140
};
export default {
    mobile: `(min-width: ${size.mobile}px)`,
    desktop: `(min-width: ${size.desktop}px)`,
    desktopMin: `(min-width: ${size.desktopMin}px)`,
    desktopMax: `(max-width: ${size.desktopLg}px)`,
    desktopLg: `(min-width: ${size.desktopLg}px)`,
    tablet: `(max-width: ${size.desktop}) and (min-width: ${size.tablet}px)`,
    tabletMax: `(max-width: ${size.desktop}px)`,
    mobileMax: `(max-width: ${size.tablet}px)`
};
