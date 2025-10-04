import { type ReactNode } from "react";
import style from "./Title.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className }: Props) => (
  <h1 className={clsx(style.title, className)}>{children}</h1>
);
