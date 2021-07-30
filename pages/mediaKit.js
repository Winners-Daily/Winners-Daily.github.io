import Meta from '../components/Meta';
import Image from 'next/image';
import mediaKitImg from '../public/mediaKit/mediaKit.png';
import mediaKitStyles from '../styles/mediaKit.module.css';

const mediaKit = () => {
    return(
        <>
            <Meta title='MediaKit' />
            <div className={mediaKitStyles.container}>
                <Image src={mediaKitImg} alt="Media Kit" />
            </div>
        </>
    );
}

export default mediaKit;