export const metadata = {
  title: 'Home - ASPRO',
  description: 'ASPRO recupera tus inversiones perdidas, asegurando tu dinero en una wallet segura y no regulada, con opciones para generar alta rentabilidad.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import io from 'socket.io-client'
import WhatsAppButton from '@/components/whatsapp-botton'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <WhatsAppButton/>
    </>
  )
}
