import React from 'react';
import './ChatMessage.css';
import Avatar from '../../assets/avatar';

// // user (user / chatgpt)
// // message - aonde vai estar o prompt
// // eslint-disable-next-line no-lone-blocks
// {
//   // eslint-disable-next-line no-unused-expressions
//   'gpt'
//   // eslint-disable-next-line no-unused-expressions
//   'crie um nome de arquivo'
// }

export const ChatMessage = ({ message }) => {
  return(
    <div className={`chat-message ${message.user === 'gpt'} && 'chatgpt'`}>
      <div className='chat-message-center'>
        <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>
          {message.user === 'gpt' && (
            <Avatar />
          )}
        </div>
        <div className='message'>
          {message.message}
        </div>
      </div>

    </div>
  )
}