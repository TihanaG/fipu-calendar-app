import React from 'react'
import { useState } from 'react'

export const NewEventForm = ({ onSubmit }) => {
    const moment = require('moment')
    const thisMoment = moment().format('DD/MM/YYYY HH:mm')

    const [name, setName] = useState('')
    const [time,] = useState(thisMoment)

    return (
        <>
        <input
            placeholder='Event Name'
            value={name}
            onChange={e => setName(e.target.value)} />
        <input
            placeholder={thisMoment}
            value={time}
            onChange={time} />
        <button onClick={() => onSubmit(name, thisMoment)}>Create</button>
        </>
    )
}
