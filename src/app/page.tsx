"use client";
import { useState } from "react";
import { ThemeProvider, LanguageProvider, useLanguage } from "@/context/";
import {
  calculateDaysLived,
  calculateSleepTime,
  calculateWorkTime,
} from "@/lib/utils";
import { Card, Separator, CardFooter } from "@/components/ui";
import {
  CalculateForm,
  DataTable,
  LanguageToggle,
  ModeToggle,
  RenderWeeks,
} from "@/components/";
import texts from "@/locales/texts.json";

function HomeContent() {
  const { language } = useLanguage();

  // const [birthDate, setBirthDate] = useState<string>("1984-05-15");
  // const [daysLived, setDaysLived] = useState<number>(0);
  // const [weeksLived, setWeeksLived] = useState<number>(0);
  // const [yearsLived, setYearsLived] = useState<number>(0);

  // const [daysWorked, setDaysWorked] = useState<number>(0);
  // const [yearsWorked, setYearsWorked] = useState<number>(23);
  // const [weeksWorked, setWeeksWorked] = useState<number>(0);

  // const [lifeExpectancy, setLifeExpectancy] = useState<number>(72);
  // const [retirementAge, setRetirementAge] = useState<number>(65);

  // const [daysLifeLeft, setDaysLifeLeft] = useState<number>(0);
  // const [weeksLifeLeft, setWeeksLifeLeft] = useState<number>(0);
  // const [yearsLifeLeft, setYearsLifeLeft] = useState<number>(0);

  // const [workHoursPerDay, setWorkHoursPerDay] = useState<number>(8);
  // const [workDaysLeft, setWorkDaysLeft] = useState<number>(0);
  // const [workWeeksLeft, setWorkWeeksLeft] = useState<number>(0);
  // const [workYearsLeft, setWorkYearsLeft] = useState<number>(0);

  // const [sleepHoursPerDay, setSleepHoursPerDay] = useState<number>(8);
  // const [sleepDaysLeft, setSleepDaysLeft] = useState<number>(0);
  // const [sleepWeeksLeft, setSleepWeeksLeft] = useState<number>(0);
  // const [sleepYearsLeft, setSleepYearsLeft] = useState<number>(0);

  const [birthDate, setBirthDate] = useState<string>("");
  const [daysLived, setDaysLived] = useState<number>(0);
  const [weeksLived, setWeeksLived] = useState<number>(0);
  const [yearsLived, setYearsLived] = useState<number>(0);

  const [daysWorked, setDaysWorked] = useState<number>(0);
  const [yearsWorked, setYearsWorked] = useState<number>(0);
  const [weeksWorked, setWeeksWorked] = useState<number>(0);

  const [lifeExpectancy, setLifeExpectancy] = useState<number>(0);
  const [retirementAge, setRetirementAge] = useState<number>(0);

  const [daysLifeLeft, setDaysLifeLeft] = useState<number>(0);
  const [weeksLifeLeft, setWeeksLifeLeft] = useState<number>(0);
  const [yearsLifeLeft, setYearsLifeLeft] = useState<number>(0);

  const [workHoursPerDay, setWorkHoursPerDay] = useState<number>(0);
  const [workDaysLeft, setWorkDaysLeft] = useState<number>(0);
  const [workWeeksLeft, setWorkWeeksLeft] = useState<number>(0);
  const [workYearsLeft, setWorkYearsLeft] = useState<number>(0);

  const [sleepHoursPerDay, setSleepHoursPerDay] = useState<number>(0);
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
    const workTime = calculateWorkTime(workHoursPerDay, workYearsLeft);
    setWorkDaysLeft(Math.floor(workTime.days));
    setWorkWeeksLeft(Math.floor(workTime.weeks));
    setWorkYearsLeft(workYearsLeft);

    const sleepTime = calculateSleepTime(sleepHoursPerDay, yearsLifeLeft);
    setSleepDaysLeft(Math.floor(sleepTime.days));
    setSleepWeeksLeft(Math.floor(sleepTime.weeks));
    setSleepYearsLeft(Math.floor(sleepTime.years));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:p-8 md:py-14">
      <h1 className="text-balance text-lg md:text-2xl font-bold max-w-52 md:max-w-full">
        {texts[language].title}
      </h1>
      <main className="flex gap-4 mt-8 flex-col md:mt-12 md:flex-row md:items-start">
        <Card className="md:basis-1/2">
          <CalculateForm
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
            lifeExpectancy={lifeExpectancy}
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
        <LanguageToggle className="absolute top-8 right-16 md:top-12 md:right-20" />
        <ModeToggle className="absolute top-8 right-4 md:top-12 md:right-8" />
        <HomeContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
