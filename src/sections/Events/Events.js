import { Container, Dots, MainHeading, Unit } from "../../components";
import events from "../../assets/events.png";
import "./Events.css";

const Events = () => {
  return (
    <div className='events' id='events'>
      <Dots position='dots-up' />
      <Dots position='dots-down' />
      <MainHeading>Events</MainHeading>
      <Container>
        <img src={events} alt='' />
        <div className='info'>
          <div className='time'>
            <Unit time='08' type='Days' />
            <Unit time='03' type='hours' />
            <Unit time='04' type='Minutes' />
            <Unit time='06' type='Seconds' />
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
