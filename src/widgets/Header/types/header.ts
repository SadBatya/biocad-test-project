export interface IHeader {
  logo: {
    text: string;
    link: string;
  };
  menu: {
    id: number;
    label: string;
    link: string;
  }[];
}