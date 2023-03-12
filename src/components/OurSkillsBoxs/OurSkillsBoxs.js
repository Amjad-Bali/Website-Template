import "./OurSkillsBoxs.css";

const OurSkillsBoxs = (props) => {
  return (
    <div className='skill'>
      <h3>
        {props.name} <span>{props.num + "%"}</span>
      </h3>
      <div className='the-progress'>
        <span style={{ width: props.num + "%" }}></span>
      </div>
    </div>
  );
};

export default OurSkillsBoxs;
