// return two decimal places rounded number
// eslint-disable-next-line
export const ratio = ({ width, height }) => round(width / height, 2);

export const round = (value, decimals) => {
    // eslint-disable-next-line
    if (!decimals) decimals = 0;
    // @ts-ignore
    // eslint-disable-next-line
    return Number(`${Math.round(value + "e" + decimals)}e-${decimals}`);
};
