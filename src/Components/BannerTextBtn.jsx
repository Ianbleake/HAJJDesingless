const BannerTextBtn = ({ data }) => {
  return (
    <div className="teamsecc">
      <div className="custom-container">
      <div className="infoteamcont" style={data.image ? { backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>

          <div className="infosechomefull">
            <h4 className="showsecctitle">{data.title}</h4>
            <p className="showroomtext">{data.description}</p>
            <a href={data.url} className="ctaregular overelement w-button">{data.button}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTextBtn;
