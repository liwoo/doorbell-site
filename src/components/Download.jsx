import React from 'react';
import {Container} from "@/components/Container";
import Image from "next/image";
import Title from "@/components/Title";
import {AppStoreLink} from "@/components/AppStoreLink";

function Download() {
    return (
        <section className="py-20 bg-accent" id={"download"}>
            <Container className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <Image src="/images/screenshots.png" alt="App Screenshots" width={1080} height={720} />
                </div>
                <div className="w-full my-12 lg:my-4 lg:w-1/2 flex flex-col justify-center text-center">
                    <Title title="Download the app" />
                    <p>Order anything and have it delivered to your doorstep today</p>
                    <div className="my-8 flex justify-center gap-x-4">
                        <AppStoreLink link={"https://testflight.apple.com/join/UyPQsCc6"} />
                        <AppStoreLink link={"https://testflight.apple.com/join/UyPQsCc6"} alt />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Download;