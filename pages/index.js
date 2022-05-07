import Head from 'next/head'
import NavBar from '../components/NavBar'
import Hero from '../components/sections/Hero'
import LandingInfo from '../components/sections/LandingInfo'
import ReachOut from '../components/sections/ReachOut'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Annapurna</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <LandingInfo />
      <ReachOut />
    </div>
  )
}
