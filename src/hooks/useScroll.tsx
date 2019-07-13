import { useEffect, useState } from "react";

function handleStickyness(node: any, setText: any) {
    node.classList.add("sticky");
    setText(true);
}

function handleNormalBehaviour(node: HTMLElement, setText: any) {
    node.classList.remove("sticky");
    setText(false);
}

function clearEventHandler(scrollCallBack: any) {
    window.removeEventListener("scroll", scrollCallBack);
}
function checkOffset(node: HTMLElement, sticky: number, setText: Function) {
    if (window.pageYOffset > sticky) {
        handleStickyness(node, setText);
    }
    if (window.pageYOffset <= node.offsetTop) {
        handleNormalBehaviour(node, setText);
    }
}
export default function useScrollListner(nodeId: string) {
    const [text, setText] = useState(false);
    useEffect(() => {
        const node = document.getElementById(nodeId) as HTMLElement;
        const originalPosition = node.offsetTop;
        checkOffset(node, originalPosition, setText);
        const scrollCallBack = window.addEventListener("scroll", () => {
            const sticky = node.offsetTop;
            checkOffset(node, sticky, setText);
        });
        return clearEventHandler(scrollCallBack);
    }, [nodeId]);
    return text;
}
