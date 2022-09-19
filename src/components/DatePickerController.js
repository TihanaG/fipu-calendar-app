import React from 'react'
import { Calendar } from './Calendar'
import moment from 'moment'
import { useState } from 'react'
import { PillCell } from './PillCell'

const getPreviousDateIsSelected = (dateMoment, selectedDates) => {
    const oneDayBefore = dateMoment.clone().subtract(1, 'day')
    return selectedDates.some(date => date.isSame(oneDayBefore, 'date'))
}

const getNextDateIsSelected = (dateMoment, selectedDates) => {
    const oneDayAfter = dateMoment.clone().add(1, 'day')
    return selectedDates.some(date => date.isSame(oneDayAfter, 'date'))
}

const getDatePosition = (dateMoment, selectedDates) => {
    const previousIsSelected = getPreviousDateIsSelected(dateMoment, selectedDates)
    const nextIsSelected = getNextDateIsSelected(dateMoment, selectedDates)
    const isSelected = selectedDates.some(date => date.isSame(dateMoment, 'date'))
    
    return {
        isSelected,
        isStart: isSelected && !previousIsSelected && nextIsSelected,
        isEnd: isSelected && previousIsSelected && !nextIsSelected,
        isInBetween: isSelected && previousIsSelected && nextIsSelected
    }
}

export const DatePickerController = () => {
    const [selectedDates, setSelectedDates]  = useState([])

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
        const clickedMoment = moment(`${date}${month}${year}`, 'DD/MM/YYYY')
        
        const isSelected = selectedDates.some(date => date.isSame(clickedMoment, 'date'))

        if (isSelected) {
            setSelectedDates(selectedDates.filter(date => !date.isSame(clickedMoment, 'date')))
        } else {
            setSelectedDates(selectedDates.concat(clickedMoment))
        }
    }

    return (
        <>
        <input
            readOnly
            value={selectedDates.map(date => date.format('DD/MM/YYYY')).join(', ')} />
        <Calendar
            getCellProps={(date, month, year) => {
                const dayMoment = moment(`${date}${month}${year}`, 'DDMMYYYY')
                const { isSelected, isStart, isEnd, isInBetween } = getDatePosition(dayMoment, selectedDates)

                return {
                    isSelected,
                    isStart,
                    isEnd,
                    isInBetween
                }
            }}
            onCellClicked={onDateSelected}
            month={currentMonthMoment.format('MM')}
            year={currentMonthMoment.format('YYYY')}
            onPrev={decrementMonth}
            onNext={incrementMonth}
            cellComponent={PillCell} />
        </>
    )
}
