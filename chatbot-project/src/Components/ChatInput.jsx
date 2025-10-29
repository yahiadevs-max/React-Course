import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import dayjs from 'dayjs'
import LoadingSpinner from '../assets/loading-spinner.gif'

import './ChatInput.css'

export function ChatInput({ setMessages }) {
        const [inputValue, setInputValue] = useState('');
        const [isDisabled, setIsDisabled] = useState(false);

        const handleChange = (event) => {
          setInputValue(event.target.value);
        };

        const handleKeyDown = (event) => {
          if (event.key === 'Enter') {
            sendMessage();
          }
        };

        const sendMessage = async () => {
          if (isDisabled || inputValue === '') return;

          const newMessage = inputValue;
          setMessages((messages) => {
            return [
              ...messages,
              {
                id: crypto.randomUUID(),
                message: newMessage,
                sender: 'user',
                time: dayjs().format('HH:mma')
              }
            ];
          });

          setIsDisabled(true);
          setInputValue('');

          // Set a loading message for the chatbot.
          setMessages((messages) => {
            return [
              ...messages,
              {
                id: crypto.randomUUID(),
                message: <img src={LoadingSpinner} className="loading-spinner" />,
                sender: 'robot',
                time: dayjs().format('HH:mma')
              }
            ];
          });

          const response = await Chatbot.getResponseAsync(newMessage);

          setMessages((messages) => {
            return [
              ...messages.slice(0, messages.length - 1),
              {
                id: crypto.randomUUID(),
                message: response,
                sender: 'robot',
                time: dayjs().format('HH:mma')
              }
            ];
          });

          setIsDisabled(false);
        };

        function ClearMessages() {
          setMessages([]);
        }

        return (
          <div className="chat-input-container">
            <input
              className="chat-input"
              placeholder="Send a message to Chatbot"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <div>
            <button className="send-button" onClick={sendMessage}>
              Send
            </button>
            <button className="clear-button" onClick={ClearMessages}>
              Clear
            </button>
            </div>
          </div>
        );
      }