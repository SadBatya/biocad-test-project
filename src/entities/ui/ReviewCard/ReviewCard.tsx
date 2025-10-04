import style from "./ReviewCard.module.css";
import Image from "next/image";

export const ReviewCard = () => (
  <div className={style.card}>
    <div className={style.card_header}>
      <div className={style.card_user}>
        <Image
          className={style.card_user_image}
          src="/avatar-demo.png"
          alt="avatar"
          width={36}
          height={36}
        />
        <span className={style.card_username}>Александр</span>
      </div>
      <div className={style.date}>
        4.10.2025
        <Image src="/calendar.svg" alt="calendar" width={24} height={24} />
      </div>
    </div>
    <div className={style.card_body}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi
      provident molestias iure facilis, ab ipsum, similique corrupti sed quasi,
      recusandae mollitia at earum. Nisi nulla consequuntur ut doloribus optio!
    </div>
  </div>
);
