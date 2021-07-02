import Meta from '../components/Meta'
import aboutStyles from '../styles/about.module.css'
import Count from '../components/Counter'
import { InView } from 'react-intersection-observer';


const about = () => {

  function resetCounter(entry){
    
      return <Count key={1} number={'2020'} duration={5} />
    
  }

  return (
    <div className={aboutStyles.main}>
      <Meta title='About' />

      <div className={aboutStyles.content}>
        <h1 style={{marginBottom: 0}}>Have a seat !</h1>
        <h4>Let us tell you our story</h4>
        <p className={aboutStyles.p3} >
          Starting off in the summer of 2020, as a group of architects based in Barcelona 
          who are connected through pastimes like art-photography and vibrating jazz evenings. 
          What started as a hobby for collecting competition winners from around the globe in order 
          to inspire our very own work. With enough love, dedication and a dose of coffee in between
          we turned our avocation into something we call WinnersDaily.
        </p>
        <img src="/about/topImage.png" />

        <div className={aboutStyles.sec2}>
          <div className={aboutStyles.content}>
            
            <h2>What exactly is WinnersDaily?</h2>
            <p className={aboutStyles.p3} style={{ fontSize:'medium'}}>
              WinnersDaily is an online data base of information related to architectural competitions. 
              We provide a frame and canvas for every project to display its beauty on the screens of 
              thousands of new viewers. We value the work of architects and renderers who break the 
              wall between reality and idea in order to show a hint of the future. WinnersDaily is 
              a virtual currency for architectural competitions, a platform where acknowledged 
              winners from all over the world come together to form a community, a showcase to 
              gasp side by side with those whose work is subtly recognized. Without any doubt, 
              we provide to those who thirst for inspiration to win and become a new reference 
              in the field. So welcome! We encourage the diffusion of your hard work.

            </p>
            
          </div>
        </div>
      </div>

      <div className={aboutStyles.content}>
        <h2>Winners’ Map</h2>
        <p style={{fontSize:'small'}}>Publishing since 2020 from all over the globe.</p>

        <img src="/about/map.png"  style={{width: '50%', height: 'auto'}}/>
        <div className={aboutStyles.tableCol}>
          <div className={aboutStyles.tableRow}>
            <div className={aboutStyles.tableCol} style={{ width: 80 }}>
              <p style={{ marginBottom: 2 }}>Constitution</p>
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref}>
                      {inView && <Count key={1} number={'2020'} duration={2.5} />}
                    </div>
                  )
                }
              </InView>
              
            </div>
            <div className={aboutStyles.tableCol} style={{ width: 80 }}>
              <p style={{ marginBottom: 2 }}>Offices</p>
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref}>
                    {inView && <Count key={1} number={'342'} duration={1.5} />}
                  </div>
                )
                }
              </InView>
              
            </div>
          </div>  
          <div className={aboutStyles.tableRow}>
            <div className={aboutStyles.tableCol} style={{ width: 80 }}>
              <p style={{ marginBottom: 2 }}>Projects</p>
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref}>
                    {inView && <Count key={1} number={'439'} duration={2} />}
                  </div>
                )
                }
              </InView>
              
            </div>
            <div className={aboutStyles.tableCol} style={{ width: 80 }}>
              <p style={{ marginBottom: 2 }}>Countries</p>
              <InView>
                {({ inView, ref, entry }) => (
                  <div ref={ref}>
                    {inView && <Count key={1} number={'65'} duration={1} />}
                  </div>
                )
                }
              </InView>
              
            </div>
          </div>
        </div>
      </div>


      <div className={aboutStyles.sec2}>
        <h2>Media Press Kit</h2>
        <p className={aboutStyles.p3} >
          Download our logo or icon and use it on your website or advertising.

        </p>
        <div className={aboutStyles.wrapper2} >
            <div className={aboutStyles.line}>
              <img src="/about/mediaKit1.png" className={aboutStyles.imgKit} />
            <img src="/about/mediaKit2.png" className={aboutStyles.imgKit} />
            </div>

            <div className={aboutStyles.line}>
            <img src="/about/mediaKit3.png" className={aboutStyles.imgKit}/>
            <img src="/about/mediaKit4.png" className={aboutStyles.imgKit}/>
              
            </div>
          </div>
          <button className={aboutStyles.btn}>
            <a href="/WinnersDaily_Press_Kit_All.zip" download="winnersdaily_media_kit" className={aboutStyles.p3} style={{margin: 20}}>
              Download all logos & icons
            </a>
          </button>
        <br />
      </div>
      
      <div className={aboutStyles.sec3}>
        <h2>Get closer</h2>
        <div className={aboutStyles.wrapper}>

          <div className={aboutStyles.line}>
            <img src="/about/pen.png" className={aboutStyles.imgSmall} />
            <p className={aboutStyles.p3S} >
                We’re continuously looking for talent. If you want to become a contributor to our blog, please write to us at <b>contact@thewinnersdaily.com</b>
            </p>
          </div>

          <div className={aboutStyles.line}>
            <img src="/about/question.png" className={aboutStyles.imgSmall} />
            <p className={aboutStyles.p3S} >
              Should you have any questions, proposals, or require any further assistance regarding WINNERSDAILY, please do not hesitate to contact us at <b>contact@thewinnersdaily.com</b>
            </p>
          </div>

          <div className={aboutStyles.line}>
            <img src="/about/textBox.png" className={aboutStyles.imgSmall} />
            <p className={aboutStyles.p3S} >
              We are open to partnerships and other collaborations. We would love to hear from you at <b>contact@thewinnersdaily.com</b>
            </p>
          </div>

        </div>
        <br />
      </div>

      <div className={aboutStyles.sec2}>
        <h2>The whole web is made by us</h2>
        <p className={aboutStyles.p3} >
          We are proud of the diverse backgrounds our team comes from, having international members within different specialties, from architects and engineers to business analysts. It’s our believe that diversity is a key factor for creativity in our workspace.
        </p>
        <br />

      </div>

    </div>
  )
}

export default about
