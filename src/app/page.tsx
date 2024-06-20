"use client";
import { useState } from "react";
import { ThemeProvider, LanguageProvider, useLanguage } from "@/context/";
import {
  calculateDaysLived,
  calculateSleepTime,
  calculateWorkTime,
} from "@/lib/utils";
import {
  Card,
  Separator,
  CardFooter,
  CalculateWeeks,
  DataTable,
  LanguageToggle,
  ThemeToggle,
  RenderWeeks,
} from "@/components/";
import texts from "@/locales/texts.json";

function HomeContent() {
  const { language } = useLanguage();

  const [lifeExpectancy, setLifeExpectancy] = useState<number | null>(null);

  const [birthDate, setBirthDate] = useState<string>("");
  const [daysLived, setDaysLived] = useState<number>(0);
  const [weeksLived, setWeeksLived] = useState<number>(0);
  const [yearsLived, setYearsLived] = useState<number>(0);

  const [daysWorked, setDaysWorked] = useState<number>(0);
  const [yearsWorked, setYearsWorked] = useState<number | null>(null);
  const [weeksWorked, setWeeksWorked] = useState<number>(0);

  const [daysLifeLeft, setDaysLifeLeft] = useState<number>(0);
  const [weeksLifeLeft, setWeeksLifeLeft] = useState<number>(0);
  const [yearsLifeLeft, setYearsLifeLeft] = useState<number>(0);

  const [workHoursPerDay, setWorkHoursPerDay] = useState<number | null>(null);
  const [workDaysLeft, setWorkDaysLeft] = useState<number>(0);
  const [workWeeksLeft, setWorkWeeksLeft] = useState<number>(0);
  const [workYearsLeft, setWorkYearsLeft] = useState<number>(0);

  const [retirementAge, setRetirementAge] = useState<number | null>(null);

  const [sleepHoursPerDay, setSleepHoursPerDay] = useState<number | null>(null);
  const [sleepDaysLeft, setSleepDaysLeft] = useState<number>(0);
  const [sleepWeeksLeft, setSleepWeeksLeft] = useState<number>(0);
  const [sleepYearsLeft, setSleepYearsLeft] = useState<number>(0);

  const handleCalculate = () => {
    const daysLived = calculateDaysLived(birthDate);
    setDaysLived(daysLived);
    const weeksLived = Math.floor(daysLived / 7);
    setWeeksLived(weeksLived);
    const yearsLived = Math.floor(daysLived / 365.25);
    setYearsLived(yearsLived);

    const daysWorked = Math.floor((yearsWorked ?? 0) * 365.25);
    setDaysWorked(daysWorked);
    const weeksWorked = Math.floor(daysWorked / 7);
    setWeeksWorked(weeksWorked);

    const yearsLifeLeft = (lifeExpectancy ?? 0) - yearsLived;
    setYearsLifeLeft(yearsLifeLeft);
    const daysLifeLeft = Math.floor((lifeExpectancy ?? 0) * 365.25 - daysLived);
    setDaysLifeLeft(daysLifeLeft);
    const weeksLifeLeft = Math.floor(daysLifeLeft / 7);
    setWeeksLifeLeft(weeksLifeLeft);

    const workYearsLeft = (retirementAge ?? 0) - yearsLived;
    const workTime = calculateWorkTime(workHoursPerDay ?? 0, workYearsLeft);
    setWorkDaysLeft(Math.floor(workTime.days));
    setWorkWeeksLeft(Math.floor(workTime.weeks));
    setWorkYearsLeft(workYearsLeft);

    const sleepTime = calculateSleepTime(sleepHoursPerDay ?? 0, yearsLifeLeft);
    setSleepDaysLeft(Math.floor(sleepTime.days));
    setSleepWeeksLeft(Math.floor(sleepTime.weeks));
    setSleepYearsLeft(Math.floor(sleepTime.years));
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 md:py-14">
      <header className="relative flex justify-between items-center">
        <h1 className="text-2xl md:text-5xl font-bold text-primary border-l-8 pl-4 flex-1 uppercase">
          {texts[language].title}
        </h1>
        <div className=" flex gap-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>
      <main className="flex gap-4 mt-12 flex-col md:mt-12 md:flex-row md:items-start">
        <Card className="md:basis-1/2">
          <CalculateWeeks
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            lifeExpectancy={lifeExpectancy}
            setLifeExpectancy={setLifeExpectancy}
            yearsWorked={yearsWorked}
            setYearsWorked={setYearsWorked}
            workHoursPerDay={workHoursPerDay}
            setWorkHoursPerDay={setWorkHoursPerDay}
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
            yearsWorked={yearsWorked ?? 0}
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
          <Separator />
          <CardFooter className="justify-center pt-6">
            <p
              className="text-xs"
              dangerouslySetInnerHTML={{ __html: texts[language].footer || "" }}
            />
          </CardFooter>
        </Card>
        <Card className="pt-2 md:pt-1 md:w-full">
          <RenderWeeks
            daysLived={daysLived}
            weeksLived={weeksLived}
            weeksWorked={weeksWorked}
            workWeeksLeft={workWeeksLeft}
            sleepWeeksLeft={sleepWeeksLeft}
            lifeExpectancy={lifeExpectancy ?? 0}
            birthDate={birthDate}
          />
        </Card>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <HomeContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
