import Image from 'next/image'
import Link from 'next/link'

import { aboutData, interfacesData, legalData } from '../data'

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXing,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

export const snsIconsData = [
  {
    iconName: <FaFacebookF />,
    path: '/',
  },
  {
    iconName: <FaLinkedinIn />,
    path: '/',
  },
  {
    iconName: <FaXing />,
    path: '/',
  },
  {
    iconName: <FaInstagram />,
    path: '/',
  },
  {
    iconName: <FaTwitter />,
    path: '/',
  },
]

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="flex flex-col items-center w-screen px-5 mx-auto my-12 space-y-5 text-center max-w-7xl md:flex-row md:items-start md:justify-center md:space-y-0 md:px-8">
      {/* Left section bigger than md-screen */}
      <div className="flex flex-col items-center space-y-12 md:flex-1 md:items-baseline md:justify-between md:self-stretch">
        {/* Heading */}
        <h3 className="text-xl font-black md:my-2 md:text-lg">
          Automated VAT for e-commerce.
        </h3>

        {/* Contact Details */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="my-2 font-black">CONTACT US!</h3>
          <p className="font-medium">+49 40 3688 145-45 (English support)</p>
          <div className="font-serif text-light md:text-left">
            <p>Monday to Friday, 10am to 6pm CET</p>
            <p>E-Mail: sales@taxdoo.com</p>
          </div>
        </div>

        {/* Logo & Address */}
        <div className="md:text-left">
          <div className="relative h-16 w-36 lg:w-40">
            <Image
              src="/assets/home/logo.svg"
              alt="taxdoo logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <div className="font-serif font-light">
            <p>Taxdoo GmbH</p>
            <p>Valentinskamp 70</p>
            <p>20355 Hamburg</p>
          </div>
        </div>

        {/* SNS icons */}
        <div className="flex">
          {snsIconsData.map((data, index) => (
            <Link key={index} href={data.path} passHref>
              <div className="m-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#39BDFF] text-white transition-opacity hover:opacity-50">
                {data.iconName}
              </div>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div>
          <p className="my-3 font-serif font-light md:my-0">
            {' '}
            &copy; {year} Taxdoo GmbH
          </p>
        </div>
      </div>

      {/*  Right section bigger than md-screen */}
      <div className="flex flex-col items-center space-y-12 md:flex-1">
        {/* About + Interfaces + Legal Container for responsiveness */}
        <div className="flex flex-col items-center space-y-12 md:flex-row md:items-start md:justify-between md:space-x-2 md:space-y-0 md:self-stretch">
          {/* About Taxdoo */}
          <div className="md:flex-1 md:text-left">
            <h3 className="my-2 font-black">About Taxdoo</h3>
            <div className="flex flex-col font-medium uppercase">
              {aboutData.map((data) => (
                <Link key={data.name} href={data.path} passHref>
                  <a className="cursor-pointer">{data.name}</a>
                </Link>
              ))}
            </div>
          </div>

          {/* Interfaces */}
          <div className="md:flex-1 md:text-left">
            <h3 className="my-2 font-black">Interfaces</h3>
            <div className="flex flex-col font-medium uppercase">
              {interfacesData.map((data) => (
                <Link key={data.name} href={data.path} passHref>
                  <a className="cursor-pointer">{data.name}</a>
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="md:flex-1 md:text-left">
            <h3 className="my-2 font-black">Legal</h3>
            <div className="flex flex-col font-medium uppercase">
              {legalData.map((data) => (
                <Link key={data.name} href={data.path} passHref>
                  <a className="cursor-pointer">{data.name}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col w-full max-w-lg xl:self-start">
          <h3 className="font-black uppercase">Newsletter</h3>
          <form className="flex flex-col">
            <label className="mt-5 text-left">
              Email<span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="h-10 bg-blue-100 border border-blue-300 rounded-lg"
            />
            <label className="mt-5 text-left">
              Are you an online merchant or tax consultant?
            </label>
            <input
              type="email"
              name="email"
              className="h-10 bg-blue-100 border border-blue-300 rounded-lg"
            />
            <button className="px-6 py-2 mx-auto my-5 text-white transition-opacity bg-black w-min rounded-xl hover:opacity-80">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
