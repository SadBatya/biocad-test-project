"use client";

import { useState } from "react";
import style from "./BurgerMenu.module.css";
import Image from "next/image";
import clsx from "clsx";
import { type INavigation } from "@/shared/types";
import Link from "next/link";

interface Props extends INavigation {
  className?: string;
}

export const BurgerMenu = ({ menu, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(style.burger_menu, className)}>
      <button
        className={clsx(style.burger_button, isOpen && style.open)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src="/burger-icon.svg" alt="burger" width={24} height={24} />
      </button>
      <nav className={clsx(style.burger_menu_list, isOpen && style.open)}>
        <ul className={style.navigation_list}>
          {menu.map(({ id, label, link }) => (
            <li className={style.navigation_item} key={id}>
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
