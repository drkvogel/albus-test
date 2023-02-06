import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

const log = (msg: string) => {
  console.log(new Date().toUTCString() + ": " + msg)
}

function getRates() {
  log("getRates")
}

export default function Home() {

  const [counter, setCounter] = useState(0);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    log("useEffect")
    getRates()
  }, [])

  return (
    // React.Fragment shortcut
    <>
      <Head>
        <title>Currency Converter</title>
        <meta name="description" content="A simple browser-based Currency Converter in Next.JS. Initially generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <p className={inter.className}>Currency Converter</p>
        </div>
        <div className={styles.description}>
          A simple browser-based Currency Converter
        </div>
      </main>
    </>
  )
}
