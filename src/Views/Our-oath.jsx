import BannerSlider from '../Components/BannerSlider'
import TextAndImage from '../Components/TextAndImage'

const OurOath = ({data}) => {
  console.log(data)
  return (
    <section>
      <BannerSlider data={data.bannerslider} />
      {
        data.textandimage.map((element, index) => {return(<TextAndImage key={index} data={element} />)})
      }
    </section>
  )
}

export default OurOath