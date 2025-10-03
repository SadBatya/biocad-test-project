import { Logo, Button, Icon } from "@/shared/ui";
import style from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header className={style.header}>
    <Logo />
    <nav className={style.navigation}>
      <ul className={style.navigation_list}>
        <li className={style.navigation_item}>
          <Link href="/">Назад к сайту</Link>
        </li>
        <li className={style.navigation_item}>
          <Link href="/">О приложении</Link>
        </li>
        <li className={style.navigation_item}>
          <Link href="/">Возможности</Link>
        </li>
        <li className={style.navigation_item}>
          <Link href="/">Общение</Link>
        </li>
        <li className={style.navigation_item}>
          <Link href="/">Отзывы</Link>
        </li>
      </ul>
    </nav>
    <Button className={style.button}>
      <Icon src="/download.svg" className={style.button_icon} />
      <span className={style.button_text}>Download app</span>
      <div className={style.button_arrow}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Image
            key={index}
            src="/arrow.svg"
            alt="arrow"
            width={10}
            height={18}
          />
        ))}
      </div>
    </Button>
  </header>
);
