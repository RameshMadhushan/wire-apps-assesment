import { ProductInterface } from "@/types/Product.type";

export const getFlashRowProducts = async (limit:number) => {



    try {

        const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`, {
            next: {
                revalidate: 1 * 60 * 60
            }
        });

        const products = await response.json();


        /* The fakestore api dosnet have and sort by date option so i have use id to sort to the products assumong higher id is latest product */
        const sortedByDate = products.sort((a:ProductInterface, b:ProductInterface) => b.id - a.id)

        return sortedByDate
        
    } catch (error) {
        console.error(`Failed to get products`, error)
        throw error;
    }

}