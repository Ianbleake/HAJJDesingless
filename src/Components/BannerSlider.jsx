import { Link } from "react-router-dom";

const BannerSlider = ({ data }) => {
  
  return (
    <div className="herosection">
      <div data-delay="7000" data-animation="fade" className="herocarrousel w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="6" data-duration="1500" data-infinite="true">        
        <div className="w-slider-mask">
        {
          data.banners.map((banner, index) => {
            return (
              <div key={index} className="heroslide w-slide">
                {
                  banner.type == 'external' ?
                    <a href={banner.url} className={`divimghero ${data.type == 'slider' ? ' w-inline-block' : ''}`} >
                      {data.type == 'static'?
                        <div className="maintitleinner">
                          <h1 className="titlehero-inner" data-ix="appear-title-inner">{banner.alt}</h1>
                        </div>
                      : ''}
                      <img src={banner.image} loading="eager" alt={banner.alt} className="imghero" />
                    </a>
                  :
                    <Link to={banner.url} className={`divimghero ${data.type == 'slider' ? ' w-inline-block' : ''}`}>
                      {data.type == 'static'?
                        <div className="maintitleinner">
                          <h1 className="titlehero-inner" data-ix="appear-title-inner">{banner.alt}</h1>
                        </div>
                      : ''}
                      <img src={banner.image} loading="eager" alt={banner.alt} className="imghero" />
                    </Link>
                }

              </div>
            );
          })
        }
        </div>
        {
          data.banners.length > 1 ? 
          <>
          <div className="arrowslider mainslider w-slider-arrow-left">
            <div className="iconleft w-icon-slider-left"></div>
          </div>
          <div className="arrowslider mainslider w-slider-arrow-right">
            <div className="iconright w-icon-slider-right"></div>
          </div>
          <div className="navigationdots w-slider-nav"></div>
          </>
          : ''
        }
      </div>
    </div>
  )
}

export default BannerSlider