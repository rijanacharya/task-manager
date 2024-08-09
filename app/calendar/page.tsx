'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState, useEffect } from 'react';
import { Task } from '../models/task'; // Assuming Task model is in the same directory

function CalendarPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from your data source
  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchTasks = async () => {
      const fetchedTasks = await fetch(`http://localhost:5000/api/tasks`)
      .then(response => response.json())
      .then(data => data); 
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  const events = tasks.map((task) => ({
    title: task.title,
    start: task.dueDate,
    // Add other event properties as needed, e.g., color, extendedProps
  }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      // Add other FullCalendar configurations
    />
  );
}

export default CalendarPage;
