import { ProductInterface } from '@/types/Product.type'
import React from 'react'
import ProductCard from '../common/ProductCard'

interface ComponentProps{
    products : ProductInterface[]
}

const FlashRow = ({products} : ComponentProps) => {

    
    

    return (

        <div>
            
            <h2
                className='  text-lg lg:text-2xl font-semibold'
            >
                Flash Sale
            </h2>


            <div
                className=' mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10 '
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
                        <></>
                    )
                }

            </div>

        </div>

    )
}

export default FlashRow