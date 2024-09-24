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
            Convenience at your fingertips. Download the Doorbell Zatheka app
            and enjoy the best delivery service in Malawi.
          </p>
          <div className="my-8 flex justify-center gap-x-4">
            <AppStoreLink
              link={
                'https://apps.apple.com/mw/app/doorbell-zatheka/id6446295110'
              }
              alt
            />
            <AppStoreLink
              link={
                'https://play.google.com/store/apps/details?id=com.doorbell.mw.app'
              }
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Download
