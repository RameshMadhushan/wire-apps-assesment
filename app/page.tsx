import CategoryTile from "@/components/home/CategoryTile"
import FlashRow from "@/components/home/FlashRow";
import { getCategories } from "@/services/getCategories.service"
import { getFlashRowProducts } from "@/services/getFlashRowProducts.service";
import { ProductInterface } from "@/types/Product.type";




export async function generateMetadata() {
    return {
      title: "Home - Modern Walk",
      description : `Modern Walk has the best products`,
      robots : 'index,follow',
    };
}

  

const HomePage = async() => {


    const flashRowProductLimit = 4

    const [categories, flashRowProducts] : [string[], ProductInterface[]] = await Promise.all([getCategories(), getFlashRowProducts(flashRowProductLimit)])


    return (

        <main
            className="px-3 lg:px-12 py-6 lg:py-12 "
        >


            <FlashRow 
                products={flashRowProducts}
            />




            <section
                className=" mt-6 lg:mt-12 "
            >

                    
                <h2
                    className='  text-lg lg:text-2xl font-semibold'
                >
                    Categories
                </h2>


                <div
                    className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-6"
                >

                    {
                        categories?.map((category:string) => (

                            <CategoryTile 
                                key={category} 
                                category={category}
                            />
                        ))
                    }


                </div>


            </section>


        </main>
    )
}

export default HomePage