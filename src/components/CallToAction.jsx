import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import {Button} from "@/components/Button";
import Image from "next/image";
import {useEffect, useState} from "react";
import appScreenshotImage from '../../public/images/restaurant-screenshot.png';
import burgerImage from '../../public/images/burger.png';
import tomatoImage from '../../public/images/tomato.png';

export function CallToAction() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-primary pt-20 sm:pt-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <div className="absolute bottom-0 xl:bottom-200 left-0 right-0 -mb-1 xl:h-4/5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1728 953">
          <path fill="#FFE45C" fillRule="evenodd" d="M0 740.452c12.83-3.309 25.92-6.964 39.917-10.202a452.487 452.487 0 0 1 241.92 10.893c62.15 20.389 119.174-4.979 181.44-10.634a531.479 531.479 0 0 1 140.817 5.986c44.54 7.9 87.221 24.389 132.48 9.223a514.114 514.114 0 0 1 95.89-22.202 423.31 423.31 0 0 1 63.36-4.316c31.55-.101 63.605.978 94.334 8.705 33.322 8.374 65.782 21.684 100.352 23.554 38.88 2.116 76.74-10.446 115-17.396 52.34-9.511 106.2-8.46 158.5.734 32.16 5.669 63.84 17.267 96.74 17.598 32.14.316 60.87-14.288 90.72-24.461a297.976 297.976 0 0 1 125.74-14.245 293.552 293.552 0 0 1 50.79 9.741v228.783H0V740.452Z" clipRule="evenodd"/>
          <path fill="#E0BB00" d="M1331.78 340.211c8.92-4.188 247.19 277.705-109.7 612.002H1728V215.142l-396.22 125.069Z"/>
          <path fill="#FFE000" d="M1728 215.142c0-6.144-18.35-21.209-22.13-25.223a580.598 580.598 0 0 0-54.36-50.577c-58.32-47.757-125.86-84.506-196.59-110.406-63.36-23.224-134.7-38.174-201.5-21.051a200.849 200.849 0 0 0-79.09 40.375c-31.4 26.303-55.52 63.023-59.87 104.391-8.54 81.211 56.16 134.594 124.67 162.595 39.26 15.943 78.79 22.72 120.23 29.756a925.979 925.979 0 0 1 158.83 41.886 970.69 970.69 0 0 1 119.77 53.153c33.12 17.266 67.13 39.382 89.98 69.498l.06-294.397Z"/>
        </svg>
      </div>
      <Container className="relative">
        <div className="">
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Top Restaurants
          </h2>
          <h3 className="mt-4 text-2xl text-gray-100">
            and more in the Doorbell App
          </h3>
          <div className="mt-4 flex">
            <Button variant="outline" color="gray">Find out More</Button>
          </div>
          <Image className="mt-8 mx-auto z-10 relative" src={appScreenshotImage} alt="Restaurant Screenshot" placeholder="blur" width={windowWidth * 0.15 + 150} height={400} />
          <Image className="absolute right-0 bottom-0 z-0" src={burgerImage} alt="Burger" width={windowWidth * 0.4 + 100} height={400} />
          <Image className="absolute left-0 bottom-0 z-0" src={tomatoImage} alt="Tomatoes" width={windowWidth * 0.08 + 80} height={400} />
          <svg className="absolute left-2/3 top-1/4 w-8 xl:w-16 xl:-mx-28 xl:top-20 z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 90 98">
            <path stroke="#fff" strokeWidth="9" d="M56.044 68.127c-17.89-7.628-31.541-18.863-38.656-30.01-4.052-6.348-5.807-12.373-5.417-17.545.377-5.004 2.79-9.708 8.146-13.648 2.227-1.579 3.966-1.749 5.49-1.37 1.758.437 3.874 1.777 6.272 4.402 4.822 5.278 9.404 14.21 13.401 24.265 3.947 9.928 7.137 20.46 9.346 28.55a347.872 347.872 0 0 1 1.418 5.356ZM31.353 92.225c-8.502.83-14.269.242-18.137-1.015-4.572-1.485-6.52-3.894-7.497-6.438-.91-2.574-.262-4.778 1.147-6.212 1.416-1.442 4.106-2.578 8.093-1.722 1.544.407 3.616 1.634 6.063 3.752 2.4 2.076 4.804 4.695 6.98 7.335a105.457 105.457 0 0 1 3.35 4.3ZM82.338 34.37a224.81 224.81 0 0 0-1.44 8.498 32.23 32.23 0 0 1-4.226-10.07l-.016-.07-.018-.07c-1.465-5.532-1.18-11.955.38-16.383.786-2.23 1.73-3.492 2.462-4.05.493-.374.955-.535 1.883-.205l.037.014.038.012c1.15.387 1.765.993 2.203 1.85.517 1.012.86 2.555.893 4.768.06 3.968-.844 8.663-1.79 13.583a636.56 636.56 0 0 0-.406 2.123Z"/>
          </svg>
        </div>
      </Container>
    </section>
  )
}
