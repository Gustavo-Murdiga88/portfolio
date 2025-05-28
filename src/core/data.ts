export interface IData {
  equipments: {
    name: string;
    link: string;
    img: string;
    height: number;
    width: number;
  }[];
  time_line: {
    company: string;
    date: string;
    title: string;
    url: string;
    description: string;
  };
}
