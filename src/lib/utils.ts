import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateDaysLived = (birthDateStr: string): number => {
  const birthDate = new Date(birthDateStr);
  const actualDate = new Date();
  const timeDiff = actualDate.getTime() - birthDate.getTime();
  return Math.floor(timeDiff / (1000 * 3600 * 24));
};

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

export const calculateWorkTime = (
  hoursWorked: number,
  workYearsLeft: number
): { days: number; weeks: number; years: number } => {
  const days = (hoursWorked / 24) * (workYearsLeft * 365.25);
  const weeks = days / 7;
  const years = days / 365.25;
  return { days, weeks, years };
};
