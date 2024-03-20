export interface Recipe {
    id?:number;
    title?:string;
    prepTime?:string;
    cookTime?:string;
    servings?:number;
    ingredients?:string[];
    steps?:string[];
    imageUrl?:string;
    price?:number;
    quantity?:number;
    total:number;
}
