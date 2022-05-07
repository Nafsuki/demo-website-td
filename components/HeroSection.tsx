import Link from 'next/link'
import Image from 'next/image'

const YOUTUBE_VIDEO_API = 'https://www.googleapis.com/youtube/v3/playlistItems'

export async function getServerSideProps() {
  const res = await fetch(YOUTUBE_VIDEO_API)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

const HeroSection = ({ data }: any) => {
  return (
    <div className="w-full px-3 mx-auto max-w-7xl md:px-8 xl:px-0">
      {/* Empty div to keep the distance from the top not to be hidden by the navbar */}
      <div className="h-16 xl:h-24"></div>
      <div className="my-12 lg:my-32 xl:my-48">
        <div className="lg:flex lg:space-x-8 ">
          {/* Hero Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold lg:text-5xl">
              Automated value added
              <br className="" /> tax for e-commerce
            </h1>
            <p className="my-5 font-serif text-2xl font-light lg:pr-10">
              From retailers to listed companies: The complete package for
              online retailers of all sizes on Amazon, eBay & Co.
            </p>

            {/* Call to Action Buttons */}
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-5">
              {/* free demo button */}
              <Link href="/demo" passHref>
                <a className="rounded-full bg-black px-7 py-2 text-center font-medium uppercase text-white transition-colors hover:bg-[#303030]">
                  Free Demo
                </a>
              </Link>
              {/* buy taxdoo button */}
              <Link href="/" passHref>
                <a className="rounded-full bg-[#39BDFF] px-7 py-2 text-center font-medium uppercase text-black transition-colors hover:bg-[#3FCAFF]">
                  Buy Taxdoo
                </a>
              </Link>
            </div>
          </div>

          {/* YouTube video */}
          <div className="w-full my-10 bg-gray-300 h-96 lg:h-52"></div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col w-full space-y-5 lg:hidden">
          {/* free demo button */}
          <Link href="/demo" passHref>
            <a className="rounded-full bg-black px-7 py-2 text-center font-medium uppercase text-white transition-colors hover:bg-[#303030]">
              Free Demo
            </a>
          </Link>
          {/* buy taxdoo button */}
          <Link href="/" passHref>
            <a className="rounded-full bg-[#39BDFF] px-7 py-2 text-center font-medium uppercase text-black transition-colors hover:bg-[#3FCAFF]">
              Buy Taxdoo
            </a>
          </Link>
        </div>

        {/* Skyline Image */}
        <div className="relative w-full h-32 my-10 sm:h-48 lg:h-96">
          <Image
            src="/assets/home/td-skyline.svg"
            alt="skyline image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
      {/* retailers */}
      <div className="w-full px-3 mx-auto my-32 max-w-7xl md:px-8 lg:px-0">
        <h2 className="text-lg font-medium text-center lg:text-2xl">
          Some of the most successful retailers trust Taxdoo
        </h2>
        {/* retailers img */}
        <div className="relative w-full h-32 my-10 lg:h-88 sm:h-48">
          <Image
            src="/assets/home/logolist-768x111.webp"
            alt="retailers img"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
