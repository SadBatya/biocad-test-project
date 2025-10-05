import { type IReview } from "@/shared/types";
import style from "./ReviewCard.module.css";
import Image from "next/image";

type Props = IReview;

export const ReviewCard = ({ photo, name, date, text }: Props) => (
  <div className={style.card}>
    <div className={style.card_header}>
      <div className={style.card_user}>
        {photo ? (
          <Image
            className={style.card_user_image}
            src={photo}
            alt="avatar"
            width={36}
            height={36}
          />
        ) : (
          <div className={style.card_user_image}>
            {name.charAt(0).toUpperCase()}
          </div>
        )}

        <span className={style.card_username}>{name}</span>
      </div>
      <div className={style.date}>
        {date}
        <Image src="/calendar.svg" alt="calendar" width={24} height={24} />
      </div>
    </div>
    <div className={style.card_body}>{text}</div>
  </div>
);
