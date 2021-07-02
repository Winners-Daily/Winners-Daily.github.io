import homeStyles from '../styles/home.module.css';
import ImageFadeIn from "react-image-fade-in";
import { Center } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next';

export default function Home() {
  const arr = [...Array(25)];
  var i = 2;
  var j = 1;
  var i_offset = 2;
  var odd = false;
  var id = 0;
  var first = 25;
  var width = 14;
  var name = "";
  var imgs = [];
  arr.map(_ => {
    if (i > width) {
      first -= 63;
      if (odd) {
        i = i_offset;
      }
      else {
        i = i_offset + 1;
        i_offset += 2;
        width -= 1;
      }
      j++;
      odd = !odd;
    }
    i += 2;
    name = "/grid/test/pic" + (id + 1) + ".jpg";
    imgs.push(
      <div className={homeStyles.box} style={{ gridColumn: i, gridRow: j, marginTop: first, animationDelay: 1000 + 100 * j + i * 10 + "ms" }}>
        <img id={id++} className="image" src={name} height={110} width={110} />
        <style jsx>{`
        .image {
          border-radius: 25px;
        }
      `}</style>
      </div>
    )
  }
  )


  return (
    <div className={homeStyles.main}>
      <div className={homeStyles.wrapper}>
        {
          imgs.map(
            img => {
              return img;
            }
          )
        }
      </div>
      
      <img className={homeStyles.box, homeStyles.logo} style={{ animationDelay: 800  + "ms" }} src="/home/logo.png" />

      <div className={homeStyles.content}>
        <h2 className={homeStyles.h2} >A map to discover treasures.</h2>
        <p className={homeStyles.p1} >
          Our goal is to deliver architectural competition data in a visually 
          engaging manner. Whether you are an architect or designer, renderer,
           or just architecture curious, WinnersDaily offers the tool to stay 
           updated on the slightest architecture competition movements.
        </p>
      </div>
      
      <div className={homeStyles.row}>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'gainsboro' }}> 
          <p className={homeStyles.p2}>
            Stories and collections that inform, help and inspire. Updated daily.
          </p>
        </div>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'white' }}>
          <img className={homeStyles.postImg} src="/home/post1.png"  />
        </div>
      </div>

      <div className={homeStyles.row}>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'white' }} >
          <img className={homeStyles.postImg} src="/home/post2.png" />
        </div>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'gainsboro' }} >
          <p className={homeStyles.p2} style={{ width: 170}}>
            Curated by
            professionals.
            Hand‑picked
            for you.
          </p>
        </div>
      </div>


      <div className={homeStyles.row}>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'gainsboro' }} >
          <p className={homeStyles.p2} style={{ width: 170 }}>
            Every week,
            dedicated
            experts review
            over 100
            projects.
          </p>
        </div>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'white' }} >
          <img className={homeStyles.postImg} src="/home/post3.png" />
        </div>
      </div>


      <div className={homeStyles.row}>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'white' }} >
          <img className={homeStyles.postImg} src="/home/post4.png" />
        </div>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'gainsboro' }} >
          <p className={homeStyles.p2} >
            Get the details
            on every post.
          </p>
        </div>
      </div>


      <div className={homeStyles.row}>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'gainsboro', cursor: 'pointer', position: 'relative', zIndex: 2 }} >
          <p className={homeStyles.p2} style={{ width: 170 }}>
            ‘Honey come with me,
            I’m gonna show you WD’.
          </p>
          <Link href='https://www.instagram.com/winnersdaily/'><img style={{ width: 100, height: 100 , cursor: 'pointer'}} src="/home/instagramLight.png" /></Link>
        </div>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'white' }} >
          <img className={homeStyles.postImg} src="/home/post5.png" />
        </div>
      </div>


      <div className={homeStyles.row}>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'white' }} >
          <a href="https://wdailycontact.typeform.com/to/ldHTBair" className={homeStyles.p2} style={{ width: 170 }}>
            Submit your project to WinnersDaily
          </a>
        </div>
        <div className={homeStyles.textBox} style={{ backgroundColor: 'gainsboro' }} >
          <a href="https://instagram.us17.list-manage.com/subscribe?u=db0809168e74731fc30782715&id=6b2cf448c5" className={homeStyles.p2} style={{ width: 170 }}>
            Get the weekly winners on your inbox!
          </a>
          
        </div>
      </div>

      <br/>
      <br />
    </div>

  )
}

