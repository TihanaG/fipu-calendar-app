import React from 'react'
import { Calendar } from './Calendar'
import moment from 'moment'
import { useState } from 'react'
import { DatePickerCell } from './DatePickerCell'

export const DatePickerController = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    const today = moment()
    const [currentMonthMoment, setCurrentMonthMoment] = useState(today)

      const incrementMonth = () => {
        const newMonth = moment(currentMonthMoment.add(1, 'months'))
        setCurrentMonthMoment(newMonth)
    }

    const decrementMonth = () => {
        const newMonth = moment(currentMonthMoment.subtract(1, 'months'))
        setCurrentMonthMoment(newMonth)
    }

    const onDateSelected = (date, month, year) => {
        setSelectedDate(moment(`${date}${month}${year}`, 'DD/MM/YYYY'))
    }

    return (
        <>
        <input
            readOnly
            value={selectedDate ? selectedDate.format('DD/MM/YYYY') : ''} />
        <Calendar
            getCellProps={(dayMoment) => {
                return {
                    isSelected: dayMoment.isSame(selectedDate, 'date')
                }
            }}
            onCellClicked={onDateSelected}
            month={currentMonthMoment.format('MM')}
            year={currentMonthMoment.format('YYYY')}
            onPrev={decrementMonth}
            onNext={incrementMonth}
            cellComponent={DatePickerCell} />
        </>
    )
}
