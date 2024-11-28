import { Link } from "react-router-dom";

const TextAndSlider = ({ data }) => {
  return (
    <div className="worksecc">
      <div id="w-node-_591e2513-350f-1a4b-cff0-90e05d17f0c9-645f82b6" className="w-layout-layout accordionstack wf-layout-layout">
        <div id="w-node-_591e2513-350f-1a4b-cff0-90e05d17f0ca-645f82b6" className="w-layout-cell acordioncell">
          <div className="section">
            <div className="accordions">
              {data.acordions.map((acordion, index) => {
                if (index === 0) {
                  return (
                    <div key={index} data-w-id="5603978b-45d6-72ac-b930-0ac144688ec4" style={{ width: '80%', backgroundColor: 'rgba(99,96,96,0)', color: 'rgba(255,255,255,0)' }} className="accordion active" >
                      <div className="accordion-header">
                        <div className="vertical-text">{acordion.title}</div>
                        <div className="flex-fix"></div>
                      </div>
                      <div className="image-container">
                        <Link to={acordion.url} target="_blank" className="numbers"></Link>
                        <img alt={acordion.alt} src={acordion.image} className="image-cover" />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="accordion">
                      <div className="accordion-header">
                        <div className="vertical-text">{acordion.title}</div>
                        <div className="flex-fix"></div>
                      </div>
                      <div className="image-container">
                        <Link to={acordion.url} target="_blank" className="numbers"></Link>
                        <img alt={acordion.alt} src={acordion.image} className="image-cover" />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div id="w-node-_591e2513-350f-1a4b-cff0-90e05d17f0d5-645f82b6" className="w-layout-cell infocell">
          <div className="infoworkcont">
            <h2 data-effect4="" data-splitting="" className="heading-scroll" dangerouslySetInnerHTML={{ __html: data.title }}></h2>
            <p className="regulartext">{data.description}</p>
            <Link to={data.url} className="ctaregular w-button">{data.button}</Link>
          </div>
        </div>
      </div>
      <div className="custom-container"></div>
    </div>
  );
};

export default TextAndSlider;
