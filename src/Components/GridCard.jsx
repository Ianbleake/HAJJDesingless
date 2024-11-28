
const GridCard = ({data}) => {
  return (
    <div className="ournewssecc">
      <div className="custom-container">
        <div id="w-node-_49755522-13c6-0ecf-ca6c-99aebc278585-645f82b6" className="w-layout-layout stacknews wf-layout-layout">

          <div id="w-node-_49755522-13c6-0ecf-ca6c-99aebc278586-645f82b6" className="w-layout-cell">
            <div data-delay="4000" data-animation="slide" className="slidernews w-slider" data-autoplay="true" data-easing="ease-in-out" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">              
              <div className="w-slider-mask">
                {
                  data.cards.map((card, index) => {
                    return(
                      <div key={index} className="slidenews w-slide">
                        <div className="itemhome-news">
                          <a href={card.url} className="containerphoto w-inline-block"></a>
                          <div className="w-layout-hflex infonewscont">
                            <div className="dateandtitlecont">
                              <div className="titlenewsminiature">{card.title}</div>
                              <div className="datenews">{card.date}</div>
                            </div>
                            <a href={card.document} target="_blank" className="ctaregular news w-button">{card.button}</a>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div id="w-node-_49755522-13c6-0ecf-ca6c-99aebc278587-645f82b6" className="w-layout-cell infocell">
            <h2 data-effect4="" data-splitting="" className="heading-scroll" dangerouslySetInnerHTML={{ __html: data.title }} ></h2>
            <p className="regulartext">{data.description}</p>
            <a href={data.url} className="ctaregular w-button">{data.button}</a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GridCard