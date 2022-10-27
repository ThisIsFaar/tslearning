import React, { useState } from 'react'


interface NewReminderProps {
    onAddReminder: (title: string) => void;
}


export default function NewReminder( {onAddReminder}: NewReminderProps) : JSX.Element{

    const [title, setTitle] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if( !title ) return;
        onAddReminder(title)
        setTitle('')
        
    }
  return (
    <form className='my-2' onSubmit={submitForm} >
        <input id='title' placeholder='Write New Reminder...' value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control" />
        <button type='submit' className="btn btn-primary my-3 rounded rounded-pill">Add Reminder</button>
    </form>
  )
}
