import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text)
        {
            alert("Please add a task!")
            return
        }
        onAdd({text,day,reminder})
        {
            setText('')
            setDay('')
            setReminder(false)
        }
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <textarea placeholder="Add Task..." value={text} onChange={(e) => setText(e.target.value)} cols="60" rows="5"></textarea>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Specify Date & Time" />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

export default AddTask