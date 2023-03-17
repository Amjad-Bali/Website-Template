import { Container, Dots, MainHeading, Unit } from "../../components";
import events from "../../assets/events.png";
import "./Events.css";
import { useState } from "react";

const Events = () => {
  //declear time state
  const [time, settime] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });
  //declear varibale for time event
  let endEvent = new Date("Mar 31, 2023 23:59:59").getTime();
  let nowDate, diffDate, days, hours, minutes, seconds;
  //Start interval
  let interval = setInterval(() => {
    nowDate = new Date().getTime();
    diffDate = endEvent - nowDate;
    if (diffDate > 0) {
      //Days
      days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
      days = days > 10 ? days : `0${days}`;
      //Hours
      hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      hours = hours > 10 ? hours : `0${hours}`;
      //Minutes
      minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
      minutes = minutes > 10 ? minutes : `0${minutes}`;
      //Second
      seconds = Math.floor((diffDate % (1000 * 60)) / 1000);
      seconds = seconds > 10 ? seconds : `0${seconds}`;

      settime({ days: days, hours: hours, minutes: minutes, seconds: seconds });
    } else {
      clearInterval(interval);
    }
  }, 1000);
  return (
    <div className='events' id='events'>
      <Dots position='dots-up' />
      <Dots position='dots-down' />
      <MainHeading>Events</MainHeading>
      <Container>
        <img src={events} alt='' />
        <div className='info'>
          <div className='time'>
            <Unit time={time.days} type='Days' />
            <Unit time={time.hours} type='hours' />
            <Unit time={time.minutes} type='Minutes' />
            <Unit time={time.seconds} type='Seconds' />
          </div>
          <h3>Tech Masters Event 2021</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium laboriosam
            pariatur architecto ab nesciunt?
          </p>
        </div>
        <div className='subscribe'>
          <form action=''>
            <input type='email' placeholder='Enter Your Email' />
            <input type='submit' value='Subscribe' />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Events;
