import { useState, useEffect } from 'react'
import { stringify, parse } from "flatted"
import LoadResponses from './Components/LoadResponses'
import { ChatInput } from './Components/Chatinput'
import  ChatMessages  from './Components/ChatMessages'

import './App.css'

     function App() {
        const [messages, setMessages] = useState(
          (parse(localStorage.getItem('messages')) || []));
        const [inputPosition, setInputPosition] = useState(
          localStorage.getItem('inputPosition') || 'top');
     
        LoadResponses();

        const toggleInputPosition = () => {
          if (inputPosition === 'top') {
            setInputPosition('bottom');
            localStorage.setItem('inputPosition', 'bottom');
          } else {
            setInputPosition('top');
            localStorage.setItem('inputPosition', 'top');
          }
        };
          
          useEffect(() => {
          localStorage.setItem('messages', stringify(messages));
          }, [messages]); 

        return (
          <div className={
            `chatbot-container
            ${inputPosition === 'top'
              ? 'chatbot-container-top'
              : 'chatbot-container-bottom'
            }`
          }>
            <div className="position-switcher-container">
              <a className="position-switcher" onClick={toggleInputPosition}>
                Move textbox to {inputPosition === 'top' ? 'bottom' : 'top'}
              </a>
            </div>

            {inputPosition === 'top' ? (
              <>
                <ChatInput setMessages={setMessages} />
                <ChatMessages messages={messages} inputPosition={inputPosition} />
              </>
            ): (
              <>
                <ChatMessages messages={messages} inputPosition={inputPosition} />
                <ChatInput setMessages={setMessages} />
              </>
            )}
          </div>
        );
      }


export default App
