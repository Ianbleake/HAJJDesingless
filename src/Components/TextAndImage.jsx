

const TextAndImage = ({data}) => {
  console.log("text:",data)
  return (
    <div  className="ourstory">
      <div  className="custom-container">
        <div id="w-node-_3fe45a74-e731-18f4-7db7-e3691143c905-f43708f4"  className="w-layout-layout promise-stack wf-layout-layout">

          {
            data.position == "right" ? 
            <>
              <div id="w-node-_3fe45a74-e731-18f4-7db7-e3691143c906-f43708f4"  className="w-layout-cell imgcell">
                <img src={data.image} alt=""  className={`imgoncell ${data.imageclass !== null ? 'founderpic' : ''}`} data-ix="appear-img"/> 
              </div>

              <div id="w-node-_3fe45a74-e731-18f4-7db7-e3691143c916-f43708f4"  className="w-layout-cell infocell">
                <div  className="promiseinfocont">
                  {
                    data.content.map((element, index) => {
                      return(
                        element.type == "title" ? <h2 key={index} data-effect4="" data-splitting=""  className="heading-scroll">{element.value}</h2> :
                        element.type == "paragraph" ? <p key={index} className="regulartext" dangerouslySetInnerHTML={{ __html: element.value }} ></p> :
                        element.type == "image" ? <img key={index} src={element.image} alt=""  className={`imgoncell ${element.classtyle !== null ? element.classtyle : ''}`} data-ix="appear-img"/> : ''
                      )
                    })
                  }
                  
                </div>
              </div>
            </>
            :
            <>
              <div id="w-node-_3fe45a74-e731-18f4-7db7-e3691143c916-f43708f4"  className="w-layout-cell infocell">
                <div  className="promiseinfocont">
                  {
                    data.content.map((element, index) => {
                      return(
                        element.type == "title" ? <h2 key={index} data-effect4="" data-splitting=""  className="heading-scroll">{element.value}</h2> :
                        element.type == "paragraph" ? <p key={index} className="regulartext" dangerouslySetInnerHTML={{ __html: element.value }} ></p> :
                        element.type == "image" ? <img key={index} src={element.image} alt=""  className={`imgoncell ${element.classtyle !== null ? element.classtyle : ''}`} data-ix="appear-img"/> : ''
                      )
                    })
                  }
                  
                </div>
              </div>

              <div id="w-node-_3fe45a74-e731-18f4-7db7-e3691143c906-f43708f4"  className="w-layout-cell imgcell">
                <img src={data.image} alt=""  className={`imgoncell ${data.imageclass !== null ? 'founderpic' : ''}`} data-ix="appear-img"/> 
              </div>
            </>
          }


        </div>
      </div>
    </div>
  )
}

export default TextAndImage