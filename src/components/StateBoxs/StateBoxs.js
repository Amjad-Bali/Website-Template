import "./StateBoxs.css";

const StateBoxs = (props) => {
  return (
    <div className='box'>
      <i>{props.icon}</i>
      <span className='number' data-goal='150'>
        {props.number}
      </span>
      <span className='text'>{props.text}</span>
    </div>
  );
};

export default StateBoxs;
