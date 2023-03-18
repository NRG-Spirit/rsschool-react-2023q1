export interface ICard {
  id: string;
  title: string;
  year: string;
  sortingYear: number;
  denomination: string;
  region: string;
  condition:
    | 'PF'
    | 'PL'
    | 'BU'
    | 'UNC'
    | 'AU+'
    | 'AU'
    | 'XF+'
    | 'XF'
    | 'VF+'
    | 'VF'
    | 'F'
    | 'VG'
    | 'G'
    | 'AG'
    | 'FA'
    | 'PR';
  material: string;
  weight: string;
  description: string;
  price: number;
  img: {
    obverse: string;
    reverse: string;
  };
}
