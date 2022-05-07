import Link from 'next/link'
import { interfaceLogos } from '../data'

const Interfaces = () => {
  return (
    <div className="w-full px-3 mx-auto my-12 max-w-7xl md:px-8 2xl:px-0">
      <h2 className="my-5 text-xl font-bold text-center uppercase lg:text-2xl">
        AVAILABLE INTERFACES
      </h2>

      {/* Interface Card */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        {interfaceLogos.map((data) => (
          <div
            key={data.name}
            className="w-4/5 h-24 mx-auto my-8 transition duration-500 bg-white cursor-pointer drop-shadow-2xl hover:scale-110 lg:m-0 lg:w-full"
          >
            <Link href={data.path} passHref>
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={data.imgSrc}
                  alt="logo"
                  className="w-3/4 h-3/4 max-w-fit"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Interfaces
