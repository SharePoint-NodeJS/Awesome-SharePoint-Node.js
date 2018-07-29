export interface ILib {
  package?: string | 'n/a';
  name: string;
  url: string;
  description: string;
  categories: number[];
}

export interface IData {
  categories: string[];
  libs: ILib[];
}
