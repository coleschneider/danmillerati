import { round } from "./mathUtils";
// eslint-disable-next-line
export const findIdealNodeSearch = ({ targetRowHeight, containerWidth }) => {
    const rowAR = containerWidth / targetRowHeight;
    // @ts-ignore
    return round(rowAR / 1.5) + 8;
};
