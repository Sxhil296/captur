import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import Slider from '../components/Slider'
import {SliderData} from '../components/SliderData'




export default function Home() {
  return (
    <div>
      <Head>
        <title>Captur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Captur Photography' message='I captur moments in nature and keep them alive.'/>
      <Slider slides={SliderData}/>
      <Instagram />
     
    </div>
  )
}
