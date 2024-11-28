import BannerSlider from "../Components/BannerSlider"
import hero1 from "../Assets/hero_1.jpg"
import hero2 from "../Assets/hero_2.jpg"
import hero4 from "../Assets/hero_4.jpg"
import hero5 from "../Assets/hero_5.jpg"
import adApartament from "../Assets/ad_department.jpg"
import altaire from '../Assets/altaire.jpg'
import gamboa from '../Assets/work_slide_4.jpg'
import broome from '../Assets/broome.jpg'
import curate from "../Assets/curate_your_project_short.jpg"
import mosaico from '../Assets/test_mosaico.jpg'
import mosaico2 from '../Assets/test_mosaico_2.jpg'
import TextAndBanner from "../Components/TextAndBanner"
import TextAndSlider from "../Components/TextAndSlider"
import BannerTextBtn from "../Components/BannerTextBtn"
import Banner from "../Components/Banner"

const Home = () => {

  const data = {
      "banners": [
        {
          "url": "#",
          "image": hero1,
          "alt": "Imagen 1",
          "type": 'external'
        },
        {
          "url": "/careers",
          "image": hero2,
          "alt": "Imagen 2",
          "type": 'internal'
        },
        {
          "url": "/curate-your-proyect",
          "image": hero4,
          "alt": "Imagen 3",
          "type": 'internal'
        },
        {
          "url": "/our-news",
          "image": hero5,
          "alt": "Imagen 4",
          "type": 'internal'
        }
      ],
      "textandbanner": [
        {
          "size": 'big',
          "image": hero1,
          "url": "/our-oath",
          "title": "OUR<br><span class='bigtitle'>PROMISE</span>",
          "description": 'With over <strong><em>40 years of experience</em></strong>, our story is a fusion of Italian elegance and global inspiration. It`s a tale of innovation, where caring for every detail and every client`s unique vision is paramount.',
          "button": 'Read more'
        },
        {
          "size": 'normal',
          "image": curate,
          "title": 'CURATE YOUR<br><span class="bigtitle">PROJECT</span>',
          "description": 'Discover the essence of luxury with our custom design solutions.',
          "url": '/curate-your-proyect',
          "button": 'More info'
        },
      ],
      "textandslider": {
        "title": 'OUR<br/>‍<span class="bigtitle">WORK</span>',
        "description": 'Section with featured projects to redirect de user to the projects gallery.',
        "button": 'View projects',
        "url": '/proyect-detail',
        "acordions": [
          {
            "title": 'AD Apartment',
            "image": adApartament,
            "alt": 'AD Apartment',
            "url": '/proyect-detail'
          },
          {
            "title": 'Casa Altaire',
            "image": altaire,
            "alt": 'Casa Altaire',
            "url": '/proyect-detail'
          },
          {
            "title": 'Gamboa 1602',
            "image": gamboa,
            "alt": 'Gamboa 1602',
            "url": '/proyect-detail'
          },
          {
            "title": 'Broome',
            "image": broome,
            "alt": 'Broome',
            "url": '/proyect-detail'
          }
        ]
      },
      "bannertextbtn": {
        "title": 'OUR TEAM',
        "description": 'We specialize in designing and creating elegant, high-quality design projects.',
        "url": '/our-team',
        "button": 'Get to know us',
        "image": null
      },
      "banner": {
        "title": 'OUR SHOWROOM',
        "description": 'Find inspiration and references to build the space you want.',
        "button": 'Get to know us',
        "url": '/our-showroom',
        "images": [
          {
            "image": mosaico,
            "alt": ''
          },
          {
            "image": mosaico2,
            "alt": ''
          }
        ]
      }
  }
  

  console.log(data)

  return (
    <section>
      <BannerSlider Banners={data.banners} />
      <TextAndBanner element={data.textandbanner[0]} />
      <TextAndSlider data={data.textandslider} />
      <BannerTextBtn data={data.bannertextbtn} />
      <Banner data={data.banner} />
      <TextAndBanner element={data.textandbanner[1]} /> 
    </section>
  )

}

export default Home