import Head from 'next/head'

import Footer from './Footer'
import Navbar from './Navbar'

type DashboradLayoutProps = {
  title?: string
  children: React.ReactNode
}

const Layout = ({
  title = 'Taxdoo Demo Website | Coded by Natsuki Yamaguchi',
  children,
}: DashboradLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
