import Link from 'next/link'

const registrationSteps = [
  {
    id: '1.',
    name: 'REGISTRATION',
    details:
      'Register with Taxdoo and connect your VAT channels or your ERP / WaWi system in just a few minutes.',
    imgSrc: '/assets/home/icons/comp-1.svg',
  },
  {
    id: '2.',
    name: 'DATA IMPORT',
    details:
      'Taxdoo automatically imports all data relevant to VAT and determines which EU countries you have been subject to VAT, since when you have been subject to VAT and for what reason.',
    imgSrc: '/assets/home/icons/comp-2.svg',
  },
  {
    id: '3.',
    name: 'REGISTER ABROAD',
    details:
      'If desired, we will start the process of registering VAT in other EU countries. We then submit your VAT returns on a monthly or quarterly basis.',
    imgSrc: '/assets/home/icons/comp-3.svg',
  },
  {
    id: '4.',
    name: 'FREE EXPERT ADVICE',
    details:
      'Book your personal free onboarding. An expert will guide you through our sales tax dashboard and discuss the status quo and the next steps.',
    imgSrc: '/assets/home/icons/comp-4.svg',
  },
]

const Registration = () => {
  return (
    <div className="w-full max-w-3xl px-3 mx-auto mb-10 bg-white md:px-8 xl:px-0">
      {/* Section Header */}
      <h2 className="text-3xl font-black text-center md:mb-16">
        IN 5 MINUTES
        <br /> COMPLIANCE READY FOR EUROPEAN VAT
      </h2>

      {/* Registration steps 1 to 4 */}
      <div>
        {registrationSteps.map((step) => (
          <div key={step.id} className="my-5 md:flex">
            {/* icon */}
            <div className="flex justify-center my-5 md:mx-5">
              <img className="" src={step.imgSrc} alt="icon" />
            </div>

            <div className="md:flex-1">
              {/* step name */}
              <div className="flex items-center justify-center space-x-2 md:justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39BDFF]">
                  <span className="text-2xl font-bold">{step.id}</span>
                </div>
                <h3 className="text-xl font-black uppercase">{step.name}</h3>
              </div>

              {/* step details */}
              <div className="flex">
                <p className="px-10 py-3 font-serif text-lg text-center md:mx-5 md:my-5 md:border-l-4 md:border-black md:px-6 md:text-left">
                  {step.details}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Call to Action button */}
        <div className="flex justify-center my-10">
          <Link href="/demo" passHref>
            <a className="rounded-full bg-[#39BDFF] px-7 py-2 font-medium uppercase text-black transition-colors hover:bg-[#3FCAFF] md:py-3">
              free demo
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Registration
