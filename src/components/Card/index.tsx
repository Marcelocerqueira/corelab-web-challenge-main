import React, { ReactNode } from "react";
import { BsHeart } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import styles from "./Card.module.scss";

interface ICard {
  title: string;
  children: ReactNode;
}

const Card = (props: ICard) => {
  return (
    <div className={styles.Card}>
      <div className={styles.wrap}>
        <BiEdit />
        <AiOutlineClose />
        <BsHeart />
      </div>
      <h2>{props.title}</h2>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Card;
