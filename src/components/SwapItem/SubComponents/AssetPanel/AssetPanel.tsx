import React from "react";
import Blockies from "react-blockies";
import styles from "./AssetPanel.module.css";
import { truncateAddress } from "../../../../utils/utils";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SwapNft from "../SwapNft/SwapNft";
import SwapErc20 from "../SwapErc20/SwapErc20";
import {assetsMetadata, Erc20InOrder} from "../../../../types";

dayjs.extend(relativeTime);

type Props = {
  sender: boolean;
  address: string;
  orders: assetsMetadata[];
  expirationDate?: string;
  erc20s: Erc20InOrder[];
};

const AssetPanel = ({
  address,
  sender,
  orders,
  expirationDate,
  erc20s,
}: Props) => {
  return (
    <div
      className={`${styles.asset_panel} ${
        sender ? styles.dividing_border : ""
      }`}
    >
      <div className={styles.panel_top}>
        <div
          className={`${styles.blocky_holder} ${
            !sender ? styles.counter_blocky : ""
          }`}
        >
          <Blockies
            seed={address}
            size={9}
            className={`${styles.blocky} ${
              !sender ? styles.reverse_blocky : ""
            }`}
          />
          <p>{truncateAddress(address, 5, "...")}</p>
        </div>

        <p>{expirationDate}</p>
      </div>
      <h2 className={styles.panel_title}>{sender ? "Offering:" : "For:"}</h2>
      <div className={styles.assets_holder}>
        {orders.map((nft, index) => {
          return <SwapNft nft={nft} key={index} />;
        })}

        {erc20s.length > 0 &&
          erc20s.map((token, index) => {
            return <SwapErc20 key={index} erc20={token} />;
          })}
      </div>
    </div>
  );
};

export default AssetPanel;
