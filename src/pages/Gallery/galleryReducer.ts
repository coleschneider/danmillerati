import images, { Image, imageFetchStatus } from "./imagePaths";
import { Props } from "./Image";

type CarouselAction =
    | {
          type: "SET_IMAGE";
          activeImage: number;
      }
    | {
          type: "NEXT_IMAGE" | "PREV_IMAGE";
      };
interface LightboxAction {
    type: "OPEN_LIGHTBOX" | "CLOSE_LIGHTBOX";
}
interface ImageAction {
    type: "IMAGE_LOADED";
    name: string;
}
type Actions = ImageAction | CarouselAction | LightboxAction;

interface InitialState {
    loadStatus: Record<string, boolean>;
    activeImage: number;
    isOpen: boolean;
}

const loadReducer = (
    state: { [key: string]: boolean } = imageFetchStatus,
    action: Actions
) => {
    switch (action.type) {
        case "IMAGE_LOADED":
            return {
                ...state,
                [action.name]: true
            };
        default:
            return state;
    }
};
const lightboxReducer = (state: boolean, action: Actions) => {
    switch (action.type) {
        case "OPEN_LIGHTBOX":
            return true;
        case "CLOSE_LIGHTBOX":
            return false;
        default:
            return state;
    }
};
const activeImageReducer = (state: number, action: Actions) => {
    switch (action.type) {
        case "SET_IMAGE":
            return action.activeImage;
        case "NEXT_IMAGE":
            if (state && state + 1 === images.length - 1) return 0;
            return (state as number) + 1;

        case "PREV_IMAGE":
            if (state === 0) return images.length - 1;
            return (state as number) - 1;

        default:
            return state;
    }
};

export const initialState: InitialState = {
    activeImage: 0,
    loadStatus: imageFetchStatus,
    isOpen: false
};
const galleryReducer = (
    { loadStatus, activeImage, isOpen }: InitialState,
    action: Actions
): InitialState => ({
    activeImage: activeImageReducer(activeImage, action),
    loadStatus: loadReducer(loadStatus, action),
    isOpen: lightboxReducer(isOpen, action)
});
export default galleryReducer;
export const getActiveImage = (state: number): Image => images[state];
export const galleryActions = (dispatch: React.Dispatch<Actions>) => {
    const setActiveImage = (activeImage: number) =>
        dispatch({
            type: "SET_IMAGE",
            activeImage
        });
    const setImageLoaded = ({ photo }: Props) =>
        dispatch({
            type: "IMAGE_LOADED",
            name: photo.name
        });
    const openLightbox = () =>
        dispatch({
            type: "OPEN_LIGHTBOX"
        });
    const closeLightbox = () =>
        dispatch({
            type: "CLOSE_LIGHTBOX"
        });
    const nextImage = () =>
        dispatch({
            type: "NEXT_IMAGE"
        });
    const prevImage = () =>
        dispatch({
            type: "PREV_IMAGE"
        });
    return {
        setActiveImage,
        setImageLoaded,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage
    };
};
