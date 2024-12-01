import BannerSlider from "../Components/BannerSlider"
import TextAndBanner from "../Components/TextAndBanner"
import TextAndSlider from "../Components/TextAndSlider"
import BannerTextBtn from "../Components/BannerTextBtn"
import Banner from "../Components/Banner"
import GridCard from "../Components/GridCard"

const Home = ({data}) => {
  console.log("Home:",data.bannerslider)
  return (
    <section>
      <BannerSlider data={data.bannerslider} />
      <TextAndBanner element={data.textandbanner[0]} />
      <TextAndSlider data={data.textandslider} />
      <BannerTextBtn data={data.bannertextbtn} />
      <Banner data={data.banner} />
      <GridCard data={data.grid} />
      <TextAndBanner element={data.textandbanner[1]} /> 
    </section>
  )
}

export default Home