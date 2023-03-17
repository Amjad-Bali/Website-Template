import { useEffect } from "react";
import "./OurSkillsBoxs.css";

const OurSkillsBoxs = (props) => {
  useEffect(() => {
    let skills = document.querySelector(".our-skills");
    let progress = Array.from(document.querySelectorAll(".our-skills .skills .the-progress span"));
    let progressText = Array.from(document.querySelectorAll(".our-skills .skills h3 span"));
    let number = [90, 80, 70, 60];
    let isRun = true;
    window.addEventListener("scroll", function () {
      if (window.scrollY >= skills.offsetTop) {
        if (isRun) {
          progress.map((propgres, index) => {
            return (propgres.style.width = number[index] + "%");
          });
          progressText.map((text, index) => {
            let num = 0;
            let interval = setInterval(() => {
              text.innerText = num++ + "%";
              if (num > number[index]) clearInterval(interval);
            }, 15);
          });
          isRun = false;
        }
      }
    });
  }, []);

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
