import Title from "@/components/Title";
import Image from "next/image";

export default function Testimonies() {
    return (
        <section className="relative isolate overflow-hidden bg-white py-12 lg:py-24 xl:py-32 px-6 lg:px-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <Title title="Here's what people are saying about us" center={true} />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            “Been using doorbell services for the past year for food deliveries and never been disappointed. Their team is reliable and very responsive.”
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <Image
                            width={120}
                            height={120}
                            className="mx-auto object-cover rounded-full w-24 h-24 lg:w-32 lg:h-32"
                            src="/images/testimonies/hosanna.jpg"
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Hosanna Mapira</div>
                        </div>
                        <div className="text-gray-600 text-center">Lilongwe, Malawi</div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
