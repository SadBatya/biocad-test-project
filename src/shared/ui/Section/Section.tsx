import { ReactNode } from "react";
import style from "./Section.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: Props) => (
  <section className={clsx(style.section, className)} id={id}>
    {children}
  </section>
);
