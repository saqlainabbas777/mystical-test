import React from "react";
import nullImage from "../../../../assets/NULL IMAGE.png";
import styles from "./SwapNft.module.css";
import { VscVerifiedFilled } from "react-icons/vsc";
import CustomTooltip from "../../../CustomTooltip/CustomTooltip";
import {assetsMetadata} from "../../../../types";

type Props = { nft: assetsMetadata };

const SwapNft = ({ nft }: Props) => {
  const contract = Object.keys(nft)[0];
  const token = Object.keys(nft[contract])[0];
  const { image_url, name, collectionName } =
    nft[contract][token];

  return (
    <div className={styles.swap_nft}>
      <div className={styles.swap_nft_image_container}>
        <img src={image_url || nullImage} alt="" />
      </div>
      <div className={styles.swap_nft_text}>
        <div className={styles.collection_name}>
          <p>{collectionName}</p>
          <CustomTooltip text="This collection has been verified">
            <span>
              <VscVerifiedFilled color="#3498db" size={18} />
            </span>
          </CustomTooltip>
        </div>
        <p className={styles.nft_name}>{name}</p>
      </div>
    </div>
  );
};

export default SwapNft;
