"use client";

import { useState, type ReactNode } from "react";
import style from "./Modal.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  trigger: ReactNode;
  triggerClassName?: string;
}

export const Modal = ({ children, trigger, triggerClassName }: Props) => {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className={clsx(style.trigger, triggerClassName)}
        onClick={() => setOpenModal(true)}
      >
        {trigger}
      </div>
      <div
        className={clsx(style.overlay, isOpenModal && style.open)}
        onClick={() => setOpenModal(false)}
      >
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  );
};
