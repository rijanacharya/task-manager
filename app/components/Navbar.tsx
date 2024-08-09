// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
            <Link href="/" className="text-xl font-bold">Task Manager</Link>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link href="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    );
}
