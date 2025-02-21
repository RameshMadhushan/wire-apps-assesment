
import ProductCard from '@/components/common/ProductCard'
import { getProductsByCategory } from '@/services/getProductsByCategory.service';
import { ProductInterface } from '@/types/Product.type'
import React from 'react'




export async function generateMetadata({params} : {params : Promise<{category : string}>} ) {

    const {category} =  await params
    return {
      title: category,
      description : `Modern Walk has the best ${category} products`,
      robots : 'index,follow',
    };
}

  

const CategoryPage = async({params} : {params : Promise<{category : string}>} ) => {

    const {category} =  await params

    const products:ProductInterface[] = await getProductsByCategory(category.replaceAll("-", " "))



    return (

        <main
            className=' px-3 lg:px-12 py-6 lg:py-12  '
        >
            
            <h1
                className=' capitalize font-bold text-lg lg:text-2xl '
            >
                {category?.replaceAll("-", " ")}
            </h1>


            <div
                className=' mt-6 lg:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10 '
            >


                {
                    (products && products.length) ? (
                        <>
                            {
                                products.map((product: ProductInterface) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            }

                        </>
                        
                    ) : (
                        <div
                            className=" px-3 py-24 text-center col-span-2 md:col-span-3 lg:col-span-4 "
                        >

                            <p>
                                Ooops... No products found
                            </p>
                        
                        </div>
                    )
                }


            </div>

        </main>

    )
}

export default CategoryPage