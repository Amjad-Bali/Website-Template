import { Container, MainHeading, TeamMembersBoxs } from "../../components";
import teamMembersData from "../../Data/TeamMembersData";
import "./TeamMembers.css";

const TeamMembers = () => {
  const Boxs = teamMembersData.map((box) => {
    return (
      <TeamMembersBoxs
        key={box.id}
        image={box.image}
        name={box.name}
        description={box.description}
      />
    );
  });
  return (
    <div className='team'>
      <MainHeading>TeamMembers</MainHeading>
      <Container>{Boxs}</Container>
    </div>
  );
};

export default TeamMembers;
