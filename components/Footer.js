import footStyles from '../styles/footer.module.css';

const Footer = () => {
    return (        
        <div className={footStyles.foot}>
            <div className={footStyles.email}>
                <img src="/mail.png" alt="Vercel" className={footStyles.icon} /> 
                <a className={footStyles.sub} href="https://instagram.us17.list-manage.com/subscribe?u=db0809168e74731fc30782715&id=6b2cf448c5"> Subscribe</a>
            </div>
            <p>© 2020 - 2021 thewinnersdaily.com. All Rights Reserved. </p>
        </div>
    )
}

export default Footer;
