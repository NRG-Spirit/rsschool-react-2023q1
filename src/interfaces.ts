export interface IFormData {
  id?: number;
  title?: string;
  author?: string;
  category?: string;
  smallThumbnail?: FileList;
  thumbnail?: FileList;
  publishedDate?: string;
  kind?: string;
  description?: string;
  language?: string;
  pageCount?: number;
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
    listPrice: {
      amount: number;
      currencyCode: string;
    };
  };
  searchinfo?: {
    textSnippet?: string;
  };
  selflink?: string;
  volumeInfo: {
    allowanonlogging?: boolean;
    authors: string[];
    averageRating?: number;
    canonicalvolumelink?: string;
    categories?: string[];
    contentversion?: string;
    description?: string;
    dimensions?: {
      height?: string;
      width?: string;
      thickness?: string;
    };
    imageLinks: {
      smallThumbnail: string | undefined;
      thumbnail: string | undefined;
      small?: string;
      medium?: string;
      large?: string;
      extraLarge?: string;
    };
    industryidentifiers?: IIndustryidentifiers[];

    infolink?: string;
    language?: string;
    mainCategory?: string;
    maturityRating?: string;
    pageCount: number;
    panelizationSummary?: {
      containsepubbubbles?: boolean;
      containsImageBubbles?: boolean;
    };
    previewlink?: string;
    printtype?: string;
    publisher?: string;
    publishedDate: string;
    readingModes?: {
      image?: string;
      text?: string;
    };
    title: string;
  };
}

interface IIndustryidentifiers {
  type?: string;
  identifier?: string;
}

export interface IBooksResponse {
  kind: string;
  items: IBook[];
  totalItems: number;
}
