import "./MegaMenuItems.css";

const MegaMenuItems = (props) => {
  return (
    <>
      <li>
        <a href={"#" + props.name}>
          <i>{props.icon}</i> {props.name}
        </a>
      </li>
    </>
  );
};

export default MegaMenuItems;
