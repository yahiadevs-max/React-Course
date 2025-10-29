 import { useRef, useEffect } from 'react'
 import { ChatMessage } from './ChatMessage'

 import './ChatMessages.css'
 
  function ChatMessages({ messages, inputPosition }) {
        const containerRef = useRef(null);

        useEffect(() => {
          const containerElem = containerRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [messages, inputPosition]);

        return (
          <div
            className="chat-messages-container js-chat-message-container"
            ref={containerRef}
          >
            {messages.length === 0 ? (
              <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox {
                  inputPosition === 'top' ? 'above' : 'below'
                }
              </p>
            ) : (
              messages.map((message) => {
                return (
                  <ChatMessage
                    key={message.id}
                    message={message.message}
                    sender={message.sender}
                    time={message.time}
                  />
                );
              })
            )}
          </div>
        );
      }

      export default ChatMessages;