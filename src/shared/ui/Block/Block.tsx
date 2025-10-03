import { type ReactNode } from "react";
import style from "./Block.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Block = ({ children, className }: Props) => (
  <div className={clsx(style.block, className)}>{children}</div>
);
