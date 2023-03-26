export interface ICard {
  id: number;
  title: string;
  year: string;
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
