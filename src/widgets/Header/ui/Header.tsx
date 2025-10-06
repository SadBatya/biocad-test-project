import { Logo, Button, Icon } from "@/shared/ui";
import style from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { IHeader } from "@/shared/types";
import { navigation } from "../model/data";
import { BurgerMenu } from "@/widgets/BurgerMenu/BurgerMenu";

export const Header = async () => {
  let headerData: IHeader | null = null;

  try {
    const res = await fetch(process.env.NETLIFY_API + "/api/navigation", {
      next: { revalidate: 3600 },
    });

    const data: IHeader = await res.json();
    headerData = data;
  } catch (error) {
    headerData = navigation;
    console.log(error, "Ошибка загрузки данных header");
  }

  return (
    <header className={style.header}>
      <div className={style.header_logo_and_menu}>
        <BurgerMenu menu={headerData?.menu || []} />
        <Link href={headerData?.logo.link || "/"}>
          <Logo />
        </Link>
      </div>
      <nav className={style.navigation}>
        <ul className={style.navigation_list}>
          {headerData?.menu.map(({ id, label, link }) => (
            <li className={style.navigation_item} key={id}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
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
};
