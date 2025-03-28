import { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-400 text-gray-800 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </button>
      {isOpen && (
        <div className="glass p-4 rounded-lg mt-2 w-80 h-96 flex flex-col sm:w-64">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Live Chat</h3>
          <div className="flex-1 overflow-y-auto text-gray-200 dark:text-gray-400">
            <p className="mb-2">Welcome to Sankalp! How can we help you?</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 rounded-lg glass text-white dark:text-gray-200 focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      )}
    </div>
  );
}

export default ChatWidget;