import Link from "next/link"


const Header = () => {
    return (
        <div
            className=" sticky top-0 left-0 p-5 bg-white border-b-2 border-e-gray-200 w-full text-center "
        >

            <Link
                href="/"
                className=" font-bold text-2xl lg:text-4xl "
            >

                Modern Walk
            
            </Link>

        </div>
    )
}

export default Header