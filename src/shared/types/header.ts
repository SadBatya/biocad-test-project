import { type INavigationMenu } from "./navigation";

export interface IHeader {
  logo: {
    text: string;
    link: string;
  };
  menu: INavigationMenu[];
}
