import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, X, Headphones, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Generate or retrieve session ID
const getSessionId = (): string => {
  try {
    const storageKey = 'manuv_chat_session_id';
    let sessionId = localStorage.getItem(storageKey);
    
    if (!sessionId) {
      // Generate a unique session ID
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem(storageKey, sessionId);
    }
    
    return sessionId;
  } catch (error) {
    // Fallback if localStorage is not available
    console.warn('localStorage not available, generating temporary session ID');
    return `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
  }
};

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export function ChatInterface({ isOpen, onClose, initialMessage }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasProcessedInitialMessage = useRef(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSendMessage = useCallback(async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get session ID
      const sessionId = getSessionId();
      
      // Prepare payload
      const payload = {
        message: text,
        sessionId: sessionId,
        timestamp: new Date().toISOString(),
      };

      // Log payload for debugging
      console.log('Sending to webhook:', payload);

      // Send message to webhook
      const response = await fetch('https://abhixchawla.app.n8n.cloud/webhook/manuvwebsite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Webhook response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Webhook error response:', errorText);
        throw new Error(`Webhook error: ${response.status} - ${errorText}`);
      }

      // Try to parse JSON, but handle text responses too
      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = text || { response: text };
      }

      console.log('Webhook response data:', data);
      
      // Handle different response formats
      let assistantContent = '';
      if (typeof data === 'string') {
        assistantContent = data;
      } else if (data.response || data.message || data.text) {
        assistantContent = data.response || data.message || data.text;
      } else if (data.data && (typeof data.data === 'string' || data.data.response || data.data.message)) {
        assistantContent = typeof data.data === 'string' ? data.data : (data.data.response || data.data.message);
      } else {
        // Fallback: stringify the response if it's an object
        assistantContent = JSON.stringify(data, null, 2);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent || 'I received your message, but the response format was unexpected.',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message to webhook:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Sorry, I encountered an error while processing your message. Please try again.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (initialMessage && isOpen && !hasProcessedInitialMessage.current) {
      hasProcessedInitialMessage.current = true;
      handleSendMessage(initialMessage);
    }
    
    if (!isOpen) {
      hasProcessedInitialMessage.current = false;
    }
  }, [initialMessage, isOpen, handleSendMessage]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Function to convert URLs in text to clickable links
  const renderMessageWithLinks = (text: string) => {
    // URL regex pattern
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline break-all"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />

          {/* Chat Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-black/95 backdrop-blur-xl border-l border-white/10 z-[9999] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative p-2 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg">
                  <Headphones className="w-5 h-5 text-primary" />
                  <Sparkles className="w-3 h-3 text-primary absolute -top-1 -right-1" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">Pesto</h2>
                  <p className="text-xs text-gray-400">AI Customer Service Representative</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="relative mb-4">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl">
                      <Headphones className="w-12 h-12 text-primary" />
                    </div>
                    <Sparkles className="w-4 h-4 text-primary absolute -top-1 -right-1 animate-pulse" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How can I help you?
                  </h3>
                  <p className="text-sm text-gray-400">
                    Ask me anything about our services or get support.
                  </p>
                </div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="relative p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg h-fit">
                      <Headphones className="w-4 h-4 text-primary" />
                      <Sparkles className="w-2 h-2 text-primary absolute -top-0.5 -right-0.5" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary/20 text-white'
                        : 'bg-white/5 text-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {renderMessageWithLinks(message.content)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  {message.role === 'user' && (
                    <div className="p-2 bg-primary/20 rounded-lg h-fit">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="relative p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg h-fit">
                    <Headphones className="w-4 h-4 text-primary" />
                    <Sparkles className="w-2 h-2 text-primary absolute -top-0.5 -right-0.5 animate-pulse" />
                  </div>
                  <div className="bg-white/5 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <form onSubmit={handleSubmit} className="flex items-center gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-3 bg-primary/20 hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-primary rounded-xl transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
