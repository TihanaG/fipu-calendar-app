export const getDaysInMonth = monthMoment => {
    const monthCopy = monthMoment.clone()
    monthCopy.startOf('month')

    let days = []
    while (monthCopy.month() === monthMoment.month()) {
        days.push(monthCopy.clone())
        monthCopy.add(1, 'days')
    }

    return days
}

/* Za dane iz proslog/sljedeceg mjeseca */
export const getDaysForWeeksInMonth = monthMoment => {
    const firstDayInMonth = monthMoment.clone().startOf('month')
    const mondayBeforeMonth = firstDayInMonth.clone().startOf('isoWeek')
    
    const lastDayInMonth = monthMoment.clone().endOf('month')
    const mondayAfterMonth = lastDayInMonth.clone()
        .endOf('isoWeek')
        .add(1, 'days')
        .startOf('day')
    
    const currentDay = mondayBeforeMonth.clone()
    let days = []
    
    while(!currentDay.isSame(mondayAfterMonth, 'date')) {
        days.push(currentDay.clone())
        currentDay.add(1, 'days')
    }

    return days;
}

export const segmentIntoWeeks = dayMoments => {
    let weeks = []
    let currentWeek = []

    for (let day of dayMoments) {
        currentWeek.push(day.clone())

        if (day.format('dddd') === 'Sunday') {
            weeks.push(currentWeek)
            currentWeek = []
        }
    }

    if (currentWeek.length > 0) {
        weeks.push(currentWeek)
    }

    return weeks
}

//fcje koje pomicu dane na kraj/pocetak u tablici
export const padWeekFront = (week, padWith = null) => {
    return [...Array(7 - week.length).fill(padWith), ...week]
}

export const padWeekBack = (week, padWith = null) => {
    return [...week, ...Array(7 - week.length).fill(padWith)]
}

export const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']