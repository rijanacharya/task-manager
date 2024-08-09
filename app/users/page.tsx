'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<{ id: string; name: string  , email : string}[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} <br/>{user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;