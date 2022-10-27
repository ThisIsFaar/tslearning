import React from 'react'
import Reminder from '../../models/Reminder';

interface ReminderListProps {
    items: Reminder[],
    onRemoveReminder: (id: number)=> void;
}


export default function ReminderList({items,onRemoveReminder}: ReminderListProps) {
  return (
    <div>
        <ul className='list-group'>
            {
                items.map((item, key)=>{
                    return (
                        <li className='list-group-item' key={key}>{item.title}
                        <button className='btn btn-danger rounded-pill mx-2' onClick={()=>{onRemoveReminder(item.id)}}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
