import { type ReactNode } from "react";
import style from "./Subtitle.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className }: Props) => (
  <p className={clsx(style.subtitle, className)}>{children}</p>
);
