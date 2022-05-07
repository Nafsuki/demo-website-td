import { BsCheckLg } from 'react-icons/bs'
import Link from 'next/link'

const highlights = [
  `Automated integration of sales data from marketplaces as well as shop and ERP systems`,
  `Automated VAT data preparation for the entire EU`,
  `DATEV export for the efficient handling of financial accounting`,
  `On request: Submission of VAT returns in all EU countries`,
  `On request: VAT registration in all EU countries`,
  `Pro forma invoices to document the movements of goods`,
]

const Hightlights = () => {
  return (
    <div className="w-full px-3 mx-auto my-20 max-w-7xl md:px-8 xl:px-0">
      <div className="p-10 shadow-2xl">
        <h3 className="mb-16 text-2xl font-bold text-center">Highlights:</h3>
        <div className="md:grid md:grid-cols-2 md:gap-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center my-3 font-serif text-lg font-light md:m-0 md:items-start"
            >
              <BsCheckLg className="m-1 w-6 text-[#34AFE6] md:m-2" />
              <span className="flex-1 w-32">{highlight}</span>
            </div>
          ))}
        </div>
        <p className="my-10 text-xl font-bold text-center">
          Automate your VAT compliance today!
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col w-full space-y-5 md:flex-row md:justify-center md:space-y-0 md:space-x-5">
          {/* free demo button */}
          <Link href="/demo" passHref>
            <a className="rounded-full bg-black px-7 py-2 text-center font-medium uppercase text-white transition-colors hover:bg-[#303030] md:px-16">
              Free Demo
            </a>
          </Link>
          {/* buy taxdoo button */}
          <Link href="/" passHref>
            <a className="rounded-full bg-[#39BDFF] px-7 py-2 text-center font-medium uppercase text-black transition-colors hover:bg-[#3FCAFF] md:px-16">
              Buy Taxdoo
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hightlights
