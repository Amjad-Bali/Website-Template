import "./ArticlesBoxs.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const ArticlesBoxs = (props) => {
  return (
    <div className='box'>
      <img src={props.image} alt='' />
      <div className='content'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <div className='info'>
        <a href=''>Read More</a>
        <i>
          <FaLongArrowAltRight />
        </i>
      </div>
    </div>
  );
};

export default ArticlesBoxs;
