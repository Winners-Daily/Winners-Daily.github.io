import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { useRouter } from "next/router";

const FullMenu = () => {
    const router = useRouter();
    return (
        <>
            <nav className={navStyles.nav}>
                <div className={navStyles.nav_link_container}>
                    <span className={navStyles.nav_link}>
                        <Link href='/about'>About</Link>
                    </span>
                    <span className={navStyles.nav_link}>
                        <Link href='/community' className={navStyles.nav_link}>Community</Link>
                    </span>
                </div>
                <div className={navStyles.nav_main}>
                    <Link href='/'>
                        <img src="/WD.png" alt="Vercel" className={navStyles.logoCenter} />
                    </Link>
                </div>
                <div className={navStyles.nav_link_container}>
                    <span className={navStyles.nav_link}>
                        <Link href='/mediaKit' className={navStyles.nav_link}>Media Kit</Link>
                    </span>
                    <span className={navStyles.nav_link}>
                        <Link href='/services' className={navStyles.nav_link}>Services</Link>
                    </span>
                </div>
                <div className={navStyles.insta}>
                    <a href='https:www.instagram.com/winnersdaily/' target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Vercel" className={navStyles.logo} />
                    </a>
                </div>
            </nav>
            
        </>
    )
}

export default FullMenu


//         <nav className={navStyles.nav}>
//             <ul>
//                 <li className={router.pathname == "/about" ? navStyles.active : navStyles.notActive}>
//                     <Link href='/about' >About</Link>
//                 </li>
//                 <li className={router.pathname == "/community" ? navStyles.active : navStyles.notActive}>
//                     <Link href='/community'>Community</Link>
//                 </li>
//                 <li className={router.pathname == "/" ? navStyles.active : navStyles.notActive}>
//                     <Link href='/'><img src="/WD.png" alt="Vercel" className={navStyles.logoCenter} /></Link>
//                 </li>
//                 <li className={router.pathname == "/mediaKit" ? navStyles.active : navStyles.notActive}>
//                     <Link href='/mediaKit'>Media Kit</Link>
//                 </li>
//                 <li className={router.pathname == "/services" ? navStyles.active : navStyles.notActive}>
//                     <Link href='/services'>Services</Link>
//                 </li>
//                 <li>
//                     <div className={navStyles.insta}>
//                         <a href='https://www.instagram.com/winnersdaily/' target="_blank" rel="noopener noreferrer">
//                             <img src="/instagram.png" alt="Vercel" className={navStyles.logo} />
//                         </a>
//                     </div>
//                 </li>
//             </ul>
//         </nav>