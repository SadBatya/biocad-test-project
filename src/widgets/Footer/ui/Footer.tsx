import { Logo, Icon } from "@/shared/ui";
import { socialsIcons } from "../model/data";
import Link from "next/link";
import style from "./Footer.module.css";

export const Footer = () => (
  <footer className={style.footer}>
    <Logo />
    <div className={style.socials}>
      {socialsIcons.map(({ icon, link }, index) => (
        <Link className={style.icon} href={link} key={index}>
          <Icon src={icon} color="var(--secondary-background)" />
        </Link>
      ))}
    </div>
  </footer>
);
