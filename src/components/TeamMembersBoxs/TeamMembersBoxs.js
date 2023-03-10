import "./TeamMembersBoxs.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const TeamMembersBoxs = (props) => {
  return (
    <div className='box'>
      <div className='data'>
        <img src={props.image} alt='' />
        <div className='social'>
          <a href='#'>
            <i>
              <FaFacebook />
            </i>
          </a>
          <a href='#'>
            <i>
              <FaTwitter />
            </i>
          </a>
          <a href='#'>
            <i>
              <FaLinkedin />
            </i>
          </a>
          <a href='#'>
            <i>
              <FaYoutube />
            </i>
          </a>
        </div>
      </div>
      <div className='info'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default TeamMembersBoxs;
