import * as React from "react";
import { mount } from "enzyme";
import GridGallery from "./GridGallery";
import imagePaths from "../../pages/Gallery/imagePaths";
import createGlobalState from "../../hooks/useGlobalState";
import useGallery from "../../hooks/useGallery";
import * as useInView from "../../hooks/useInView/useInView";

jest.mock("../../pages/Gallery/imagePaths");
jest.mock("../../hooks/useInView/useInView");
describe("GridGallery", () => {
    let Wrapper: any;

    it("should work", () => {
        const galleryContext = createGlobalState(useGallery);
        const GalleryWrapper = () => {
            const context = React.useContext(galleryContext.Context);

            return <GridGallery photos={imagePaths} />;
        };
        const spy = jest
            .spyOn(useInView, "default")
            .mockImplementation(() => [null, true, null]);
        Wrapper = mount(
            <galleryContext.Provider>
                <GalleryWrapper />
            </galleryContext.Provider>
        );

        expect(Wrapper).toMatchSnapshot();
    });
});
