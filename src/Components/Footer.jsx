import Logo from '../Assets/Logo_white_Hajj.svg'
import MailIcon from '../Assets/mail_icon_1.svg'
import Instagram from '../Assets/icon_instagram.svg'
import Facebook from '../Assets/icon_facebook.svg'
import Linkedin from '../Assets/icon_linkedin.svg'
import Pinterest from '../Assets/icon_pinterest.svg'
import Chat from '../Assets/chat_icon.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className="customfooter">
      <div className="custom-container">

        <div id="w-node-e60fb52b-26c0-11f0-dcb8-47735a819f7e-5a819f7c" className="w-layout-layout footerstack wf-layout-layout">
          <div id="w-node-e60fb52b-26c0-11f0-dcb8-47735a819f7f-5a819f7c" className="w-layout-cell footercell">
            <Link to="/" aria-current="page" className="brandlink bottom w-nav-brand w--current">
              <img src={Logo} loading="lazy" alt="" className="brandlogo"/>
            </Link>
          </div>

          <div id="w-node-e60fb52b-26c0-11f0-dcb8-47735a819f8b-5a819f7c" className="w-layout-cell footercell">
            <ul role="list" className="listfooter">
              <li className="itemlistfooter">
                <Link to="/team" className="footerlink">Our Team</Link>
              </li>
              <li className="itemlistfooter">
                <Link to="/our-oath" className="footerlink">Our Oath</Link>
              </li>
              <li className="itemlistfooter">
                <Link to="/our-work" className="footerlink">Our Work</Link>
              </li>
              <li className="itemlistfooter">
                <Link to="/showroom" className="footerlink">Our Showroom</Link>
              </li>
              <li className="itemlistfooter">
                <Link to="/feature-media" className="footerlink">Featured Media</Link>
              </li>
              <li className="itemlistfooter">
                <Link to="/our-news" className="footerlink">Our News</Link>
              </li>
              <li className="itemlistfooter">
                <Link to="/curate-your-proyect" className="footerlink">Curate your project</Link>
              </li>
              <li className="itemlistfooter">
                <Link to="/careers" className="footerlink">Careers</Link>
              </li>
            </ul>
          </div>
          <div id="w-node-e60fb52b-26c0-11f0-dcb8-47735a819fa2-5a819f7c" className="w-layout-cell footercell">
            <div className="newsform w-form">
              <h3 className="titlefooter">STAY UPDATED</h3>
              <p className="txtfooter">Never miss any of our comunications, Sign up for our newsletter to uncover design &amp; architecture news, events and more.</p>
              <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form" data-wf-page-id="66b64f859d775269645f82b6" data-wf-element-id="e60fb52b-26c0-11f0-dcb8-47735a819fa8">
                <input className="inputmail w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Enter your e-mail" type="email" id="email-2" required=""/>
                <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="SUBSCRIBE"/>
              </form>
              <div>
                <div className="disclaimersubs">By subscribing you acknowledge that you have read and agreed to our <a href="privacy-policy.html" className="privacylink">Privacy Policy.</a>
                </div>
              </div>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>

        <div id="w-node-_297974bb-9ae1-3cf0-d640-31a80f89ea36-5a819f7c" className="w-layout-layout stacklangsocial wf-layout-layout">
          <div id="w-node-_297974bb-9ae1-3cf0-d640-31a80f89ea37-5a819f7c" className="w-layout-cell cellsociallang">
            <div className="langbtncont bottom">
              <div className="txtfooter">Language</div>
              <a href="#" className="langselect w-button">EN</a>
              <div className="txtfooter"> | </div>
              <a href="#" className="langselect w-button">ES</a>
            </div>
          </div>

          <div id="w-node-_297974bb-9ae1-3cf0-d640-31a80f89ea38-5a819f7c" className="w-layout-cell cellsociallang">
            <div className="container-social">
              <a href="mailto:contacto@hajjdesignless.com.mx?subject=Contact%20Hajj%20website" className="linkmail w-inline-block">
                <img src={MailIcon} loading="lazy" alt="" className="mailicon"/>
                <div className="text-block">contacto@hajjdesignless.com.mx</div>
              </a>
            </div>
            <div className="container-social">
              <a href="https://www.instagram.com/hajjdesignless/" target="_blank" className="linksocial w-inline-block">
                <img src={Instagram} loading="lazy" alt="" className="socialicon"/>
              </a>
              <a href="https://www.facebook.com/hajjdesignlessconcepts/" target="_blank" className="linksocial w-inline-block">
                <img src={Facebook} loading="lazy" alt="" className="socialicon"/>
              </a>
              <a href="https://mx.linkedin.com/company/hajj-designless" target="_blank" className="linksocial w-inline-block">
                <img src={Linkedin} loading="lazy" alt="" className="socialicon"/>
              </a>
              <a href="https://mx.pinterest.com/hajjdesignless/" target="_blank" className="linksocial w-inline-block">
                <img src={Pinterest} loading="lazy" alt="" className="socialicon"/> 
              </a>
            </div>
          </div>

        </div>

        <div className="contlegalitems">
          <div id="w-node-e60fb52b-26c0-11f0-dcb8-47735a819fc0-5a819f7c" className="w-layout-layout quick-stack wf-layout-layout">
            <div id="w-node-e60fb52b-26c0-11f0-dcb8-47735a819fc4-5a819f7c" className="w-layout-cell legalcell">
              <div className="legaltext copyright">© 2024 HAJJ DESIGNLESS</div>
            </div>
            <div id="w-node-e60fb52b-26c0-11f0-dcb8-47735a819fc9-5a819f7c" className="w-layout-cell legalcell">
              <div id="gotopbtn" className="btntop">
                <img src="arrow_right.svg" loading="lazy" alt="" className="icongotop"/>
                <a href="#" className="legaltext backtop">Back to top</a>
              </div>
            </div>
            <div id="w-node-e60fb52b-26c0-11f0-dcb8-47735a819fc1-5a819f7c" className="w-layout-cell legalcell">
              <div className="contlegallinks">
                <a href="privacy-policy.html" className="legaltext">Privacy policy</a>
                <div className="txtfooter">|</div>
                <a href="terms-conditions.html" className="legaltext">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
          <div className="legaltext copyright mobile">© 2024 HAJJ DESIGNLESS</div>
        </div>

      </div>
      <a href="https://api.whatsapp.com/" target="_blank" className="stickychat w-inline-block">
        <img src={Chat} loading="lazy" alt="chat with us icon" className="chaticon"/>
      </a>
    </div>
  )
}

export default Footer