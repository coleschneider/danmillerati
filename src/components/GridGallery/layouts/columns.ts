import { round } from "../../../utils/mathUtils";

// compute sizes for column directed layouts
// eslint-disable-next-line
export const computeColumnLayout = ({
    photos,
    columns,
    containerWidth,
    margin
}) => {
    // calculate each colWidth based on total width and column amount
    // eslint-disable-next-line
    let colWidth = (containerWidth - margin * 2 * columns) / columns;

    // map through each photo to assign adjusted height and width based on colWidth
    const photosWithSizes = photos.map(photo => {
        const newHeight = (photo.height / photo.width) * colWidth;
        return {
            ...photo,
            width: round(colWidth, 1),
            height: round(newHeight, 1)
        };
    });

    // store all possible left positions
    // and current top positions for each column
    const colLeftPositions = [];
    const colCurrTopPositions = [];
    // eslint-disable-next-line
    for (var i = 0; i < columns; i++) {
        colLeftPositions[i] = round(i * (colWidth + margin * 2), 1);
        colCurrTopPositions[i] = 0;
    }

    // map through each photo, then reduce thru each "column"
    // find column with the smallest height and assign to photo's 'top'
    // update that column's height with this photo's height
    const photosPositioned = photosWithSizes.map(photo => {
        // eslint-disable-next-line
        const smallestCol = colCurrTopPositions.reduce((acc, item, i) => {
            // eslint-disable-next-line
            acc = item < colCurrTopPositions[acc] ? i : acc;
            return acc;
        }, 0);
        // eslint-disable-next-line
        photo.top = colCurrTopPositions[smallestCol];
        // eslint-disable-next-line
        photo.left = colLeftPositions[smallestCol];
        colCurrTopPositions[smallestCol] =
            colCurrTopPositions[smallestCol] + photo.height + margin * 2;

        // store the tallest col to use for gallery height because of abs positioned elements
        // eslint-disable-next-line
        const tallestCol = colCurrTopPositions.reduce((acc, item, i) => {
            // eslint-disable-next-line
            acc = item > colCurrTopPositions[acc] ? i : acc;
            return acc;
        }, 0);
        // eslint-disable-next-line
        photo.containerHeight = colCurrTopPositions[tallestCol];
        return photo;
    });
    return photosPositioned;
};
