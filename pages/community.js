import communityStyles from '../styles/community.module.css';
import Link from 'next/link';
import Meta from '../components/Meta';

const community = () => {
    const arr = [...Array(23)];
    let i = 1;
    let j = 1;
    let i_offset = 1;
    let odd = false;
    let id = 0;
    let first = -10;
    let width = 15;
    let name = "";

    return (
        <div className={communityStyles.main}>
            <Meta title='Community' />
            <div className={communityStyles.sec}>
                <h1>Winning is no secret anymore.</h1>
                <p className={communityStyles.p}>
                    WinnersDaily is committed to support architects turn their brightest works into trending posts, that’s why we assist you to distribute your content and grow your image. Our platform is trustworthy, accessible and connects you to thousands of feeds around the globe.
                    <br/><br/>
                    WinnersDaily and You. Together every step of the way.
                </p>
            </div>
            <div className={communityStyles.sec}>
                <h1>Winner winner, chicken dinner!</h1>
                <p className={communityStyles.p}>
                    Competition is exciting and fun! That’s why we give a special reward to every week, month and yearly most recognized winner. A way of encouraging the flow of hard work and our way of gratifying how important you guys are to us.
                </p>
                <div className={communityStyles.cardHolders}>
                    <img className={communityStyles.sideCard} style={{ marginRight: '-3%' }} src="/community/instagram_3er premio.jpg"/>
                    <img className={communityStyles.centerCard} src="/community/instagram_1er premio.jpg"/>
                    <img className={communityStyles.sideCard} style={{ marginLeft: '-3%' }} src="/community/instagram_2nd premio.jpg"/>
                </div>
            </div>
            <div className={communityStyles.sec}>
                <h1>Want to get ranked? Submit your work</h1>
                <p className={communityStyles.p}>We know you want a pizza too.<br/>We all do, hurry up before it gets cold!</p>
                <Link href='https://wdailycontact.typeform.com/to/ldHTBair'>
                    <input type='submit' value="Get Ranked" className={communityStyles.btn} />
                </Link>
            </div>
            <div className={communityStyles.sec}>
                <h1>Featuring</h1>
                <div className={communityStyles.row}>
                    <div className={communityStyles.col}>
                        <p style={{margin:0}}>-Adept Architects </p>
                        <p style={{margin:0}}>-Aeby Perneger </p>
                        <p style={{margin:0}}>-Aulets Arquitectura</p>
                        <p style={{margin:0}}>-BAAR Arquitectura</p>
                        <p style={{margin:0}}>-BAAS arquitectes</p>
                        <p style={{margin:0}}>-Barozzi Veiga</p>
                        <p style={{margin:0}}>-Baumschlager Eberle Architects</p>
                        <p style={{margin:0}}>-Behnisch Architekten</p>
                        <p style={{margin:0}}>-Birk Heilmeyer</p>
                        <p style={{margin:0}}>-Bollinger + Grohmann</p>
                        <p style={{margin:0}}>-Boltshauser Architekten AG</p>
                        <p style={{margin:0}}>-C.F. Moller Architects</p>
                        <p style={{margin:0}}>-COMA</p>
                        <p style={{margin:0}}>-COSA Architects</p>
                        <p style={{margin:0}}>-Carusso St John Architects</p>
                        <p style={{margin:0}}>-Chris Precht</p>
                        <p style={{margin:0}}>-Cierto Estudio</p>
                        <p style={{margin:0}}>-Cobe Architects</p>
                        <p style={{margin:0}}>-Daniel Valle Architects</p>
                        <p style={{margin:0}}>-Ddorte Mandrup</p>
                        <p style={{margin:0}}>-E2A</p>
                        <p style={{margin:0}}>-Effekt Architects</p>
                    </div>
                    <div className={communityStyles.col}>
                        <p style={{margin:0}}>-Eike Becker Architekten</p>
                        <p style={{margin:0}}>-Enofstudio Architectuur</p>
                        <p style={{margin:0}}>-Gina Barcelona Architects</p>
                        <p style={{margin:0}}>-Giuseppe Parisi</p>
                        <p style={{margin:0}}>-HENN Architecure</p>
                        <p style={{margin:0}}>-Heinle Wicher and Partners</p>
                        <p style={{margin:0}}>-Henning Larsen</p>
                        <p style={{margin:0}}>-Herzog & de Meuron</p>
                        <p style={{margin:0}}>-Hiha Studio</p>
                        <p style={{margin:0}}>-Hilmes Lamprecht Architekten</p>
                        <p style={{margin:0}}>-In-Nova Studio</p>
                        <p style={{margin:0}}>-JSWD Architekten</p>
                        <p style={{margin:0}}>-Jordan Balzer Schubert</p>
                        <p style={{margin:0}}>-Jorge Vidal Studio</p>
                        <p style={{margin:0}}>-KAAN Architecten</p>
                        <p style={{margin:0}}>-KSP-engel</p>
                        <p style={{margin:0}}>-KSW architekten</p>
                        <p style={{margin:0}}>-Kadawittfeldarchitektur</p>
                        <p style={{margin:0}}>-Karamuk Kuo</p>
                        <p style={{margin:0}}>-Kengo Kuma and Associates</p>
                        <p style={{margin:0}}>-Kobenhagen</p>
                        <p style={{margin:0}}>-Ledda Russo Architetti</p>
                    </div>
                    <div className={communityStyles.col}>
                        <p style={{margin:0}}>-Mecanoo</p>
                        <p style={{margin:0}}>-Merz Kley Partner</p>
                        <p style={{margin:0}}>-Morris + Company</p>
                        <p style={{margin:0}}>-Muffler Architekten</p>
                        <p style={{margin:0}}>-PPAG architects</p>
                        <p style={{margin:0}}>-Pavel Vavilov Studio</p>
                        <p style={{margin:0}}>-Pedro Pitarch</p>
                        <p style={{margin:0}}>-Ravetllat Arquitectura</p>
                        <p style={{margin:0}}>-Renzo Piano Architects</p>
                        <p style={{margin:0}}>-Robertneun</p>
                        <p style={{margin:0}}>-SHA</p>
                        <p style={{margin:0}}>-SUBARQUITECTURA</p>
                        <p style={{margin:0}}>-Schenker Salvi Weber</p>
                        <p style={{margin:0}}>-Schultearchitekten</p>
                        <p style={{margin:0}}>-Stanton Williams</p>
                        <p style={{margin:0}}>-Tejo Collective</p>
                        <p style={{margin:0}}>-Terra Nova</p>
                        <p style={{margin:0}}>-Vaillo + Irigay Architects</p>
                        <p style={{margin:0}}>-Wulf Architekten</p>
                    </div>
                </div>
                <div className={communityStyles.sec}>
                    <h1>Renderists</h1>
                    <div className={communityStyles.row}>
                        <div className={communityStyles.col}>
                            <p style={{ margin: 0 }}>-ArtefactoryLab</p>
                            <p style={{ margin: 0 }}>-Beta Visuals</p>
                            <p style={{ margin: 0 }}>-Bobak Studio</p>
                            <p style={{ margin: 0 }}>-Bside Visuals</p>
                            <p style={{ margin: 0 }}>-Camera Picta</p>
                            <p style={{ margin: 0 }}>-Cylind Work</p>
                            <p style={{ margin: 0 }}>-Expressiv</p>
                            <p style={{ margin: 0 }}>-Feb Images</p>
                            <p style={{ margin: 0 }}>-Filippo Bolognese</p>
                            <p style={{ margin: 0 }}>-Flooer Studio</p>
                            <p style={{ margin: 0 }}>-Framax Images</p>
                            <p style={{ margin: 0 }}>-Graph</p>
                            <p style={{ margin: 0 }}>-Grauwald Studio</p>
                            <p style={{ margin: 0 }}>-Indie Visual</p>
                            <p style={{ margin: 0 }}>-Loomn</p>
                            <p style={{ margin: 0 }}>-LymVisual</p>
                            <p style={{ margin: 0 }}>-MOT</p>
                        </div>
                        <div className={communityStyles.col}>
                            <p style={{ margin: 0 }}>-Mammutlab</p>
                            <p style={{ margin: 0 }}>-Mir.</p>
                            <p style={{ margin: 0 }}>-Nightnurse Images</p>
                            <p style={{ margin: 0 }}>-ONIRISM Studio</p>
                            <p style={{ margin: 0 }}>-Picture Plane</p>
                            <p style={{ margin: 0 }}>-Pillar Visuals</p>
                            <p style={{ margin: 0 }}>-Plankton Group</p>
                            <p style={{ margin: 0 }}>-PlayTime</p>
                            <p style={{ margin: 0 }}>-Ponnie Images</p>
                            <p style={{ margin: 0 }}>-Proloog</p>
                            <p style={{ margin: 0 }}>-RenderTaxi</p>
                            <p style={{ margin: 0 }}>-Sora Images</p>
                            <p style={{ margin: 0 }}>-Studio Bloomen</p>
                            <p style={{ margin: 0 }}>-Tegmark</p>
                            <p style={{ margin: 0 }}>-Third Images</p>
                            <p style={{ margin: 0 }}>-WOLF Visualizing</p>
                        </div>
                    </div>
                    <Link href='https://wdailycontact.typeform.com/to/ldHTBair'><input type='submit' value="Get Featured" className={communityStyles.btn} /></Link>
                </div>
                <div className={communityStyles.sec} style={{width: '100%'}}>
                    <h1 style={{marginBottom: 90}}>WinnersDaily and you.<br/>Together every step of the way.</h1>
                    <Meta title='Community' />
                    <div className={communityStyles.wrapper}>
                        {arr.map(_ => {
                            if (i > width) {
                                (first > -240) ? first -= 60 : first -= 30;
                                (odd) ? i = i_offset : i = i_offset + 1;
                                j++;
                                odd = !odd;
                            }
                            i += 2;
                            name = "/grid/pic" + (id + 1) + ".png";
                            return (
                                <img id={id++} className={communityStyles.box} style={{ gridColumn: i, gridRow: j, marginTop: first, animationDelay: 100 * j + i * 10 + "ms" }} src={name} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default community;