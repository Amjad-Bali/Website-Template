import "./Articles.css";
import { Container, MainHeading, ArticlesBoxs } from "../../components/index";
import ArticlesData from "../../Data/ArticlesData";

const Articles = () => {
  const Boxs = ArticlesData.map((box) => {
    return <ArticlesBoxs key={box.id} image={box.image} title={box.title} content={box.content} />;
  });
  return (
    <div className='articles'>
      <MainHeading>Articles</MainHeading>
      <Container>{Boxs}</Container>
    </div>
  );
};

export default Articles;
