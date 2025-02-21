import { ProductInterface } from "@/types/Product.type"
import { currencyFormatter } from "@/utils/currencyFormatter";
import Image from "next/image";


interface ProductCardProps {
    product: ProductInterface;
  }

const ProductCard = ({product} : ProductCardProps) => {


    return (

        <div
            className=" bg-white shadow-md rounded-2xl overflow-hidden text-center flex flex-col items-center justify-between "
        >

            <h2
                className=" font-bold px-3 pt-3 lg:pt-6 text-lg lg:text-xl "
            >
                {product.title}
            </h2>


            <div
                className=" p-3 lg:p-6 "
            >
                <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={800}
                    className=" w-full "
                    priority
                />
            </div>


            <div
                className={` rounded-2xl p-4 lg:p-8 ${product.category === `men's clothing` ? `bg-mensColor` : `bg-womensColor`}  `}
            >

                <p
                    className=" text-lg lg:text-xl font-bold mb-3 text-priceTextColor "
                >
                    {currencyFormatter(product.price)}
                </p>


                <p
                    className=" line-clamp-3 text-sm leading-6 "
                >
                    {product.description}
                </p>

            </div>

        </div>
    )
}

export default ProductCard