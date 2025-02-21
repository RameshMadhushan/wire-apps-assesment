import Link from "next/link"

const CategoryTile = ({category}: {category: string}) => {
    
    return (

        <Link
            href={`/${category.replaceAll(" ", "-")}`}
            className={`px-6 lg:px-12 py-12 lg:py-24 shadow-md rounded-2xl ${category === `men's clothing` ? 'bg-mensColor' : 'bg-womensColor'}`}
        >

            <h2
                className=" text-center text-xl lg:text-3xl font-semibold capitalize "
            >
                {category}
            </h2>


        </Link>
    )
}

export default CategoryTile