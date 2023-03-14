import { Container, MainHeading } from "../../components";
import { FaRandom } from "react-icons/fa";
import video_preview from "../../assets/video-preview.jpg";
import "./TopVideo.css";

const TopVideo = () => {
  const listVideos = [
    { id: "Video-01", name: "How To Create Sub Domain", time: "05:18" },
    { id: "Video-02", name: "Playing With The DNS", time: "03:18" },
    { id: "Video-03", name: "Everything About The Virtual Hosts", time: "09:36" },
    { id: "Video-04", name: "How To Monitor Your Website", time: "10:05" },
    { id: "Video-05", name: "Uncharted Beating The Last Boss", time: "03:12" },
    { id: "Video-06", name: "Ys Oath In Felghana Overview", time: "08:26" },
    { id: "Video-07", name: "Ys Series All Games Ending", time: "06:38" },
  ];
  return (
    <div className='videos'>
      <MainHeading>Top Video</MainHeading>
      <Container>
        <div className='holder'>
          <div className='list'>
            <div className='name'>
              Top Videos
              <i>
                <FaRandom />
              </i>
            </div>
            <ul>
              {listVideos.map((video) => {
                return (
                  <li key={video.id}>
                    {video.name}
                    <span>{video.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='preview'>
            <img src={video_preview} alt='' />
            <div className='info'>Everything About The Virtual Hosts</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopVideo;
