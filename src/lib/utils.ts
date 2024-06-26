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
 * @description Calculate the time spent on an activity
 * @param {number} hoursPerDay - The hours spent per day on the activity
 * @param {number} yearsLeft - The years left to perform the activity
 * @returns {{ days: number; weeks: number; months?: number; years: number }} The time spent on the activity
 * @example calculateTimeSpent(8, 80) // returns { days: 23360, weeks: 3340, months: 778, years: 64 }
 */
export const calculateTimeSpent = (
  hoursPerDay: number,
  yearsLeft: number,
): { days: number; weeks: number; months?: number; years: number } => {
  const days = (hoursPerDay / 24) * (yearsLeft * 365.25);
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365.25;

  if (hoursPerDay === 8) {
    return { days, weeks, months, years };
  }

  return { days, weeks, years };
};
