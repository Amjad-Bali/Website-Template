import "./Gallery.css";
import { Container, GalleryBoxs, MainHeading } from "../../components";
import GalleryData from "../../Data/GalleryData";

const Gallery = () => {
  const Boxs = GalleryData.map((box) => {
    return <GalleryBoxs key={box.id} image={box.image} />;
  });
  return (
    <div className='gallery'>
      <MainHeading>Gallery</MainHeading>
      <Container>{Boxs}</Container>
    </div>
  );
};

export default Gallery;
