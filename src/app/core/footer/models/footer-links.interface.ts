export interface Links {
    help: Help,
    enterprise: Enterprise,
    social: Social,
    qr: Qr,
}

export interface Help {
    contact: string,
    client: string,
    sizes: string,
    shipping: string,
    giftCard: string,
    ticket: string
}

export interface Enterprise {
    stores: string,
    company: string,
    press: string,
    policies: string,
    cookies: string,
    cookiesSettings: string,
    privacy: string,
}

export interface Social {
    facebook: string,
    instagram: string,
    youtube: string,
    github: string
}

export interface Qr {
    src: string,
}