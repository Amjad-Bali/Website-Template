import "./WorksBoxs.css";

const WorksBoxs = (props) => {
  return (
    <div className='box'>
      <img src={props.image} alt='' />
      <div className='text'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default WorksBoxs;
