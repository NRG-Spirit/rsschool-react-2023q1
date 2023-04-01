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
  obverse?: FileList;
  reverse?: FileList;
  age?: string;
  policy?: boolean;
}
