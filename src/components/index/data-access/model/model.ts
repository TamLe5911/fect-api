export interface IInfos {
  minPrice: IMinPrice;
  topProducts: IProduct[];
  index: number;
};
type IMinPrice = {
  currency: string;
  price: number;
  priceContent: string;
};
export interface IProduct  {
  areaId: number;
  image: string;
  imageFill: string;
  title: string;
  countries: ICountry[];
};
export interface ICountry  {
  areaId: number;
  code: string;
  countryId: number;
  currency: string;
  description: string;
  flagCountry: string;
  image: string;
  imageJuris: string;
  itemBrand: string;
  itemCategory: string;
  itemCategory2: string;
  itemId: string;
  itemVariant: number;
  name: string;
  orService: string;
  pageId: number;
  price: number;
  priceContent: string;
};

