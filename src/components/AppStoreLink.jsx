import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

export function AppStoreLink({
  color = 'black',
  alt = false,
  link = '#',
  whatsapp = false,
}) {
  const src = whatsapp
    ? '/images/whatsapp-order.png'
    : alt
    ? '/images/beta-ios.png'
    : '/images/beta-android.png'
  return (
    <Link
      href={link}
      target={'_blank'}
      aria-label="Pre-order on the App Store"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50'
      )}
    >
      <Image
        src={src}
        alt="Pre-order Now"
        className={'rounded-lg border-2 border-slate-400'}
        width={150}
        height={44.04}
      />
    </Link>
  )
}
