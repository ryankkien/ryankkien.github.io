import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API or mailto)
    // For now, just log to console and perhaps alert
    console.log({ name, email, message });
    alert("Message sent (logged to console)! You would integrate an email service here.");
    // Clear form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-10">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                placeholder="Your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Your message..." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
              rows={5}
            />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg">
              <Send className="mr-2 h-5 w-5" /> Send Message
            </Button>
          </div>
        </form>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-2">Alternatively, you can email me directly:</p>
          <a href="mailto:rkien29@gmail.com" className="inline-flex items-center text-lg text-primary hover:underline">
            <Mail className="mr-2 h-5 w-5" /> rkien29@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 