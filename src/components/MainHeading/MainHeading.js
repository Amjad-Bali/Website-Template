import "./MainHeading.css";

const MainHeading = (props) => {
  return (
    <>
      <h2 className='main-title'>{props.children}</h2>
    </>
  );
};

export default MainHeading;
