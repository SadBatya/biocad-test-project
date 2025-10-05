export interface INavigation {
  menu: INavigationMenu[];
}

export interface INavigationMenu {
  id: number;
  label: string;
  link: string;
}
