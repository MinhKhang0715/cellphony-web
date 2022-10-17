export interface productProps {
    id: number
    imageURL: string
    name: string,
    price: number
}

export interface products {
    products: productProps[]
}