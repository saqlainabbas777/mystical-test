// import React, {useEffect, useState} from "react";
import React from "react";
import styles from "./SwapItem.module.css";
// import AssetPanel from "./SubComponents/AssetPanel/AssetPanel";
// import {ethers} from "ethers";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AcceptButton from "../AcceptButton/AcceptButton";
// import {ConsiderationItem, OfferItem} from "@opensea/seaport-js/lib/types";
import {Order} from "../../types";

dayjs.extend(relativeTime);

type Props = {
    order: Order;
};

const SwapItem = ({order}: Props) => {
    // const offerer = order.orderWithCounter.parameters.offerer;
    // const taker = order.takerAddress;
    // const endTime = Number(order.orderWithCounter.parameters.endTime);
    //
    // const offer = order.orderWithCounter.parameters.offer;
    // const consideration = order.orderWithCounter.parameters.consideration;
    //
    // const getExpirationDate = () => {
    //     let expirationDate = dayjs(endTime * 1000).fromNow();
    //     if (expirationDate.startsWith("in")) {
    //         const splitText = expirationDate.split(" ");
    //         const duration =
    //             splitText[1] === "a" || splitText[1] === "an" ? "1" : splitText[1];
    //         expirationDate = `${duration} ${splitText[2]} left`;
    //         return expirationDate;
    //     }
    //     return expirationDate;
    // };
    //
    // const expirationDate = getExpirationDate();
    //
    // const nftDetails = order.orderMetadata.assetsMetadata;
    //
    // const getOfferedOrRequestedNfts = (nftStatus: boolean) => {
    //     return nftDetails.filter((detail: any) => {
    //         const contract = Object.keys(detail)[0];
    //         const token = Object.keys(detail[contract])[0];
    //         const {isOfferedNft} = detail[contract][token];
    //         return isOfferedNft === nftStatus;
    //     });
    // };
    //
    // const getOfferedOrRequestedErc20s = (
    //     offerOrConsideration: OfferItem[] | ConsiderationItem[]
    // ) => {
    //     return offerOrConsideration.filter((item) => {
    //         return item.itemType === 1 || item.itemType === 0;
    //     });
    // };
    //
    // const offeredNfts = getOfferedOrRequestedNfts(true);
    // const requestedNfts = getOfferedOrRequestedNfts(false);
    //
    // const [offeredErc20s, setOfferedErc20s] = useState([]);
    // const [requestedErc20s, setRequestedErc20s] = useState([]);
    //
    // const parseOfferedOrRequestedErc20s = async (
    //     arrayOfErc20s: OfferItem[] | ConsiderationItem[]
    // ) => {
    //     if (arrayOfErc20s?.length > 0) {
    //         let arrayFinished = await Promise.all(
    //             arrayOfErc20s.map(async (item) => {
    //                 const erc20tokenAddress = ethers.utils.getAddress(item.token);
    //                 fetch(`https://mystic-swap.herokuapp.com/erc20/${1}/${erc20tokenAddress.toLowerCase()}`)
    //                     .then((response) => response.json())
    //                     .then((res: any) => {
    //                         const imgurl = res.data[0]?.url;
    //                         const erc20 = res.data[0]?.symbol;
    //                         const deci = 10 ** res.data[0]?.decimals;
    //                         let convertedDeci = Number(item.startAmount) / deci;
    //                         let deciValue = convertedDeci.toFixed(18);
    //                         let finalValue = deciValue.toString().replace(/0+$/, "");
    //                         let finalObject = {[erc20]: {amount: finalValue, image: imgurl}};
    //                         return finalObject;
    //                     })
    //             })
    //         );
    //         return arrayFinished;
    //     } else return [];
    // };
    //
    // useEffect(() => {
    //     // console.log('order', order);
    //     if (offeredErc20s.length < 1 && requestedErc20s.length < 1) {
    //         const parsingTokens = async () => {
    //             const offeredErc20s = getOfferedOrRequestedErc20s(offer);
    //             const requestedErc20s = getOfferedOrRequestedErc20s(consideration);
    //             if (offeredErc20s.length > 0) {
    //                 const offered = await parseOfferedOrRequestedErc20s(offeredErc20s);
    //                 //@ts-ignore
    //                 setOfferedErc20s(offered);
    //             }
    //             if (requestedErc20s.length > 0) {
    //                 const requested = await parseOfferedOrRequestedErc20s(
    //                     requestedErc20s
    //                 );
    //                 //@ts-ignore
    //                 setRequestedErc20s(requested);
    //             }
    //         };
    //
    //         parsingTokens();
    //     }
    // }, []);

    return (
        <div className={styles.swap_item}>
            <div className={styles.swap_item_top}>
                {order.chainId}
                {/*<AssetPanel*/}
                {/*    address={offerer}*/}
                {/*    sender={true}*/}
                {/*    orders={offeredNfts}*/}
                {/*    expirationDate={expirationDate}*/}
                {/*    erc20s={offeredErc20s}*/}
                {/*/>*/}
                {/*<AssetPanel*/}
                {/*    sender={false}*/}
                {/*    address={taker!}*/}
                {/*    orders={requestedNfts}*/}
                {/*    erc20s={offeredErc20s}*/}
                {/*/>*/}
            </div>
            <div className={styles.accept_area}>
                <AcceptButton/>
            </div>
        </div>
    );
};

export default SwapItem;
