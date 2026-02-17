"use client";

import { motion } from "framer-motion";
import { X, Send, Mail, User, MessageSquare } from "lucide-react";
import { useEffect, useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    // EmailJS template parameters
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      // Send email using EmailJS (with auto-reply enabled in template)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus('success');
      // Auto-close after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email me directly at pathakabhinav.cw@gmail.com');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-background border border-card-border w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-card border border-card-border rounded-full text-foreground hover:bg-accent hover:text-accent-foreground transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">
              Let's Connect
            </h2>
            <p className="text-gray-500">Have a project in mind? Send me a direct message.</p>
          </div>

          {status === 'success' ? (
            <div className="h-[300px] flex flex-col items-center justify-center text-center text-accent">
              <Send size={48} className="mb-4 animate-bounce" />
              <p className="font-bold text-xl">Message Sent!</p>
              <p className="text-gray-500 text-sm mt-2">Check your inbox for a confirmation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-500" size={18} />
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-card border border-card-border rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 text-gray-500" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === 'submitting'}
                    className="w-full bg-card border border-card-border rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-500 ml-1">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 text-gray-500" size={18} />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    disabled={status === 'submitting'}
                    className="w-full bg-card border border-card-border rounded-xl py-3 pl-12 pr-4 text-foreground focus:outline-none focus:border-accent transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl mt-4 hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
