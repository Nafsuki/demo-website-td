import Link from 'next/link'
import { providersLogos } from '../data'

const Providers = () => {
  return (
    <div className="w-full px-3 mx-auto my-20 max-w-7xl md:px-8 2xl:px-0">
      <h2 className="my-5 text-xl font-bold text-center uppercase lg:text-2xl">
        THIRD PARTY PROVIDERS
      </h2>

      {/* Providers Card */}
      <div className="lg:grid lg:grid-cols-4 lg:gap-10">
        {providersLogos.map((data) => (
          <div
            key={data.name}
            className="w-4/5 h-24 mx-auto my-8 transition duration-500 bg-white cursor-pointer drop-shadow-2xl hover:scale-110 lg:m-0 lg:w-full"
          >
            <Link href={data.path} passHref>
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={data.imgSrc}
                  alt="logo"
                  className="w-3/4 h-3/5 max-w-fit"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Providers
