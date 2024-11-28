import BannerSlider from "../Components/BannerSlider"
import hero1 from "../Assets/hero_1.jpg"
import hero2 from "../Assets/hero_2.jpg"
import hero4 from "../Assets/hero_4.jpg"
import hero5 from "../Assets/hero_5.jpg"
import curate from "../Assets/curate_your_project_short.jpg"
import TextAndBanner from "../Components/TextAndBanner"

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
      ]
  }
  

  console.log(data)

  return (
    <section>
      <BannerSlider Banners={data.banners} />
      <TextAndBanner element={data.textandbanner[0]} /> 
      <TextAndBanner element={data.textandbanner[1]} /> 
    </section>
  )

}

export default Home