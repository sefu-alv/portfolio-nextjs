import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      setErrorMessage('Name is required');
      return;
    }

    if (!email) {
      setErrorMessage('Email is required');
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    if (!message) {
      setErrorMessage('Message is required');
      return;
    }

   
    console.log('Form submitted with name:', name, 'email:', email, 'message:', message);
    setErrorMessage('');
  };

  return { name, setName, email, setEmail, message, setMessage, handleSubmit, errorMessage };
}