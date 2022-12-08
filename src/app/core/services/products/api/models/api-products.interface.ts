export interface ApiCategories {
    categories: ApiCategoriesElement[];
}

export interface ApiCategoriesElement {
    id: number,
    name: string,
    nameEn: string,
    shortDescription: null,
    description: null,
    keywords: null,
    key: string,
    numberOfProducts: number,
    type: string,
    viewCategoryId: number,
    subcategories: ApiCategoriesSubcategories[],
    attachments: ApiCategoriesAttachments[],
    sequence: number,
    oldsIds: number[],
}

export interface ApiCategoriesSubcategories {
    id: number,
    name: string,
    nameEn: string,
    shortDescription: null,
    description: null,
    keywords: null,
    key: string,
    numberOfProducts: number,
    type: string,
    viewCategoryId: number,
    subcategories: ApiCategoriesSubcategories[],
    attachments: ApiCategoriesAttachments[],
    sequence: number,
    oldsIds: number[],
}

export interface ApiCategoriesAttachments {
    id: string,
    name: string,
    path: string,
    type: string
}

export interface ApiList {
    gridElements: GridElements[],
    products: ApiProducts[],
    rueiData: RueiData[]
}

export interface GridElements {
    id: string,
    template: string,
    ccIds: number[],
    type: string,
    hiddenFields: unknown

}

export interface RueiData {
    StoreLangRUEI: string,
    StoreTypeRUEI: string,
    OperationTypeRUEI: string,
    OperationRUEI: string,
    StoreIdRUEI: string
}

export interface ApiProducts {
    id: number,
    type: string,
    name: string,
    nameEn: string,
    image: unknown,
    isBuyable: boolean,
    onSpecial: boolean,
    backSoon: null,
    unitsLot: number,
    isTop: number,
    sizeSystem: string,
    subFamily: string,
    productType: string,
    bundleColors: ApiBundleColors,
    tags: unknown,
    attributes: ApiAttributes,
    relatedCategories: ApiRelatedCategories,
    attachments: unknown,
    bundleProductSummaries: ApiBundleProductsSummaries,
    detail: ApiDetail,
}

export interface ApiBundleColors {
    id: number,
    name: string,
    image: null,
    colorName: null,
    relatedCategories: ApiRelatedCategories,
    modelName: null
}


export interface ApiAttributes {
    id: string,
    name: string,
    value: string,
    type: string,
    shortDescription: string,
    longDescription: string,
}

export interface ApiRelatedCategories {
    id: number,
    identifier: string,
    name: string,
    urlCategory: boolean,
}


export interface ApiBundleProductsSummaries {
    id: number,
    type: string,
    name: string,
    nameEn: string,
    image: unknown,
    isBuyable: boolean,
    onSpecial: boolean,
    backSoon: null,
    unitsLot: number,
    isTop: number,
    sizeSystem: string,
    subFamily: string,
    productType: String,
    bundleColors: ApiBundleColors,
    tags: unknown,
    attributes: ApiAttributes,
    relatedCategories: ApiRelatedCategories,
    attachments: unknown,
    bundleProductSummaries: ApiBundleProductsSummaries,
    detail: ApiDetail,
    field5: string,
    sequence: string,
    section: string,
    family: string,
    sectionName: string,
    sectionNameEN: string,
    startDate: string,
    isSales: null,
    keywords: string,
    mainColorId: string,
    familyCode: null,
    subFamilyCode: null,
    productUrl: string,
    productUrlParam: string,
    gridElemType: string,
    availabilityDate: string,
    visibilityValue: string,
}

export interface ApiDetail {
    description: null,
    longDescription: string,
    additionalInfo: string,
    reference: string,
    displayReference: string,
    isSport: boolean, 
    defaultImageType: string,
    composition: unknown,
    compositionByZone: unknown,
    care: unknown,
    colors: ApiColors,
    relatedProducts: ApiRelatedProducts,
    xmediaDefaultSet: null,
    xmedia: ApiXMedia,
    skuDimensions: Object,
    dimensions: Object,
    familyInfo: ApiFamilyInfo,
    subfamilyInfo: ApiSubfamilyInfo,
    isJoinLife: boolean,
    compositionDetail: null
}

export interface ApiColors {
    id: number,
    name: string,
    modelHeigh: null,
    modelName: null,
    modelSize: null,
    image: ApiColorsImage,
    sizes: ApiColorSizes,
    isContinuity: boolean,
    joinLifeInfo: ApiJoinLifeInfo,
    compositionDetail: null,
    colFilter: unknown
}

export interface ApiXMedia {
    path: string,
    xmediaItems: ApiXMediaItems,
}

export interface ApiXMediaItems {
    medias: ApiMedias,
    set: number,
    colorCode: string,
    xmediaLocations: ApiXMediaLocations
}

export interface ApiXMediaLocations {
    locations: ApiLocations,
    set: number
}

export interface ApiLocations {
    mediaLocations: string[],
    location: number
}

export interface ApiMedias {
    format: number,
    clazz: number,
    idMedia: string,
    extraInfo: ApiExtraInfo,
    timestamp: number,
}

export interface ApiExtraInfo {
    vimeo: ApiVimeo
}

export interface ApiVimeo {
    size: number,
    url: string,
    id: string
}

export interface ApiColorsImage {
    timestamp: string,
    url: string,
    aux: string[],
    type: string[],
    style: string[],
    availableEstilisimo: boolean,
}

export interface ApiColorSizes {
    sku: number,
    name: string,
    description: null,
    partnumber: string,
    isBuyable: boolean,
    backSoon: string,
    mastersSizeId: string,
    position: number,
    price: string,
    oldPrice: null,
    sizeType: string,
    visibilityValue: string,
}

export interface ApiJoinLifeInfo {
    descJoinLife: string,
    isJoinLife: boolean,
    joinLifeId: string,
    shortDescJoinLife: string
}

export interface ApiRelatedProducts {
    id: number,
    image: unknown,
    name: string,
    nameEN: string,
    isBuyable: boolean,
    type: string,
    sequence: string,
    section: string,
    relationType: string,
    relatedCategories: ApiRelatedCategories
    detail: ApiDetailOfRelatedProducts,
    bundleProductSummaries: ApiBundleProductsSummaries,
    colors: ApiColors,
    family: string,
    subFamily: string,
    productUrl: string,
}

export interface ApiFamilyInfo {
    familyId: number,
    familyCode: number,
    familyName: null
}

export interface ApiSubfamilyInfo {
    subFamilyId: number,
    subFamilyCode: number,
    subFamilyName: null
}

export interface ApiDetailOfRelatedProducts {
    reference: string,
    colors: ApiColors,
    isJoinLife: boolean,
}