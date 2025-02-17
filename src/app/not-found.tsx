import Link from "next/link";


const NotFound = () => {
    return (
        <div className="w-full  h-[calc(100dvh-50px)] bg-zinc-200 relative">
            <div className="container flex flex-col items-center justify-center w-full h-full">
                <h1 className="text-4xl md:text-5xl font-semibold md:font-bold text-center">Something went wrong.<br/>
                    Please try again.
                </h1>

                <Link href={'/'}
                      className="mt-5 bg-black text-white py-3 px-5 text-sm rounded-md hover:bg-black/80 hoverEffect capitalize">Back
                    to
                    homepage
                </Link>
            </div>
        </div>
    )
};

export default NotFound;