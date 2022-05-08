import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { IoIosArrowDown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

import {
  subNavMenuItems,
  featuresData,
  interfacesData,
  apiMenuData,
} from '../data'

const Navbar = () => {
  const [isFlagClicked, setIsFlagClicked] = useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isFeatureClicked, setIsFeatureClicked] = useState(false)
  const [isInterfacesClicked, setIsInterfacesClicked] = useState(false)
  const [isMobileLanguageClicked, setIsMobileLanguageClicked] = useState(false)
  return (
    <div className="fixed z-40 w-full">
      {/* Sub Navbar on Top */}
      <div className="hidden h-10 w-full bg-[#EEEEEE] xl:flex">
        <div className="flex items-center justify-end w-full mx-auto max-w-7xl">
          <div className="relative flex items-center space-x-8 font-sans text-base font-medium uppercase">
            {subNavMenuItems.map((item) => (
              <Link key={item.name} href={item.path} passHref>
                <a className="transition-opacity hover:opacity-50">
                  {item.name}
                </a>
              </Link>
            ))}
            {/* Language Choices */}
            <div
              className="flex"
              onClick={() => setIsFlagClicked(!isFlagClicked)}
            >
              <Link href="/" locale="en" passHref>
                <a className="flex items-center">
                  <img
                    className="w-5 h-5 m-1"
                    src="/assets/icons/english.svg"
                    alt="english"
                  />
                  EN{' '}
                  <IoIosArrowDown
                    className={
                      isFlagClicked
                        ? 'm-1 -rotate-180 transition duration-500'
                        : 'm-1 rotate-0 transition duration-500'
                    }
                  />
                </a>
              </Link>
            </div>
            <div
              className={
                isFlagClicked
                  ? 'absolute top-8 right-2 z-50 block w-max bg-[#EEEEEE] opacity-100 transition duration-1000'
                  : 'hidden transition-all duration-1000'
              }
            >
              <Link href="/" locale="de" passHref>
                <a className="languageMenu">
                  <img
                    className="w-5 h-5 m-1"
                    src="/assets/icons/german.svg"
                    alt="german"
                  />
                  <span className="pr-2">DE</span>
                </a>
              </Link>
              <Link href="/" locale="fr" passHref>
                <a className="languageMenu ">
                  <img
                    className="w-5 h-5 m-1"
                    src="/assets/icons/french.svg"
                    alt="french"
                  />
                  <span className="pr-2">FR</span>
                </a>
              </Link>
              <Link href="/" locale="it" passHref>
                <a className="languageMenu ">
                  <img
                    className="w-5 h-5 m-1"
                    src="/assets/icons/italian.svg"
                    alt="italian"
                  />
                  <span className="pr-2">IT</span>
                </a>
              </Link>
              <Link href="/" locale="es" passHref>
                <a className="languageMenu ">
                  <img
                    className="w-5 h-5 m-1"
                    src="/assets/icons/spanish.svg"
                    alt="spanish"
                  />
                  <span className="pr-2">ES</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="fixed w-full px-3 bg-white border-b md:px-8">
        <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
          {/* Navbar Logo */}
          <Link href="/" passHref>
            <img
              src="/assets/home/logo.svg"
              alt="taxdoo logo"
              className="h-16 cursor-pointer w-36 lg:w-40"
            />
          </Link>

          {/* Main Nav appearing bigger than xl-screen */}
          <div className="items-center justify-end flex-1 hidden h-16 space-x-5 font-medium uppercase xl:flex">
            <div className="flex items-center justify-center flex-1">
              <Link href="/features" passHref>
                <a className="group flex h-16 items-center p-3 transition duration-300 hover:bg-[#39BDFF]">
                  features
                  <IoIosArrowDown className="m-1 text-xl transition duration-700 group-hover:-rotate-180" />
                  <div className="absolute top-16 left-0 hidden h-20 w-screen bg-[#39BDFF] font-medium transition group-hover:block">
                    <div className="flex items-center justify-center h-full space-x-5">
                      {featuresData.map((data) => (
                        <Link key={data.name} href={data.path} passHref>
                          <a className="transition border-black hover:border-b">
                            {data.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="flex h-16 items-center p-3 transition duration-300 hover:bg-[#39BDFF]">
                  for tax consultants
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="flex h-16 items-center p-3 transition duration-300 hover:bg-[#39BDFF]">
                  for marketplaces
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="group flex h-16 items-center p-3 transition duration-300 hover:bg-[#39BDFF]">
                  interfaces
                  <IoIosArrowDown className="m-1 text-xl transition duration-700 group-hover:-rotate-180" />
                  <div className="absolute top-16 left-0 hidden h-20 w-screen bg-[#39BDFF] font-medium transition group-hover:block">
                    <div className="flex items-center justify-center h-full space-x-5">
                      {interfacesData.map((data) => (
                        <Link key={data.name} href={data.path} passHref>
                          <a className="transition border-black hover:border-b">
                            {data.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="flex h-16 items-center p-3 transition duration-300 hover:bg-[#39BDFF]">
                  topics
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="group flex h-16 items-center p-3 transition duration-300 hover:bg-[#39BDFF]">
                  api
                  <IoIosArrowDown className="m-1 text-xl transition duration-700 group-hover:-rotate-180" />
                  <div className="absolute top-16 left-0 hidden h-20 w-screen bg-[#39BDFF] font-medium transition group-hover:block">
                    <div className="flex items-center justify-center h-full space-x-5">
                      {apiMenuData.map((data) => (
                        <Link key={data.name} href={data.path} passHref>
                          <a className="transition border-black hover:border-b">
                            {data.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex space-x-2">
              {/* buy button */}
              <Link href="/" passHref>
                <a className="rounded-full bg-[#39BDFF] px-7 py-2 font-medium uppercase text-black transition-colors hover:bg-[#3FCAFF]">
                  buy
                </a>
              </Link>
              {/* login button */}
              <Link href="/demo" passHref>
                <a className="rounded-full bg-black px-7 py-2 font-medium uppercase text-white transition-colors hover:bg-[#303030]">
                  login
                </a>
              </Link>
            </div>
          </div>

          {/* Hamburger Menu smaller than xl-screen */}
          <GiHamburgerMenu
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className="text-3xl cursor-pointer xl:hidden"
          />
        </div>
        {isHamburgerOpen && (
          <div className="absolute left-0 w-full px-3 translate-y-0 bg-white h-50 top-16 md:px-8">
            {/* features */}
            <div className="flex items-center justify-between">
              <Link href="/" passHref>
                <a className="uppercase">features</a>
              </Link>
              <div
                onClick={() => setIsFeatureClicked(!isFeatureClicked)}
                className="flex items-center justify-center w-10 h-10 cursor-pointer"
              >
                <IoIosArrowDown
                  className={
                    isFeatureClicked
                      ? '-rotate-180 text-lg transition duration-500'
                      : 'rotate-0 text-lg transition duration-500'
                  }
                />
              </div>
            </div>
            {isFeatureClicked && (
              <div className="grid w-full grid-cols-2 gap-2 px-3 py-2 uppercase bg-gray-100">
                {featuresData.map((data) => (
                  <Link key={data.name} href={data.path} passHref>
                    <a className="font-serif font-light transition text-md hover:opacity-50">
                      {data.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}

            {/* for tax consultantts  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">for tax consultants</a>
              </Link>
            </div>
            {/* for marketplaces  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">for marketplaces</a>
              </Link>
            </div>

            {/* interfaces */}
            <div className="flex items-center justify-between transition duration-300 group">
              <Link href="/features" passHref>
                <a className="uppercase">interfaces</a>
              </Link>
              <div
                onClick={() => setIsInterfacesClicked(!isInterfacesClicked)}
                className="flex items-center justify-center w-10 h-10 cursor-pointer"
              >
                <IoIosArrowDown
                  className={
                    isInterfacesClicked
                      ? '-rotate-180 text-lg transition duration-500'
                      : 'rotate-0 text-lg transition duration-500'
                  }
                />
              </div>
            </div>

            {isInterfacesClicked && (
              <div className="grid w-full grid-cols-2 gap-2 px-3 py-2 uppercase bg-gray-100">
                {interfacesData.map((data) => (
                  <Link key={data.name} href={data.path} passHref>
                    <a className="font-serif font-light transition text-md hover:opacity-50">
                      {data.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}

            {/* topics  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">topics</a>
              </Link>
            </div>

            {/* api  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">api</a>
              </Link>
            </div>
            {/* home  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">home</a>
              </Link>
            </div>
            {/* taxdoo blog  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">taxdoo blog</a>
              </Link>
            </div>
            {/* jobs  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">jobs</a>
              </Link>
            </div>
            {/* contact  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">contact</a>
              </Link>
            </div>
            {/* price  */}
            <div className="py-2">
              <Link href="/" passHref>
                <a className="uppercase">price</a>
              </Link>
            </div>
            {/* Language Choices */}
            <div
              className="flex py-2 mb-2"
              onClick={() =>
                setIsMobileLanguageClicked(!isMobileLanguageClicked)
              }
            >
              <Link href="/" locale="en" passHref>
                <a className="flex items-center">
                  <img
                    className="w-5 h-5 m-1"
                    src="/assets/icons/english.svg"
                    alt="english"
                  />
                  EN{' '}
                  <IoIosArrowDown
                    className={
                      isMobileLanguageClicked
                        ? 'm-1 -rotate-180 transition duration-500'
                        : 'm-1 rotate-0 transition duration-500'
                    }
                  />
                </a>
              </Link>
            </div>
            {isMobileLanguageClicked && (
              <div className="-ml-2 bg-white">
                <Link href="/" locale="de" passHref>
                  <a className="languageMenu">
                    <img
                      className="w-5 h-5 m-1"
                      src="/assets/icons/german.svg"
                      alt="german"
                    />
                    <span className="">DE</span>
                  </a>
                </Link>
                <Link href="/" locale="fr" passHref>
                  <a className="languageMenu ">
                    <img
                      className="w-5 h-5 m-1"
                      src="/assets/icons/french.svg"
                      alt="french"
                    />
                    <span className="pr-2">FR</span>
                  </a>
                </Link>
                <Link href="/" locale="it" passHref>
                  <a className="languageMenu ">
                    <img
                      className="w-5 h-5 m-1"
                      src="/assets/icons/italian.svg"
                      alt="italian"
                    />
                    <span className="pr-2">IT</span>
                  </a>
                </Link>
                <Link href="/" locale="es" passHref>
                  <a className="languageMenu ">
                    <img
                      className="w-5 h-5 m-1"
                      src="/assets/icons/spanish.svg"
                      alt="spanish"
                    />
                    <span className="pr-2">ES</span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
