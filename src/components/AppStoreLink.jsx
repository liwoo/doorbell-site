import Link from 'next/link'
import clsx from 'clsx'
import Image from "next/image";

export function AppStoreLink({color = 'black', alt = false}) {
    const src = alt ? '/images/pre-order-ios.png' : '/images/pre-order.png'
    return (
        <Link
            href="#"
            aria-label="Pre-order on the App Store"
            className={clsx(
                'rounded-lg transition-colors',
                color === 'black'
                    ? 'bg-gray-800 text-white hover:bg-gray-900'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
            )}
        >
            <Image src={src} alt="Pre-order Now" className="h-12" width={150} height={30} />
        </Link>
    )
}
