import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './Header'
import Tasks from './Tasks'
import Footer from './Footer'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-800">
      <Head>
        <title>To Do</title>
        <meta name="description" content="A to do app!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Tasks/>
      <Footer/>
    </div>
  )
}

export default Home
