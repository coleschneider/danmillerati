import React from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
// @ts-ignore
import Modal from "react-responsive-modal";
import { Props as ImageProps } from "./Image";
import { Image } from "./imagePaths";
import { galleryActions } from "./galleryReducer";
// import useKeyPress from "../../hooks/useKeypress";

interface Props {
    show: boolean;
    dispatch: React.Dispatch<any>;
    activeImage: Image | null;
}
const Prev = styled.a`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    :hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;
const Next = styled(Prev)`
    right: 18px;
    border-radius: 3px 0 0 3px;
`;

const Dialoge = ({ show, dispatch, activeImage }: Props) => {
    const { closeLightbox } = galleryActions(dispatch);
    React.useEffect(() => {
        const handleKeyDown = (e: any) => {
            if (e.key === "ArrowRight") {
                dispatch({ type: "NEXT_IMAGE" });
            }
            if (e.key === "ArrowLeft") {
                dispatch({ type: "PREV_IMAGE" });
            }
        };
        if (show) {
            window.addEventListener("keydown", handleKeyDown);
        } else {
            window.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [dispatch, show]);
    return (
        <Modal
            open={show}
            onClose={closeLightbox}
            center
            styles={{
                modal: {
                    background: "transparent",
                    width: "100%",
                    maxWidth: "1000px"
                },
                closeButton: {
                    outline: "none",
                    cursor: "pointer"
                },
                closeIcon: {
                    fill: "white",
                    outline: "none"
                }
            }}
        >
            <div
                style={{
                    display: "block",
                    padding: "3em 0 0 0"
                }}
            >
                {activeImage && (
                    <img
                        style={{ width: "100%" }}
                        src={activeImage.src}
                        alt=""
                    />
                )}
            </div>
            <Prev onClick={() => dispatch({ type: "PREV_IMAGE" })}>❮</Prev>
            <Next onClick={() => dispatch({ type: "NEXT_IMAGE" })}>❯</Next>
        </Modal>
    );
};
export default Dialoge;
