import "./ServicesBoxs.css";

const ServicesBoxs = (props) => {
  return (
    <div className='box'>
      <i>{props.icon}</i>
      <h3>{props.title}</h3>
      <div className='info'>
        <a href='#details'>Details</a>
      </div>
    </div>
  );
};

export default ServicesBoxs;
