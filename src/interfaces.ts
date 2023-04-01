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

export interface IFormData {
  id?: number;
  title?: string;
  year?: string;
  denomination?: string;
  region?: string;
  condition?: string;
  material?: string;
  weight?: string;
  description?: string;
  price?: number;
  obverse?: string;
  reverse?: string;
  age?: string;
  policy?: boolean;
}
