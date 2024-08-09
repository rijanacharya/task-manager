'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function AddUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add other fields as needed
  });

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/api/users',
            {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify(formData),
           
               });

      if (response.ok) {
        // Handle successful user creation
        router.push('/users'); // Redirect to user list page or any other desired page
      } else {
        // Handle error
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
        </label>
        <label>
            Email:
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </label>
      <button type="submit" >Add User</button>
    </form>
  );
}
