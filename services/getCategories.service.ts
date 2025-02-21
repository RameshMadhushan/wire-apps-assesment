
export const getCategories = async () => {



    try {

        const response = await fetch(`https://fakestoreapi.com/products/categories`, {
            next: {
                revalidate: 1 * 60 * 60
            }
        });


        const _categories : string[] = await response.json();


        //in order to filter out the mens and women clothing category shown in the figma file
        return _categories.filter(cat => cat === `men's clothing` || cat ===  `women's clothing`);


    } catch (error) {
        console.error(`Failed to get categories`, error)
        throw error;
    }

}