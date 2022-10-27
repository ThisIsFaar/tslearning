import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from '../models/Reminder';
import reminderService from './services/reminder';
import { useEffect, useState } from 'react';
import NewReminder from './components/NewReminder';

function App() {

  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(()=>{
    loadReminders()
  },[])

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders)
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(item=> item.id !== id ))
  }

  const addReminder = async (title: string ) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders ]);
    
  }

  return (
    <div className="App">
      <h1 className='text-center mb-5' >Reminder App</h1>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder = {removeReminder} />
    </div>
  );
}

export default App;
