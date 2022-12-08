export interface Categories {
    categories: CategoriesElements
}

export interface CategoriesElements {
    id: number,
    name: string,
    nameEn: string,
    description: null,
}

export interface Products {
    id: number,
    name: string,
    nameEn: string,
    image: string[],
    longDescription: string,
    price: string[];
}

export const enum ImageSize {
    fullSize = 1,
    extraLarge = 2,
    large = 3,
    medium = 4,
    small = 5,

}

export const enum ImageKind {
    modelZoom = 1,
    modelFront = 2,
    color = 3,
    productFront = 4,
    productBack = 5,
    modelBack = 6,
}

export interface ImageUrlOptions {
    kind?: ImageKind;
    size?: ImageSize;
}