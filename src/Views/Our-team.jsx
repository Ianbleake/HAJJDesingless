import BannerSlider from '../Components/BannerSlider'
import TextAndImage from '../Components/TextAndImage'
const OurTeam = ({data}) => {
  return (
    <section>
      <BannerSlider data={data.bannerslider} />
      {
        data.textandimage.map((element, index) => {return(<TextAndImage key={index} data={element} />)})
      }
    </section>
  )
}

export default OurTeam