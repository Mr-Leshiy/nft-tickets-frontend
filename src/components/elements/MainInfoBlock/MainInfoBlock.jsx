import React from "react";
import styles from "./MainInfoBlock.module.scss";

import Button from "../../UI/Button/Button.jsx";
import Title from "../../UI/Title/Title.jsx";

import IOS from "../../../assets/images/icon-ios.svg";
import google from "../../../assets/images/icon-google.svg";

const MainInfoBlock = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__inner}>
        <Title classes="title">How do you use NFT tickets?</Title>
        <p>
          NFTs are unique digital tokens stored on a blockchain. Once they are
          created on the blockchain, they can be sold to customers digitally.
          Customers then store NFTs in a secure wallet that they can access on
          any device. In the ticketing system, event organizers can mint the
          required number of NFT tickets on their choice of a blockchain
          platform.
        </p>

        <p>
          They can code the NFTs to set a sale price or run the sale as an
          auction where people can bid for tickets. A buyer purchases NFT-based
          tickets directly from the ticketing company. On receiving payment, a
          smart contract triggers and a ticketing database sends an NFT ticket
          to the buyer. The ticketing company requests to upload the ticket on
          the IPFS.
        </p>

        <div className={styles.info__buttons}>
          <Button classes="button_yellow" image={google}>
            Download for
          </Button>
          <Button classes="button_yellow" image={IOS}>
            Download for
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainInfoBlock;
