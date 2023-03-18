export interface ICard {
  id: number;
  title: string;
  year: string;
  sortingYear: number;
  denomination: string;
  region: string;
  condition: string;
  material: string;
  weight: string;
  description: string;
  price: number;
  img: {
    obverse: string;
    reverse: string;
  };
}
