import * as React from "react";
import { OrderWithCounter } from "@opensea/seaport-js/lib/types";

export type splashScreenProps = {
    progressBarValue: number;
    tips: string;
};


export type assetsMetadata = {
    [x: string]: {
        [x: string]: {
            name: string;
            image_url: string;
            collectionName: string;
            isOfferedNft: boolean;
            supportsWyvern: boolean;
        };
    };
};

export type Order = {
    _id: string;
    chainId: number;
    orderWithCounter: OrderWithCounter;
    status: "open" | "filled" | "canceled";
    __v: number;
    updatedAt: string;
    createdAt: string;
    takerAddress?: string;
    isPrivate?: boolean;
    transactionHash: string;
    orderMetadata: {
        assetsMetadata: assetsMetadata[];
    };
};

export type Erc20InOrder = {
    [x: string]: {
        amount: string;
        image: any;
    };
};

