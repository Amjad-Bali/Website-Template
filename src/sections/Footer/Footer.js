import "./Footer.css";
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaClock,
  FaPhoneVolume,
  FaMapMarkerAlt,
  FaAngleDoubleRight,
} from "react-icons/fa";
import gallery_01 from "../../assets/gallery-01.png";
import gallery_02 from "../../assets/gallery-02.png";
import gallery_03 from "../../assets/gallery-03.jpg";
import gallery_04 from "../../assets/gallery-04.png";
import gallery_05 from "../../assets/gallery-05.jpg";
import gallery_06 from "../../assets/gallery-06.png";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='box'>
          <h3>Site</h3>
          <ul className='social'>
            <li>
              <a href='#facebook' className='facebook'>
                <i>
                  <FaFacebook />
                </i>
              </a>
            </li>
            <li>
              <a href='#twitter' className='twitter'>
                <i>
                  <FaTwitter />
                </i>
              </a>
            </li>
            <li>
              <a href='#youtube' className='youtube'>
                <i>
                  <FaYoutube />
                </i>
              </a>
            </li>
          </ul>
          <p className='text'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem,
            dignissimos iste aspernatur
          </p>
        </div>
        <div className='box'>
          <ul className='links'>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              <a href='#import1'>Important Link 1</a>
            </li>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              <a href='#import2'>Important Link 2</a>
            </li>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              <a href='#import3'>Important Link 3</a>
            </li>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              <a href='#import4'>Important Link 4</a>
            </li>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              <a href='#import5'>Important Link 5</a>
            </li>
          </ul>
        </div>
        <div className='box'>
          <div className='line'>
            <i>
              <FaMapMarkerAlt />
            </i>
            <div className='info'>Egypt, Giza, Inside The Sphinx, Room Number 220</div>
          </div>
          <div className='line'>
            <i>
              <FaClock />
            </i>
            <div className='info'>Business Hours: From 10:00 To 18:00</div>
          </div>
          <div className='line'>
            <i>
              <FaPhoneVolume />
            </i>
            <div className='info'>
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
        <div className='box footer-gallery'>
          <img src={gallery_01} alt='' />
          <img src={gallery_02} alt='' />
          <img src={gallery_03} alt='' />
          <img src={gallery_04} alt='' />
          <img src={gallery_05} alt='' />
          <img src={gallery_06} alt='' />
        </div>
      </div>
      <p className='copyright'></p>
    </div>
  );
};

export default Footer;
