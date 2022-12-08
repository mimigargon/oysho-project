export interface Categories {
    categories: CategoriesElements
}

export interface CategoriesElements {
    id: number
}

export interface Products {
    id: number,
    name: string,
    nameEn: string,
    image: unknown,
    longDescription: string,
    price: string
}