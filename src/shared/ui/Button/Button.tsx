import { type ReactNode } from "react";
import style from "./Button.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  theme?: "white" | "black" | "transparent";
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  theme = "white",
  disabled,
}: Props) => (
  <button
    className={clsx(style.button, style[theme], className)}
    disabled={disabled}
  >
    {children}
  </button>
);
