import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ChatContextType {
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  initialMessage: string | undefined;
  setInitialMessage: (message: string | undefined) => void;
  handleSendMessage: (message: string) => void;
  handleOpenChat: () => void;
  handleCloseChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState<string | undefined>();

  const handleSendMessage = (message: string) => {
    setInitialMessage(message);
    setIsChatOpen(true);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setInitialMessage(undefined);
  };

  return (
    <ChatContext.Provider
      value={{
        isChatOpen,
        setIsChatOpen,
        initialMessage,
        setInitialMessage,
        handleSendMessage,
        handleOpenChat,
        handleCloseChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
