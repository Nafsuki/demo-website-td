import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/HeroSection'
import Layout from '../components/Layout'
import Packages from '../components/Packages'
import Interfaces from '../components/Interfaces'
import Providers from '../components/Providers'
import Hightlights from '../components/Hightlights'
import Form from '../components/Form'
import Partner from '../components/Partner'
import Slider from '../components/Slider'
import Registration from '../components/Registration'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <Packages />
      <Interfaces />
      <Providers />
      <Hightlights />
      <Form />
      <Registration />
      {/* <Slider /> */}
      <Partner />
    </Layout>
  )
}

export default Home
