import * as React from "react";
import styled from "styled-components";
import devices from "../../theme/devices";
import Icons from "../../theme/Icons";

interface Props extends HeaderProps {
    width: string;
    maxWidth: string;
    fill: string;
    height: string;
    margin: string;
}

const SVG = styled.svg<Partial<Props>>`
    width: ${({ width }) => (!width ? "68px" : width)};
    height: ${({ height }) => height};
    fill: ${({ theme: { colors }, fill }) => (!fill ? colors.black : fill)};
    max-width: ${({ maxWidth }) => maxWidth};
    margin: ${({ margin }) => margin};
    overflow: hidden;
    @media ${devices.desktop} {
        fill: ${({ isFixed, theme: { colors } }) =>
            isFixed ? colors.black : colors.white};
    }
`;

const Svg = ({
    height,
    margin,
    isFixed,
    width,
    maxWidth,
    fill,
    iconType,
    viewBox
}: Partial<Props> & { iconType: IconTypes; viewBox: string }) => (
    <SVG
        width={width}
        height={height}
        maxWidth={maxWidth}
        fill={fill}
        isFixed={isFixed}
        margin={margin}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
    >
        {Icons[iconType]}
    </SVG>
);
export default Svg;
