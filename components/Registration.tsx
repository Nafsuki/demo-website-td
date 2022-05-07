import Link from 'next/link'

const Registration = () => {
  return (
    <div className="bg-white">
      <h2 className="text-4xl font-black text-center">
        IN 5 MINUTES
        <br /> COMPLIANCE READY FOR EUROPEAN VAT
      </h2>
      <div>
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39BDFF]">
            <span className="text-2xl font-black">1.</span>
          </div>
        </div>
        {/* buy button */}
        <Link href="/" passHref>
          <a className="rounded-full bg-[#39BDFF] px-7 py-2 font-medium uppercase text-black transition-colors hover:bg-[#3FCAFF]">
            free demo
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Registration
