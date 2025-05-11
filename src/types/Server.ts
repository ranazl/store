export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: RatingProduct
  }
  
  export interface RatingProduct {
    rate: number
    count: number
  }