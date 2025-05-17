'use client';

import { useState } from 'react';

interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return undefined;
      case 'message':
        if (!value) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: ValidationErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key as keyof ValidationErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrors({});

    try {
      const response = await fetch('https://formspree.io/f/myzwopyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border transition-all duration-300 outline-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
              errors.name 
                ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300/50' 
                : 'border-neutral-200/50 focus:border-neutral-400 focus:ring-1 focus:ring-neutral-300/50'
            }`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border transition-all duration-300 outline-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
              errors.email 
                ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300/50' 
                : 'border-neutral-200/50 focus:border-neutral-400 focus:ring-1 focus:ring-neutral-300/50'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            rows={4}
            className={`w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border transition-all duration-300 outline-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] resize-none ${
              errors.message 
                ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300/50' 
                : 'border-neutral-200/50 focus:border-neutral-400 focus:ring-1 focus:ring-neutral-300/50'
            }`}
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-300 ${
          isSubmitting
            ? 'bg-neutral-400 cursor-not-allowed'
            : 'bg-neutral-900 hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98]'
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Sending...
          </div>
        ) : (
          'Send Message'
        )}
      </button>

      {submitStatus === 'success' && (
        <p className="text-green-600 text-center">Thanks for reaching out! I'll get back to you shortly :)</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
} 