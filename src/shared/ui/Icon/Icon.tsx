import Image from "next/image";
import style from "./Icon.module.css";
import clsx from "clsx";

interface Props {
  src: string;
  color?: string;
  className?: string;
}

export const Icon = ({ src, color, className }: Props) => (
  <div
    style={{
      backgroundColor: color || "var(--black-background)",
    }}
    className={clsx(style.icon, className)}
  >
    <Image src={src} alt="icon" width={24} height={24} />
  </div>
);
