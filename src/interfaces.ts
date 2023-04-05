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

export interface IBook {
  accessInfo?: {
    accessviewstatus?: string;
    country?: string;
    embeddable?: boolean;
    epub?: {
      isAvailable?: boolean;
    };
    pdf?: {
      isAvailable?: boolean;
    };
    publicDomain?: boolean;
    quoteSharingAllowed?: boolean;
    textToSpeechPermission?: string;
    viewability?: string;
    webReaderLink?: string;
  };
  etag?: string;
  id: string;
  kind?: string;
  saleinfo?: {
    country?: string;
    isEbook?: boolean;
    saleability?: string;
  };
  searchinfo?: {
    textSnippet?: string;
  };
  selflink?: string;
  volumeInfo: {
    allowanonlogging?: boolean;
    authors: string[];
    canonicalvolumelink?: string;
    categories: string[];
    contentversion?: string;
    imageLinks: {
      smallThumbnail: string | undefined;
      thumbnail: string | undefined;
    };
    industryidentifiers?: IIndustryidentifiers[];

    infolink?: string;
    language?: string;
    maturityRating: string;
    panelizationSummary?: {
      containsepubbubbles?: boolean;
      containsImageBubbles?: boolean;
    };
    previewlink?: string;
    printtype?: string;
    publishedDate: string;
    readingModes?: {
      image?: string;
      text?: string;
    };
    title: string[];
  };
}

interface IIndustryidentifiers {
  type?: string;
  identifier?: string;
}

export interface IBooksResponce {
  kind: string;
  items: IBook[];
  totalItems: number;
}
