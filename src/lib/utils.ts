import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @description Calculate the days lived from a birth date
 * @param {string} birthDateStr - The birth date in string format
 * @returns {number} The days lived
 * @example calculateDaysLived("1990-01-01") // returns 11688
 */
export const calculateDaysLived = (birthDateStr: string): number => {
  const birthDate = new Date(birthDateStr);
  const actualDate = new Date();
  const timeDiff = actualDate.getTime() - birthDate.getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24));
};

/**
 *
 * @description Calculate the time spent sleeping
 * @param {number} hoursSlept - The hours slept per day
 * @param {number} yearsLifeLeft - The years left to live
 * @returns {{ days: number; weeks: number; months: number; years: number }} The time spent sleeping
 * @example calculateSleepTime(8, 80) // returns { days: 23360, weeks: 3340, months: 778, years: 64 }
 */
export const calculateSleepTime = (
  hoursSlept: number,
  yearsLifeLeft: number
): { days: number; weeks: number; months: number; years: number } => {
  const days = (hoursSlept / 24) * (yearsLifeLeft * 365.25);
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365.25;

  return { days, weeks, months, years };
};

/**
 * @description Calculate the time spent working
 * @param {number} hoursWorked - The hours worked per day
 * @param {number} workYearsLeft - The years left to work
 * @returns {{ days: number; weeks: number; years: number }} The time spent working
 * @example calculateWorkTime(8, 40) // returns { days: 11600, weeks: 1657, years: 32 }
 */
export const calculateWorkTime = (
  hoursWorked: number,
  workYearsLeft: number
): { days: number; weeks: number; years: number } => {
  const days = (hoursWorked / 24) * (workYearsLeft * 365.25);
  const weeks = days / 7;
  const years = days / 365.25;
  return { days, weeks, years };
};
