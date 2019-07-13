import "react-router-dom";

declare module "react-router-dom" {
    // eslint-disable-next-line
    export interface Link {
        // @ts-ignore
        propTypes: any;
    }
}
