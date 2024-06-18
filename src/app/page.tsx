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
  CardContent,
  Separator,
  Skeleton,
  ScrollArea,
  ScrollBar,
  CardHeader,
  CardDescription,
} from "@/components/ui";
import {
  CalculateForm,
  DataTable,
  renderWeekBoxes,
  LanguageToggle,
  ModeToggle,
} from "@/components/";
import texts from "@/locales/texts.json";

function HomeContent() {
  const { language } = useLanguage();

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
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-balance text-lg md:text-2xl font-bold md:text-center">
        {texts[language].title}
      </h1>
      <main className="flex gap-4 mt-12 flex-col md:flex-row md:items-start">
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
        </Card>
        <Card className="pt-2 md:pt-1 md:w-full">
          <CardHeader>
            <CardDescription className="text-center">
              {texts[language].weeks_description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="text-center pb-1">
              <h3 className="text-[12px] leading-none h-4">
                {texts[language].weeks}
              </h3>
            </div>

            <ScrollArea className="w-full whitespace-nowrap">
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
                    {texts[language].years}
                  </h3>
                </div>
                <div className="flex flex-col items-end justify-between w-3">
                  {Array.from({
                    length: daysLived !== 0 ? Number(lifeExpectancy) : 20,
                  }).map((_, i) => (
                    <div key={i} className="text-[8px]">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div className="flex-1">
                  {daysLived !== 0 ? (
                    <div className="boxes">
                      {renderWeekBoxes(
                        weeksLived ?? 0,
                        (lifeExpectancy ?? 0) * 52,
                        weeksWorked ?? 0,
                        workWeeksLeft ?? 0,
                        sleepWeeksLeft ?? 0,
                        birthDate
                      )}
                    </div>
                  ) : (
                    <Skeleton className="w-full h-auto aspect-video" />
                  )}
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
      <footer className="flex justify-center items-center py-8">
        <p
          className="text-xs"
          dangerouslySetInnerHTML={{ __html: texts[language].footer || "" }}
        />
      </footer>
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
        <LanguageToggle className="absolute top-4 right-16 md:top-8 md:right-20" />
        <ModeToggle className="absolute top-4 right-4 md:top-8 md:right-8" />
        <HomeContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
