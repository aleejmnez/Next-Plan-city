export interface Event {
    name: string,
    description: string,
    date: string,
    location: string,
    price: number,
    capacity: number,
    categoryId: string,
    images: Array<string>   
}