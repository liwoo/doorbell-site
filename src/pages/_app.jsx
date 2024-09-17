import '@/styles/tailwind.css'
import '@/styles/recaptcha.css' // Add this line
import 'focus-visible'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

function App({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.PUBLIC_RECAPTCHA_KEY}
      scriptProps={{
        async: true,
        defer: false,
        useEnterprise: true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default App
