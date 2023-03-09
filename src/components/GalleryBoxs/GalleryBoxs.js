import "./GalleryBoxs.css";

const GalleryBoxs = (props) => {
  return (
    <div className='box'>
      <div className='image'>
        <img src={props.image} alt='' />
      </div>
    </div>
  );
};

export default GalleryBoxs;
