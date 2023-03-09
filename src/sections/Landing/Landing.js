import "./Landing.css";
import { Container } from "../../components/index";
import { FaAngleDoubleDown } from "react-icons/fa";
import landigImage from "../../assets/landing-image.png";

const Landing = () => {
  return (
    <div className='landing'>
      <Container>
        <div className='text'>
          <h1>Welcome, To Elzero World</h1>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing,
            Stories and Events
          </p>
        </div>
        <div className='image'>
          <img src={landigImage} alt='' />
        </div>
        <a href='#articles' className='go-down'>
          <i>
            <FaAngleDoubleDown className='icon-down' />
          </i>
        </a>
      </Container>
    </div>
  );
};

export default Landing;
