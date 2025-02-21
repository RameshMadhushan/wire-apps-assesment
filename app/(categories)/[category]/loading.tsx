
const loading = () => {
  return (
    <div
        className="px-3 lg:px-12 py-6 lg:py-12 "
    >

        <div 
            className=" h-8 w-full max-w-xs bg-gray-200 animate-pulse "
        />


        <div
            className=' mt-6 lg:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-10 '
        >

            <div className=" w-full aspect-[1/1.3] bg-gray-200 " />
            <div className=" w-full aspect-[1/1.3] bg-gray-200 " />
            <div className=" w-full aspect-[1/1.3] bg-gray-200 " />
            <div className=" w-full aspect-[1/1.3] bg-gray-200 " />
            

        </div>

    </div>
  )
}

export default loading