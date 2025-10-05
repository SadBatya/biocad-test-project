import { type INavigationMenu } from "@/shared/types";

export interface IHeader {
  logo: {
    text: string;
    link: string;
  };
  menu: INavigationMenu[];
}
