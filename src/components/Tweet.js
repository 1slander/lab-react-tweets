import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Action from "./Action";

function Tweet({ tweet }) {
  const { user, timestamp, message } = tweet;

  return (
    <div className="tweet">
      <ProfileImage image={user.image}/>
      <div className="body">
        <div className="top">
          
          <User name={user.name} handle={user.handle}/>

          <Timestamp time={timestamp}/>
        </div>

        <Message message={message}/>
        <Action/>
        
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
