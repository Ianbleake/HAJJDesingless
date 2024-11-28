

const Banner = ({data}) => {
  return (
    <div className="showroomsecc">
      <div className="custom-container">
        <div className="showroomcont">

          <div className="infosechomefull">
            <h1 className="showsecctitle">{data.title}</h1>
            <p className="showroomtext">{data.description}</p>
            <a href={data.url} className="ctaregular overelement w-button">{data.button}</a>
          </div>

          <div data-delay="4000" data-animation="fade" className="innerslider homeshow w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="2000" data-infinite="true">
            <div className="w-slider-mask">
              {
                data.images.map((element, index) => {
                  return(
                    <div key={index} className="slidefull w-slide">
                      <img src={element.image} alt={element.alt} className="regularimg showroomhome"/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner