import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
        <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="847cf360-b72b-43ba-a971-57346a35e2ac";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
      </body>
    </Html>
  )
}
