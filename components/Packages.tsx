import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { packageData } from '../data'

const Packages = () => {
  return (
    <div className="w-full px-3 mx-auto max-w-7xl md:px-8 xl:px-0">
      <h2 className="mb-5 text-2xl font-medium text-center md:text-3xl xl:text-4xl">
        Choose your package
      </h2>

      <div className="flex flex-col text-[#1E3C69] md:flex-row md:space-x-2 xl:space-x-8">
        {/* Card */}
        {packageData.map((data) => (
          <div
            key={data.name}
            className="my-5 overflow-hidden shadow-lg rounded-2xl md:flex-1 md:shadow-md"
          >
            <div className="flex flex-col items-center justify-center space-y-5 bg-[#EBF5FF] p-8 md:h-64 md:space-y-3 md:p-5 xl:h-60 xl:p-10">
              <h3 className="text-3xl font-bold">{data.name}</h3>
              <h2 className="text-3xl font-medium">{data.price}</h2>
              <p className="font-medium text-[#8D8F91] md:flex md:h-12 md:items-center md:text-center xl:h-auto xl:py-1">
                {data.details}
              </p>
              <Link href="/booking">
                <a
                  href="/booking"
                  className="w-full rounded bg-[#34AFE6] py-2 text-center font-bold text-white transition hover:bg-blue-800 xl:py-3"
                >
                  choose
                </a>
              </Link>
            </div>

            <div className="p-8 bg-white">
              {data.sellingPoints.map((point, index) => (
                <p
                  key={index}
                  className="flex items-center my-3 font-serif text-lg font-light"
                >
                  <BsCheckLg className="mx-2 my-1 text-[#34AFE6]" />
                  {point}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Packages
