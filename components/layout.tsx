import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'Yannick VERON'
export const siteTitle = name

export default function Layout({
  children,
  home,
  scrollSnap=true,
  backLink="#"
}: {
  children: React.ReactNode
  home?: boolean
  scrollSnap? :boolean
  backLink? :string
}) {
  return (
    <div className={`${styles.container} ${scrollSnap ? styles.scrollSnap:''}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio Yannick VERON"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/**Yannick**%20VERON.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/*<header className={styles.header}>
        {home ? (
          <>
            <Image priority src="/images/profile.jpg" height={144} width={144} alt={name}/>
          </>
          ) : (
          <>
            <Link href="/">
              <a>
                <Image priority src="/images/profile.jpg" height={108} width={108} alt={name}/>
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
          )}
          </header>*/}
      {!home && (
        <div className={styles.backBtn}>
          <Link href={"/"+backLink}>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <main>{children}</main>
      {/*!home && (
        <div className={styles.backBtn}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )*/}
      <footer>© Copyright 2021 Yannick VERON</footer>
    </div>
  )
}
