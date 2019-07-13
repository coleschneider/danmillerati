import { useContext } from "react";
import { RouteChildrenProps } from "react-router";
import { RouterContext } from "../utils/Router";

export default function useRouter() {
    return useContext<RouteChildrenProps>(RouterContext);
}
