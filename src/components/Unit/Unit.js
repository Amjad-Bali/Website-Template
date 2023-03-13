import "./Unit.css";

const Unit = (props) => {
  return (
    <div className='unit'>
      <span>{props.time}</span>
      <span>{props.type}</span>
    </div>
  );
};

export default Unit;
