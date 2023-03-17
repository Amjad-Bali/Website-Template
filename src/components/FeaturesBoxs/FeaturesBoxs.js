import "./FeaturesBoxs.css";

const FeaturesBoxs = (props) => {
  return (
    <div className={"box " + props.title}>
      <div className='image-holder'>
        <img src={props.image} alt='' />
      </div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <a href='#more'>More</a>
    </div>
  );
};

export default FeaturesBoxs;
