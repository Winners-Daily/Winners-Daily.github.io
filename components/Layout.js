import Nav from './Nav';
import Footer from './Footer';
import Meta from './Meta';
import styles from '../styles/Layout.module.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as ga from '../lib/ga';

import CookieConsent from "react-cookie-consent";

const Layout = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        }

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [router.events])

    const accept = () => {
        router.reload(window.location.pathname)
    }


    return (
        <>
            <Meta />
            <Nav />
            <CookieConsent enableDeclineButton flipButtons cookieName="concent" onAccept={(acceptedByScrolling) => {
                if (acceptedByScrolling) {
                    // triggered if user scrolls past threshold
                    
                } else {
                    router.reload(window.location.pathname)
                    
                }
            }}
                buttonStyle={{ background: "white"}}
                declineButtonStyle={{ background: "gray"}}

            >
                this website uses cookies to try and improve the user's experience. 
                <br/> you can read our <a style={{textDecoration: "underline"}} href="/terms">terms and conditions</a> to earn more about our cookies polices.
            </CookieConsent>
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
