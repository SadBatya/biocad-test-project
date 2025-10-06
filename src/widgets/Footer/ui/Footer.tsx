import Link from "next/link";
import { Logo, Icon } from "@/shared/ui";
import { socialsIcons } from "../model/data";
import { IPageMain } from "@/shared/types";

import style from "./Footer.module.css";

export const Footer = async () => {
  let footerData: IPageMain | null = null;

  try {
    const res = await fetch(process.env.NETLIFY_API + "/api/main", {
      next: { revalidate: 3600 },
    });

    const data: IPageMain = await res.json();
    footerData = data;
  } catch (error) {
    console.log(error, "Ошибка загрузки данных footer");
  }

  const socialsArray = Object.values(footerData?.socials || {});

  return (
    <footer className={style.footer}>
      <Logo />
      <div className={style.socials}>
        {socialsIcons.map(({ icon }, index) => (
          <Link
            className={style.icon}
            href={socialsArray[index].url}
            key={index}
          >
            <Icon src={icon} color="var(--secondary-background)" />
          </Link>
        ))}
      </div>
    </footer>
  );
};
