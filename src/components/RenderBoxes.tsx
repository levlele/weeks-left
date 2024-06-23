import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const boxesVariants = cva("w-full aspect-square", {
  variants: {
    variant: {
      default: "bg-secondary",
      lived: "bg-red-900",
      worked: "bg-red-700",
      workLeft: "bg-green-900",
      sleepLeft: "bg-green-700",
      lifeLeft: "bg-green-500",
      remaining: "bg-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const getWeekOfYear = (date: Date) => {
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date.getTime() - start.getTime();
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.floor(diff / oneWeek);
};

export const renderWeekBoxes = (
  weeksLived: number,
  totalWeeks: number,
  weeksWorked: number,
  workWeeksLeft: number,
  sleepWeeksLeft: number,
  birthDate: string,
) => {
  const birthDateObj = new Date(birthDate);
  const startWeek = getWeekOfYear(birthDateObj);
  const boxes = [];

  for (let weeks = 0; weeks < totalWeeks; weeks++) {
    let boxVariant:
      | "default"
      | "lived"
      | "worked"
      | "workLeft"
      | "sleepLeft"
      | "lifeLeft"
      | "remaining" = "default";

    if (weeks >= startWeek && weeks < startWeek + weeksLived - weeksWorked) {
      boxVariant = "lived";
    } else if (
      weeks >= startWeek + weeksLived - weeksWorked &&
      weeks < startWeek + weeksLived
    ) {
      boxVariant = "worked";
    } else if (
      weeks >= startWeek + weeksLived &&
      weeks < startWeek + weeksLived + workWeeksLeft
    ) {
      boxVariant = "workLeft";
    } else if (
      weeks >= startWeek + weeksLived + workWeeksLeft &&
      weeks < startWeek + weeksLived + workWeeksLeft + sleepWeeksLeft
    ) {
      boxVariant = "sleepLeft";
    } else if (
      weeks >= startWeek + weeksLived + workWeeksLeft + sleepWeeksLeft &&
      weeks < totalWeeks
    ) {
      boxVariant = "lifeLeft";
    } else {
      boxVariant = "remaining";
    }

    boxes.push(
      <div
        key={weeks}
        className={cn(boxesVariants({ variant: boxVariant }))}
      />,
    );
  }
  return boxes;
};
