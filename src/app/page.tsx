"use client";
import { useState } from "react";
import { calculateDaysLived, calculateSleepTime } from "@/lib/utils";
import {
  Card,
  CardContent,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Separator,
  Skeleton,
  CardFooter,
} from "@/components/ui";
import {
  ModeToggle,
  CalculateForm,
  DataTable,
  renderWeekBoxes,
} from "@/components/";

export default function Home() {
  const [birthDate, setBirthDate] = useState<string>("1984-05-15");
  const [daysLived, setDaysLived] = useState<number | null>(null);
  const [weeksLived, setWeeksLived] = useState<number | null>(null);
  const [yearsLived, setYearsLived] = useState<number | null>(null);

  const [daysWorked, setDaysWorked] = useState<number>(0);
  const [yearsWorked, setYearsWorked] = useState<number>(23);
  const [weeksWorked, setWeeksWorked] = useState<number>(0);

  const [lifeExpectancy, setLifeExpectancy] = useState<number>(72);
  const [retirementAge, setRetirementAge] = useState<number>(65);

  const [daysLifeLeft, setDaysLifeLeft] = useState<number>(0);
  const [weeksLifeLeft, setWeeksLifeLeft] = useState<number>(0);
  const [yearsLifeLeft, setYearsLifeLeft] = useState<number>(0);

  const [workDaysLeft, setWorkDaysLeft] = useState<number>(0);
  const [workWeeksLeft, setWorkWeeksLeft] = useState<number>(0);
  const [workYearsLeft, setWorkYearsLeft] = useState<number>(0);

  const [sleepHoursPerDay, setSleepHoursPerDay] = useState<number>(8);
  // const [sleepHoursPerWeek, setSleepHoursPerWeek] = useState<number>(0);
  // const [sleepHoursPerMonth, setSleepHoursPerMonth] = useState<number>(0);
  // const [sleepHoursPerYear, setSleepHoursPerYear] = useState<number>(0);

  const [sleepDaysLeft, setSleepDaysLeft] = useState<number>(0);
  const [sleepWeeksLeft, setSleepWeeksLeft] = useState<number>(0);
  const [sleepMonthsLeft, setSleepMonthsLeft] = useState<number>(0);
  const [sleepYearsLeft, setSleepYearsLeft] = useState<number>(0);

  const handleCalculate = () => {
    const daysLived = calculateDaysLived(birthDate);
    setDaysLived(daysLived);
    const weeksLived = Math.floor(daysLived / 7);
    setWeeksLived(weeksLived);
    const yearsLived = Math.floor(daysLived / 365.25);
    setYearsLived(yearsLived);

    const daysWorked = Math.floor(yearsWorked * 365.25);
    setDaysWorked(daysWorked);
    const weeksWorked = Math.floor(daysWorked / 7);
    setWeeksWorked(weeksWorked);

    const yearsLifeLeft = lifeExpectancy - yearsLived;
    setYearsLifeLeft(yearsLifeLeft);
    const daysLifeLeft = lifeExpectancy * 365.25 - daysLived;
    setDaysLifeLeft(daysLifeLeft);
    const weeksLifeLeft = Math.floor(daysLifeLeft / 7);
    setWeeksLifeLeft(weeksLifeLeft);

    const workYearsLeft = retirementAge - yearsLived;
    setWorkYearsLeft(workYearsLeft);
    const workDaysLeft = Math.floor(workYearsLeft * 365.25);
    setWorkDaysLeft(workDaysLeft);
    const workWeeksLeft = Math.floor(workDaysLeft / 7);
    setWorkWeeksLeft(workWeeksLeft);

    const sleepTime = calculateSleepTime(sleepHoursPerDay, yearsLifeLeft);
    setSleepDaysLeft(Math.floor(sleepTime.days));
    setSleepWeeksLeft(Math.floor(sleepTime.weeks));
    setSleepMonthsLeft(Math.floor(sleepTime.months));
    setSleepYearsLeft(Math.floor(sleepTime.years));
  };

  return (
    <div className="relative min-h-screen">
      <ModeToggle className="absolute top-8 right-8" />
      <div className="max-w-7xl mx-auto p-8 font-mono ">
        <h1 className="text-2xl font-bold">
          The Scare Jump Procrastinator Calculator
        </h1>
        <main className="flex gap-8 mt-8 min-h-screen">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={35}>
              <Card className="font-mono p-4 rounded-none">
                <CalculateForm
                  birthDate={birthDate}
                  setBirthDate={setBirthDate}
                  lifeExpectancy={lifeExpectancy}
                  setLifeExpectancy={setLifeExpectancy}
                  yearsWorked={yearsWorked}
                  setYearsWorked={setYearsWorked}
                  retirementAge={retirementAge}
                  setRetirementAge={setRetirementAge}
                  sleepHoursPerDay={sleepHoursPerDay}
                  setSleepHoursPerDay={setSleepHoursPerDay}
                  handleCalculate={handleCalculate}
                />
                <Separator />
                <DataTable
                  daysLived={daysLived}
                  weeksLived={weeksLived}
                  yearsLived={yearsLived}
                  daysWorked={daysWorked}
                  weeksWorked={weeksWorked}
                  yearsWorked={yearsWorked}
                  workDaysLeft={workDaysLeft}
                  workWeeksLeft={workWeeksLeft}
                  workYearsLeft={workYearsLeft}
                  sleepDaysLeft={sleepDaysLeft}
                  sleepWeeksLeft={sleepWeeksLeft}
                  sleepYearsLeft={sleepYearsLeft}
                  daysLifeLeft={daysLifeLeft}
                  weeksLifeLeft={weeksLifeLeft}
                  yearsLifeLeft={yearsLifeLeft}
                />
              </Card>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={65}>
              <Card className="rounded-none py-4 px-2 h-full">
                <CardContent>
                  <div className="text-center pt-6 pb-1">
                    <h3 className="text-[12px] leading-none h-4">Weeks</h3>
                  </div>
                  <div className="flex flex-row justify-between gap-1 pl-8">
                    {Array.from({ length: 52 }).map((_, i) => (
                      <div key={i} className="text-[7px] w-full text-right">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1 mt-1">
                    <div className="flex items-center w-4">
                      <h3 className="text-[12px] leading-none vertical rotate-180">
                        Years
                      </h3>
                    </div>
                    <div className="flex flex-col items-end justify-between w-3">
                      {Array.from({
                        length:
                          daysLived !== null ? Number(lifeExpectancy) : 20,
                      }).map((_, i) => (
                        <div key={i} className="text-[8px]">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      {daysLived !== null ? (
                        <div className="boxes">
                          {renderWeekBoxes(
                            weeksLived ?? 0,
                            (lifeExpectancy ?? 0) * 52,
                            weeksWorked ?? 0,
                            workWeeksLeft,
                            sleepWeeksLeft,
                            birthDate
                          )}
                        </div>
                      ) : (
                        <Skeleton className="w-full h-auto aspect-video" />
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-start pl-14">
                  <p className="text-xs">
                    * Each row represents a year of 52 weeks, each box
                    represents a week.
                  </p>
                </CardFooter>
              </Card>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </div>
    </div>
  );
}
