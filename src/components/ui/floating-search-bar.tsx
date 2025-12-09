import { useState, useRef } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingSearchBarProps {
  onSendMessage: (message: string) => void;
  onOpenChat: () => void;
}

export function FloatingSearchBar({ onSendMessage, onOpenChat }: FloatingSearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[99999] w-full max-w-2xl px-4 pointer-events-auto"
      style={{ zIndex: 99999 }}
    >
      <form onSubmit={handleSubmit} className="relative">
        <motion.div
          animate={{
            scale: isFocused ? 1.02 : 1,
            boxShadow: isFocused 
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
              : '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
          }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center gap-3 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl"
        >
          <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
          
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything!"
            className="flex-1 bg-transparent text-white placeholder:text-gray-400 outline-none text-sm"
          />

          <AnimatePresence>
            {inputValue ? (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                type="submit"
                className="p-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                type="button"
                onClick={onOpenChat}
                className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </form>
    </motion.div>
  );
}
