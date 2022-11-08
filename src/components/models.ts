export interface productProps {
    id: number
    image_url: string
    name: string,
    price: number,
    brand?: string,
    description?: string,
    status?: string,
    weight?: number,
    width?: number,
    height?: number
}

export interface products {
    products: productProps[],
    loading?: boolean
}

export interface PaginationProps {
    itemsPerPage: number,
    totalItems: number,
    paginate: (pageNumber: number) => void
}