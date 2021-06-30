import Link from 'next/link'
import { useState } from 'react'
import navStyles from '../styles/NavHam.module.css'
import Hamburger from 'hamburger-react'

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false)

    function Open(){
        console.log(isOpen)
        setOpen(!isOpen)
    }
        return (
            <>
                <div className={navStyles.MainDev}>
                    <nav className={navStyles.nav}>
                        <Link href='/'><img src="/WD.png" alt="Vercel" className={navStyles.logo} /></Link>
                        <Hamburger toggled={isOpen} toggle={Open} className={navStyles.Ham}/>
                    </nav>
                
                {isOpen && ( 
                    <nav className={navStyles.Hamnav}>
                            <ul>
                                <li>
                                    <Link href='https://www.instagram.com/winnersdaily/'>Instagram</Link>
                                </li>
                                <li>
                                    <Link href='/about'>About</Link>
                                </li>
                                <li>
                                    <Link href='/community'>Community</Link>
                                </li>
                                <li>
                                    <Link href='/mediaKit'>Media Kit</Link>
                                </li>
                                <li>
                                    <Link href='/services'>Services</Link>
                                </li>
                            </ul>
                        </nav>
                    )}
                </div>
                </>
        )
    
}

export default HamburgerMenu
