import Link from 'next/link'
import Image from 'next/image'

const Partner = () => {
  return (
    <div>
      {/* Become a Partner */}
      <div className="flex w-full flex-col items-center justify-center space-y-5 bg-[#39BDFF] p-5 md:flex-row md:space-y-0 md:space-x-5 lg:py-12">
        <h2 className="text-xl font-black xl:text-2xl">Become a Partner</h2>
        {/* free demo button */}
        <Link href="/demo" passHref>
          <a className="rounded-full bg-black px-7 py-3 text-center font-medium uppercase text-white transition-colors hover:bg-[#303030]">
            Learn More
          </a>
        </Link>
      </div>

      {/* Taxdoo Blog */}
      <div className="">
        <Link href="/blog" passHref>
          <div className="flex items-center justify-center mx-10 my-20 transition-opacity cursor-pointer hover:opacity-80">
            <img
              className="w-full max-w-7xl"
              alt="blog image"
              src="assets/home/Visit-Blog-EN.jpg"
            />
          </div>
        </Link>
      </div>

      {/* Become a Partner */}
      <div className="flex w-full flex-col items-center justify-center space-y-5 bg-[#76EBC0] p-5 md:flex-row md:space-y-0 md:space-x-5 lg:py-12">
        <h2 className="text-xl font-black xl:text-2xl">Book a free demo now</h2>
        {/* free demo button */}
        <Link href="/demo" passHref>
          <a className="rounded-full bg-black px-7 py-3 text-center font-medium uppercase text-white transition-colors hover:bg-[#303030]">
            To Demo
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Partner
