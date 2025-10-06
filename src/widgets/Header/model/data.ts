import { type IHeader } from "@/shared/types";

export const navigation: IHeader = {
  logo: { text: "Revmo.info app", link: "/" },
  menu: [
    { id: 1, label: "Назад к сайту", link: "/" },
    { id: 2, label: "О приложении", link: "/" },
    { id: 3, label: "Возможности", link: "/" },
    { id: 4, label: "Общение", link: "/" },
    { id: 5, label: "Отзывы", link: "/" },
  ],
};
