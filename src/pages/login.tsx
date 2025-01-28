// pages/login.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Button } from '@/components/atoms/_index';

export default function Login() {
  const router = useRouter();
  const { redirect } = router.query; // Extract the redirect query parameter
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      const redirectUrl = Array.isArray(redirect) ? redirect[0] : redirect;
      router.push(redirectUrl || '/');
    
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 rounded w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Button type="submit" className='w-full'>Login</Button>
        </form>
      </div>
    </div>
  );
}

