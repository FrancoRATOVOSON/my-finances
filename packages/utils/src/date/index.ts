import * as dateFns from "date-fns"
import { CycleInterval } from "..";

interface MonthYear {
  month: number,
  year: number
}

interface MonthCycleIntervalParams {
  date: Date,
  day?: number
}

export function getMonthCycleInterval(
  {date, day=8}:MonthCycleIntervalParams
):CycleInterval {
  const startedAt = dateFns.setDate(date, day)  
  return {
    startedAt,
    endedAt: isThisMonth(startedAt) ? addMonth(startedAt) : null
  }
}

export function getDateMonthYear(date:Date):MonthYear {
  return {
    month: dateFns.getMonth(date),
    year: dateFns.getYear(date)
  }
}

export function getCurrentMonthYear():MonthYear {
  return getDateMonthYear(new Date())
}

export function isThisMonth(date:Date):boolean {
  return dateFns.isThisYear(date) && dateFns.isThisMonth(date)
}

export function addMonth(date:Date, amount:number=1):Date {
  return dateFns.addMonths(date, amount)
}

export function subMonth(date:Date, amount:number=1):Date {
  return dateFns.subMonths(date, amount)
}
