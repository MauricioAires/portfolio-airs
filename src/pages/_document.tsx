import Document, { Html, Main, NextScript, Head } from 'next/document'
import { Analytics } from '@/components/Analytics'
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR" className="sr">
        <Head>
          <meta
            name="google-site-verification"
            content="JDml95I3tD6fsMp6ZXEVDLmGPMbNkFhjrkyXlUQWYyc"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: {
                'html.sr .load-hidden': {
                  visibility: 'hidden'
                }
              }
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}
