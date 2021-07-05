import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
      const handleRouteChange = (url) => {
        ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
  }, [router.events])

  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
