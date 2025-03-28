import { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const ChatButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #facc15;
  color: #1f2937;
  padding: 1rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: #f4d03f;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 20rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  z-index: 30;

  @media (max-width: 640px) {
    width: 16rem;
  }
`;

const ChatTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #facc15;
  margin-bottom: 0.5rem;
`;

const ChatContent = styled.div`
  flex: 1;
  overflow-y: auto;
  color: #d1d5db;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;

  &:focus {
    border-color: #facc15;
    box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.3);
  }
`;

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ChatButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </ChatButton>
      {isOpen && (
        <ChatWindow>
          <ChatTitle>Live Chat</ChatTitle>
          <ChatContent>
            <p style={{ marginBottom: '0.5rem' }}>Welcome to Sankalp! How can we help you?</p>
          </ChatContent>
          <ChatInput type="text" placeholder="Type a message..." />
        </ChatWindow>
      )}
    </div>
  );
}

export default ChatWidget;