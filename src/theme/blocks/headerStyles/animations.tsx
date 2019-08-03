import * as React from "react";
import posed from "react-pose";

export const NavPose = posed.nav({
    open: {
        height: "auto",
        delayChildren: 200,
        staggerChildren: 50
    },
    closed: {
        height: "56px",
        staggerChildren: 50,
        delay: 300
    }
});
export const PosedMenuItem = posed.li({
    open: { x: 0, opacity: 1 },
    closed: { x: -100, opacity: 0 }
});
