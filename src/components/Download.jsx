import React from 'react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import Title from '@/components/Title'
import { AppStoreLink } from '@/components/AppStoreLink'

function Download() {
  return (
    <section className="bg-accent py-20" id={'download'}>
      <Container className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/screenshots.png"
            alt="App Screenshots"
            width={1080}
            height={720}
          />
        </div>
        <div className="my-12 flex w-full flex-col justify-center text-center lg:my-4 lg:w-1/2">
          <Title title="Download the app" />
          <p>
            Sorry, our Beta is currently oversubscribed. But you can order
            anything and have it delivered to your through our App, starting{' '}
            <strong>September 2024</strong>
          </p>
          <div className="my-8 flex justify-center gap-x-4">
            {/* <AppStoreLink link={"https://testflight.apple.com/join/UyPQsCc6"} alt />
                        <AppStoreLink link={"https://play.google.com/apps/testing/com.doorbell.mw.app"} /> */}
            <AppStoreLink
              whatsapp
              link={
                'https://wa.me/265999889000?text=I%20want%20to%20join%20the%20Doorbell%20App%20Beta%20Program'
              }
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Download
