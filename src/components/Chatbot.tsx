import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Mail, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string | React.ReactNode;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm DEC Experts' assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({ email: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string | React.ReactNode, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const getBotResponse = (userMessage: string): React.ReactNode => {
    const message = userMessage.toLowerCase();

    if (
      message.includes('technical') ||
      message.includes('complex') ||
      message.includes('urgent') ||
      message.includes('help me') ||
      message.includes('critical') ||
      message.includes('emergency')
    ) {
      setShowEmailForm(true);
      return (
        <div className="flex items-start">
          <HelpCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-brand-navy" />
          <div>
            <p className="font-medium">Critical/Technical Question Detected</p>
            <p>For detailed assistance, please provide your email below so our experts can contact you.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-start">
        <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-brand-navy" />
        <div>
          <p>Thanks for your question! Please send your email, and I’ll provide the details.</p>
        </div>
      </div>
    );
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    addMessage(inputText, false);
    setInputText('');
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getBotResponse(inputText);
      addMessage(response, true);
      setIsTyping(false);
    }, 1000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailData.email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Email Received!",
      description: "Our team will contact you shortly.",
    });
    
    addMessage(
      <div className="flex items-start">
        <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-500" />
        <div>
          <p className="font-medium">Thank you!</p>
          <p>We’ve received your email and will respond soon.</p>
        </div>
      </div>,
      true
    );
    
    setEmailData({ email: '' });
    setShowEmailForm(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-gradient-to-br from-brand-navy to-blue-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 ${
          isOpen ? 'hidden' : 'flex items-center justify-center'
        }`}
        style={{ width: '60px', height: '60px' }}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-navy to-blue-700 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-full">
                <Bot className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <span className="font-semibold">DEC Experts Assistant</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                  <span className="text-xs">Online now</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[90%] p-3 rounded-xl text-sm ${
                    message.isBot
                      ? 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                      : 'bg-gradient-to-r from-blue-600 to-brand-navy text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && (
                      <div className="bg-brand-navy p-1 rounded-full">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                    )}
                    {!message.isBot && (
                      <div className="bg-white p-1 rounded-full">
                        <User className="w-3 h-3 text-brand-navy" />
                      </div>
                    )}
                    <div className="flex-1">
                      {typeof message.text === 'string' ? (
                        <p className="leading-relaxed">{message.text}</p>
                      ) : (
                        message.text
                      )}
                      <div className="text-xs text-gray-500 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="bg-brand-navy p-1 rounded-full">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Email Form */}
          {showEmailForm && (
            <div className="p-4 border-t border-gray-200 bg-white">
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Your Email*</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={emailData.email}
                    onChange={(e) => setEmailData({ email: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent text-sm"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-brand-navy to-blue-700 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Input */}
          {!showEmailForm && (
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${
                    inputText.trim()
                      ? 'bg-brand-navy text-white hover:bg-blue-700'
                      : 'bg-gray-200 text-gray-400'
                  } transition-colors`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;