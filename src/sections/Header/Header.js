import "./Header.css";
import { Container, MegaMenu } from "../../components/index";
import { useRef } from "react";

const Header = () => {
  const link = useRef();
  const showMenu = (e) => {
    e.stopPropagation();
    const megaMenu = document.querySelector(".header .main-nav li:last-child .mega-menu");
    megaMenu.classList.toggle("show");
  };
  document.addEventListener("click", function (e) {
    if (e.target !== link.current) {
      const megaMenu = document.querySelector(".header .main-nav li:last-child .mega-menu");
      megaMenu.classList.remove("show");
    }
  });
  return (
    <div className='header' id='header'>
      <Container>
        <a className='logo' href='#website'>
          Site
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
            <a href='#other' ref={link} onClick={showMenu}>
              Other Links
            </a>
            <MegaMenu />
            <MegaMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
