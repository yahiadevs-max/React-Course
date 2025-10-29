import { useEffect } from 'react'
import {Chatbot} from 'supersimpledev'
    
    
    function LoadResponses () {
        useEffect(() => {
                          Chatbot.addResponses({
                         'goodbye': 'Goodbye. Have a great day!',
                         'Did Ilyes loves Akram': 'Yes, ofcorse he did',
                         'How about Ines': 'I didnt think so.hahahahah',
                          'give me a unique id': function() {
                          return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;}
        });
        }, []);
      }

      export default LoadResponses