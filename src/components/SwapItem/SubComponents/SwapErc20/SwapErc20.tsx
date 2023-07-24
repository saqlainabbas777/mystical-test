import React from "react";
import styles from "./SwapErc20.module.css";
import nullImage from '../../../../assets/NULL IMAGE.png';
import { VscVerifiedFilled } from "react-icons/vsc";
import CustomTooltip from "../../../CustomTooltip/CustomTooltip";
import {Erc20InOrder} from "../../../../types";

type Props = {
    erc20: Erc20InOrder;
};

const SwapErc20 = ({ erc20 }: Props) => {
  const token = Object.keys(erc20)[0];
  const { amount, image } = erc20?.[token];

  return (
    <div className={styles.swap_erc20}>
      <div className={styles.swap_erc20_image_container}>
        <img src={image || nullImage} alt="" />
      </div>

      <div className={styles.swap_erc20_text}>
        <p>
          {amount} {token}
        </p>
        <CustomTooltip text="This token has been verified">
          <span>
            <VscVerifiedFilled color="#3498db" size={18} />
          </span>
        </CustomTooltip>
      </div>
    </div>
  );
};

export default SwapErc20;
