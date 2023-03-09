import "./MegaMenu.css";
import megamenu from "../../assets/megamenu.png";
import MegaMenuItemsDataOne, { MegaMenuItemsDataTwo } from "../../Data/MegaMenuItemsData";
import { MegaMenuItems } from "../index";

const MegaMenu = () => {
  const MegaItemsOne = MegaMenuItemsDataOne.map((item) => {
    return <MegaMenuItems key={item.id} name={item.name} icon={item.icon} />;
  });
  const MegaItemsTwo = MegaMenuItemsDataTwo.map((item) => {
    return <MegaMenuItems key={item.id} name={item.name} icon={item.icon} />;
  });
  return (
    <>
      <div className='mega-menu'>
        <div className='image'>
          <img src={megamenu} alt='' />
        </div>
        <ul className='links'>{MegaItemsOne}</ul>
        <ul className='links'>{MegaItemsTwo}</ul>
      </div>
    </>
  );
};

export default MegaMenu;
