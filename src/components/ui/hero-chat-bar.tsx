import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '../../contexts/ChatContext';

interface HeroChatBarProps {
  onSendMessage: (message: string) => void;
  onOpenChat: () => void;
  isFloating?: boolean;
}

export function HeroChatBar({ onSendMessage, onOpenChat, isFloating = false }: HeroChatBarProps) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isChatOpen } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      onOpenChat();
      setInputValue('');
      inputRef.current?.blur();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Hide when chat is open
  if (isChatOpen && isFloating) {
    return null;
  }

  return (
    <motion.div
      initial={isFloating 
        ? { opacity: 0, x: -100, scale: 0.9 } 
        : { opacity: 0, x: -50, y: 10 }}
      animate={isFloating 
        ? { opacity: 1, x: 0, scale: 1 } 
        : { opacity: 1, x: 0, y: 0 }}
      exit={isFloating 
        ? { opacity: 0, x: 100, scale: 0.9 } 
        : { opacity: 0, x: -50, y: 10 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.4 },
        x: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      }}
      className={isFloating ? "w-full" : "mb-6"}
      style={isFloating ? undefined : undefined}
    >
      <form onSubmit={handleSubmit} className="relative">
        <motion.div
          animate={{
            scale: isFocused ? 1.02 : 1,
            borderColor: isFocused 
              ? 'rgba(59, 130, 246, 0.6)' 
              : isFloating 
                ? 'rgba(59, 130, 246, 0.4)' 
                : 'rgba(59, 130, 246, 0.3)',
            boxShadow: isFloating 
              ? (isFocused 
                ? '0 20px 25px -5px rgba(59, 130, 246, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)'
                : '0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2), 0 0 20px rgba(59, 130, 246, 0.15)')
              : (isFocused
                ? '0 8px 16px -4px rgba(59, 130, 246, 0.4), 0 0 25px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.15)'
                : '0 4px 12px -2px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)'),
            backgroundColor: isFloating 
              ? (isFocused ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.9)')
              : (isFocused ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)'),
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`relative flex items-center gap-2 backdrop-blur-xl rounded-full px-4 py-2.5 shadow-lg border-2 ${isFloating ? 'max-w-md' : 'max-w-md'}`}
        >
          {/* Glow effect overlay */}
          {!isFloating && (
            <motion.div
              animate={{
                opacity: isFocused ? 0.6 : 0.4,
                scale: isFocused ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-full blur-xl -z-10"
            />
          )}
          <motion.div
            animate={{
              scale: isFocused ? 1.1 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle className={`w-4 h-4 flex-shrink-0 ${isFocused ? 'text-primary' : isFloating ? 'text-primary/90' : 'text-primary/80'}`} />
          </motion.div>
          
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything!"
            className={`flex-1 bg-transparent text-white placeholder:text-sm outline-none text-sm transition-colors ${
              isFloating ? 'placeholder:text-primary/60' : 'placeholder:text-gray-400'
            }`}
          />

          <AnimatePresence>
            {inputValue ? (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className={`p-1.5 rounded-full transition-all ${
                  isFloating 
                    ? 'bg-primary/30 hover:bg-primary/40 text-primary shadow-[0_0_15px_rgba(59,130,246,0.4)]' 
                    : 'bg-primary/20 hover:bg-primary/30 text-primary'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            ) : (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={onOpenChat}
                className={`p-1.5 rounded-full transition-all ${
                  isFloating 
                    ? 'bg-primary/20 hover:bg-primary/30 text-primary/80' 
                    : 'bg-white/5 hover:bg-white/10 text-gray-400'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </form>
    </motion.div>
  );
}
