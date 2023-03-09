import "./Header.css";
import { Container, MegaMenu } from "../../components/index";

const Header = () => {
  return (
    <div className='header' id='header'>
      <Container>
        <a className='logo' href='#'>
          Elzero
        </a>
        <ul className='main-nav'>
          <li>
            <a href='#articles'>Articles</a>
          </li>
          <li>
            <a href='#gallery'>Gallery</a>
          </li>
          <li>
            <a href='#features'>Features</a>
          </li>
          <li>
            <a href='#'>Other Links</a>
            <MegaMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
