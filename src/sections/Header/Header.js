import "./Header.css";
import { Container, MegaMenu } from "../../components/index";

const Header = () => {
  const showMenu = (e) => {
    const megaMenu = document.querySelector(".header .main-nav li:last-child .mega-menu");
    megaMenu.classList.toggle("show");
  };
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
            <a href='#' onClick={showMenu}>
              Other Links
            </a>
            <MegaMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
