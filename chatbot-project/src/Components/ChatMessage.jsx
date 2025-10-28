
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png' 
  
import './ChatMessage.css'

  export function ChatMessage({ message, user }) {
        return (
          <div className={`chat-message-container-${user}`}>
            {user === 'user' && (
              <>
                <p className="chat-message-contents">
                  {message}
                </p>
                <img src={UserProfileImage} className="chat-message-profile"/>
              </>
            )}
            {user === 'robot' && (
              <>
                <img src={RobotProfileImage} className="chat-message-profile"/>
                <p className="chat-message-contents">
                  {message}
                </p>
              </>
            )}
          </div>
        );
      }