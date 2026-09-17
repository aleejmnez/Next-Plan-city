export interface Category {
    id:string,
    name:string;
    description?:string;
    date:string; 
    location:string;
    price:number;
    capacity:number;
    images?:string[];
    categoryId:string;
    category?: {
        id:string;
        name:string;
    };

}