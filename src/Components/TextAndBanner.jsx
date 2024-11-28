import { Link } from "react-router-dom"

const TextAndBanner = ({element}) => {
  return (
    <div className={element.size == 'normal' ? 'curatesecc' : element.size == 'big' ? 'promisesecc' : '' }>
      <div className="custom-container">
        <div className="w-layout-layout promise-stack wf-layout-layout">
          <div className="w-layout-cell infocell">
            <div className="promiseinfocont">
            <h2 className="heading-scroll" dangerouslySetInnerHTML={{ __html: element.title }}></h2>
              <p className="regulartext" dangerouslySetInnerHTML={{ __html: element.description }} ></p>
              <Link to={element.url} className="ctaregular w-button">{element.button}</Link>
            </div>
          </div>
          <div className="w-layout-cell imgcell">
            <img src={element.image} alt="" className="imgoncell" data-ix="appear-img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextAndBanner