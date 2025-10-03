import Image from "next/image";
import style from "./Logo.module.css";

export const Logo = () => (
  <div className={style.logo}>
    <Image width={151} height={36} src="/logo.svg" alt="logo" />
  </div>
);
