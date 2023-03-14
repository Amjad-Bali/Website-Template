import "./PricingBoxs.css";
import { FaCheck } from "react-icons/fa";

const PricingBoxs = (props) => {
  return (
    <div className={"box " + props.AddClass}>
      <div className='label'>Most Popular</div>
      <div className='title'>{props.title}</div>
      <img src={props.image} alt='' />
      <div className='price'>
        <span className='amount'>{props.amount}</span>
        <span className='time'>{props.time}</span>
      </div>
      <ul>
        {props.featurs.map((featur, key) => {
          return (
            <li key={key}>
              <span>
                <FaCheck />
              </span>
              {featur}
            </li>
          );
        })}
      </ul>
      <a href='#'>Choose Plan</a>
    </div>
  );
};

export default PricingBoxs;
