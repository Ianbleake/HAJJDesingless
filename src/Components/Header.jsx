import Logo from '../Assets/Logo_white_Hajj.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div data-w-id="2ebd3733-637e-5308-3580-d915f0902401" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navcustom w-nav">
      <div className="topsecction">
        <div className="custom-container">
          <div className="langbtncont">
            <a href="#" className="langselect w-button">EN</a>
            <div className="txtfooter"> | </div>
            <a href="#" className="langselect w-button">ES</a>
          </div>
        </div>
      </div>
      <div className="custom-container nav">
        <Link to="/" aria-current="page" className="brandlink w-nav-brand w--current">
          <img src={Logo} loading="lazy" alt="" className="brandlogo"/>
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link to={'/team'} className="linkregularnav w-nav-link">OUR TEAM</Link>
          <Link to={'/our-oath'} className="linkregularnav w-nav-link">OUR OATH</Link>
          <Link to={'/our-work'} className="linkregularnav w-nav-link">OUR WORK</Link>
          <Link to={'/showroom'} className="linkregularnav w-nav-link">OUR SHOWROOM</Link>
          <Link to={'/feature-media'} className="linkregularnav w-nav-link">FEATURED MEDIA</Link>
          <Link to={'/our-news'} className="linkregularnav w-nav-link">OUR NEWS</Link>
          <Link to={'/curate-your-proyect'} className="linkregularnav w-nav-link">CURATE YOUR PROJECT</Link>
        </nav>

        <div className="menu-button w-nav-button">
          <div className="hiddenicon w-icon-nav-menu"></div>
        </div>

      </div>
    </div>
  )
}

export default Header