import {Meta} from "@storybook/react";
import * as React from "react";
import {SwapsPage} from "../src";

export default {
    title: "Pages/SplashScreen",
    component: SwapsPage,
    argTypes: {},
    args: {}
} as Meta;

export const splashScreen = () => {
    return (
        <SwapsPage/>
    )
};
