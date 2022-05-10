import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

import { useEffect, useState } from 'react'

const testimonialsData = [
  {
    name: 'Nöel Bollmann & Benjamin Kremer',
    url: 'https://www.yfood.eu',
    linkText: 'www.yfood.eu',
    description:
      'Taxdoo offers the handling of value added tax within the EU from a single source, which is a great support in our daily business. Following the successful registration in various EU-countries, all ongoing VAT returns are submitted automatically. The personal contact with Taxdoo is a huge asset and the dashboard provides a good overview of all tax liabilities – throughout the whole EU. This way, value added tax is fun!',
    path: '/assets/home/test/test-image1.jpg',
  },
  {
    name: 'Christian Strohecker',
    url: 'https://www.wellyou-shop.de',
    linkText: 'www.wellyou-shop.de',
    description:
      'The topic of value added tax in arious EU countries used to cost me an incredible amount of time and nerves. Thanks to Taxdoo, the whole thing is a pice of cake: After I connected my sales channels, all I have to do is pay the VAT amount every month.',
    path: '/assets/home/test/test-image2.jpg',
  },
  {
    name: 'Jan Sapper',
    url: 'https://www.paperlike.de',
    linkText: 'www.paperlike.de',
    description:
      'Taxdoo has reliably registered me for tax purposes in several EU countries without any real effort on my part. All processes were transparent from the beginning and have been running smoothly and efficiently ever since. The team in Hamburg is always available for inquiries and provides a competent service of consistently high quality. I can be sure that my VAT compliance is in good hands!',
    path: '/assets/home/test/test-image3.jpg',
  },
]

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [transitionL, setTransitionL] = useState(false)
  const [transitionR, setTransitionR] = useState(false)

  useEffect(() => {
    if (transitionR) {
      setTransitionR(false)
      // setTimeout(() => {
      //   setTransitionR(false)
      // }, 700)
    }

    if (transitionL) {
      setTransitionL(false)
      setActiveIndex((activeIndex + 1) % testimonialsData.length)
      setNextIndex((nextIndex + 1) % testimonialsData.length)
      // setTimeout(() => {
      //   setTransitionL(false)
      //   setActiveIndex((activeIndex + 1) % testimonialsData.length)
      //   setNextIndex((nextIndex + 1) % testimonialsData.length)
      // }, 700)
    }
  }, [transitionL, transitionR])

  const slideToLeft = () => {
    setTransitionR(true)
    setTransitionL(false)
    console.log('slideToLeft clicked')
    const index = activeIndex - 1
    const index2 = nextIndex - 1

    if (index2 < 0) {
      setNextIndex(testimonialsData.length - 1)
    } else {
      setNextIndex(index2)
    }

    if (index < 0) {
      setActiveIndex(testimonialsData.length - 1)
    } else {
      setActiveIndex(index)
    }
  }

  const slideToRight = () => {
    console.log('slideToRight clicked')
    setTransitionL(true)
    setTransitionR(false)
  }
  return (
    <div className="relative w-full overflow-hidden bg-[#F6F6F6] px-3 py-20 sm:px-10">
      {/* Test slider working on animation */}
      {/* <div className="flex overflow-x-scroll">
        <div
          className={`h-40 w-full shrink-0 translate-x-0  bg-pink-400 ${
            transitionL
              ? '-translate-x-full transform transition duration-300 ease-linear'
              : 'animate-slideToRight'
          }`}
        >
          {testimonialsData[activeIndex].name}
        </div>
        <div
          className={`h-40 w-full shrink-0 translate-x-0 border bg-pink-400 ${
            transitionR
              ? 'translate-x-full transform transition duration-300 ease-linear'
              : 'animate-slideToRight'
          }`}
        >
          {testimonialsData[nextIndex].name}
        </div>
      </div> */}

      {/* Slider */}
      <div className="mx-auto flex h-[900px] w-full max-w-7xl flex-col md:h-[500px] md:flex-row-reverse">
        {/* Arrow to Previous Slider */}
        <div
          onClick={slideToLeft}
          className="absolute left-0 flex items-center justify-center w-16 h-16 -translate-y-1/2 bg-transparent cursor-pointer top-1/2"
        >
          <MdOutlineArrowBackIos className="text-3xl sm:text-4xl" />
        </div>

        {/* Arrow to Next Slider */}
        <div
          onClick={slideToRight}
          className="absolute right-0 flex items-center justify-center w-16 h-16 -translate-y-1/2 bg-transparent cursor-pointer top-1/2"
        >
          <MdOutlineArrowForwardIos className="text-3xl sm:text-4xl" />
        </div>
        {/* Image Section */}
        <div className="p-3 md:flex-1">
          {/* <img src="" alt="image" /> */}
          <div className="w-full">
            <img
              className="object-contain w-full h-auto"
              src={testimonialsData[activeIndex].path}
              alt="image"
            />
          </div>
          <div className="my-3">
            <h6 className="font-black text-md">
              {testimonialsData[activeIndex].name}
            </h6>
            <p className="font-serif text-lg font-light">
              operates the onlineshop{' '}
              <a
                className="underline transition-opacity cursor-pointer hover:opacity-50"
                href={testimonialsData[activeIndex].url}
              >
                {testimonialsData[activeIndex].linkText}
              </a>
            </p>
          </div>
        </div>
        {/* Text Section */}
        <div className=" sm:my-16 md:my-0 md:flex-1">
          <h3 className="my-2 text-xl font-black text-center sm:my-5 md:text-left">
            {testimonialsData[activeIndex].name}
          </h3>
          <p className="h-full font-serif text-lg font-light text-center sm:text-xl md:h-auto md:text-left">
            &ldquo;{testimonialsData[activeIndex].description}&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slider
