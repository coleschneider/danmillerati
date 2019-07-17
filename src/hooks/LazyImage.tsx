import React, { useState, useEffect } from "react";
import styled from "styled-components";

const placeHolder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const Image = styled.img`
    display: block;
    height: 100px;
    width: 100px;
    @keyframes loaded {
        0% {
            opacity: 0.1;
        }
        100% {
            opacity: 1;
        }
    }

    &.loaded:not(.has-error) {
        animation: loaded 300ms ease-in-out;
    }

    &.has-error {
        content: url(${placeHolder});
    }
`;
interface LazyProps {
    src: string;
    alt?: string;
    onClick: (e: any) => void;
    style: React.CSSProperties;
    fallback: string;
}
const LazyImage = ({ src, alt, onClick, style, fallback }: LazyProps) => {
    const [imageSrc, setImageSrc] = useState(fallback);
    const [imageRef, setImageRef] = useState();

    const onLoad = (event: React.SyntheticEvent<HTMLElement, Event>) => {
        // @ts-ignore
        event.target.classList.add("loaded");
    };
    // @ts-ignore
    const onError = event => {
        event.target.classList.add("has-error");
    };

    useEffect(() => {
        let observer: IntersectionObserver;
        let didCancel = false;

        if (imageRef && imageSrc !== src) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if (
                                !didCancel &&
                                (entry.intersectionRatio > 0 ||
                                    entry.isIntersecting)
                            ) {
                                setImageSrc(src);
                                observer.unobserve(imageRef);
                            }
                        });
                    },
                    {
                        threshold: 0.01,
                        rootMargin: "75%"
                    }
                );
                observer.observe(imageRef);
            } else {
                // Old browsers fallback
                setImageSrc(src);
            }
        }
        return () => {
            didCancel = true;
            // on component cleanup, we remove the listner
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef);
            }
        };
    }, [src, imageSrc, imageRef]);
    return (
        <Image
            style={style}
            onClick={onClick}
            ref={setImageRef}
            src={imageSrc}
            alt={alt}
            onLoad={onLoad}
            onError={onError}
        />
    );
};

export default LazyImage;
