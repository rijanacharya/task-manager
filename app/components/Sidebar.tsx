// components/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white h-screen w-64 flex flex-col">
      <div className="flex-grow p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/calendar">Calendar</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="bg-gray-900 p-4">
        {/* Footer content */}
      </div>
    </aside>
  );
}
