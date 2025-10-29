
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png' 

import './ChatMessage.css'

  export function ChatMessage({ message, sender, time}) {
        return (
          <div className={`chat-message-container-${sender}`}>
            {sender === 'user' && (
              <>
                <div className="chat-message-contents">
                  {message}
                <div className="chat-message-time">
                  {time}
                </div>
                </div>
                <img src={UserProfileImage} className="chat-message-profile"/>
               </>
            )}
            {sender === 'robot' && (
              <>
                <img src={RobotProfileImage} className="chat-message-profile"/>
                <div className="chat-message-contents">
                  {message}
                 <div className="chat-message-time">
                  {time}
                </div>
                </div>
              </>
            )}
          </div>
        );
      }