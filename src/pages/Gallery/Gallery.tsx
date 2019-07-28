/* eslint-disable */
import * as React from "react";

import GridGallery from "../../components/GridGallery/GridGallery";
import Modal from "../../components/Modal/Modal";
import useGallery from "../../hooks/useGallery";
import createUseGlobalState from '../../hooks/useGlobalState'
import resolveImage from "../../utils/resolveImage";


export const useGalleryContext = createUseGlobalState(useGallery);
function Grid() {
    const {lightbox: {isOpen}, imageStatus} = useGalleryContext()
    const imgs = Object.keys(imageStatus).map(image => imageStatus[image])


    return (
        <div>
            {isOpen && <Modal thumbnails={imgs} />}
           <GridGallery photos={imgs}  />
        </div>
    
    );
}
export default Grid