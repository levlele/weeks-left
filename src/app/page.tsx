"use client";
import { useState } from "react";
import { calculateDaysLived, calculateSleepTime } from "@/lib/utils";
import {
  Input,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Label,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { renderWeekBoxes } from "@/components/render-boxes";
import { ModeToggle } from "@/components/mode-toggle";

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
  const [sleepHoursPerWeek, setSleepHoursPerWeek] = useState<number>(0);
  const [sleepHoursPerMonth, setSleepHoursPerMonth] = useState<number>(0);
  const [sleepHoursPerYear, setSleepHoursPerYear] = useState<number>(0);

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

    const sleepTime = calculateSleepTime(
      sleepHoursPerDay,
      lifeExpectancy,
      yearsLived
    );
    setSleepDaysLeft(Math.floor(sleepTime.days));
    setSleepWeeksLeft(Math.floor(sleepTime.weeks));
    setSleepMonthsLeft(Math.floor(sleepTime.months));
    setSleepYearsLeft(Math.floor(sleepTime.years));
  };

  return (
    <div className="relative min-h-screen">
      <ModeToggle className="absolute top-8 right-8" />
      <div className="max-w-7xl mx-auto p-8 font-mono absolute inset-x-0">
        <h1 className="text-2xl font-bold">
          The Scare Jump Procrastinator Calculator
        </h1>
        <main className="flex gap-8 mt-8">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={35}>
              <Card className="font-mono p-4 rounded-none">
                <CardHeader>
                  <CardTitle>Calculate Weeks Left</CardTitle>
                  <CardDescription>
                    Enter your birth date to calculate the time you have lived.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="birthDate">Birth Date</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={birthDate}
                    className="mt-2 mb-4"
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                  <Label htmlFor="lifeExpectancy">
                    Life Expectancy In Your Country
                  </Label>
                  <Input
                    id="lifeExpectancy"
                    type="number"
                    value={lifeExpectancy}
                    className="mt-2 mb-4"
                    onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                    placeholder="Expected Life Expectancy"
                  />
                  <Label htmlFor="yearsWorked">Years Worked</Label>
                  <Input
                    id="yearsWorked"
                    type="number"
                    value={yearsWorked}
                    className="mt-2 mb-4"
                    onChange={(e) => setYearsWorked(Number(e.target.value))}
                    placeholder="Years Worked"
                  />
                  <Label htmlFor="retirementAge">Retirement Age</Label>
                  <Input
                    id="retirementAge"
                    type="number"
                    value={retirementAge}
                    className="mt-2 mb-4"
                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                    placeholder="Retirement Age"
                  />
                  <Label htmlFor="sleepHoursPerDay">Sleep Hours Per Day</Label>
                  <Input
                    id="sleepHoursPerDay"
                    type="number"
                    value={sleepHoursPerDay}
                    className="mt-2 mb-4"
                    onChange={(e) =>
                      setSleepHoursPerDay(Number(e.target.value))
                    }
                    placeholder="Sleep Hours Per Day"
                  />

                  <Button onClick={handleCalculate} className="mt-4">
                    Calculate
                  </Button>
                </CardContent>
                <Separator />
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Time Spent</TableHead>
                        <TableHead className="text-right">Days</TableHead>
                        <TableHead className="text-right">Weeks</TableHead>
                        <TableHead className="text-right">Years</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="flex items-center gap-2">
                          <span className="block size-4 bg-blue-500" />
                          <span className="leading-none">Life Lived</span>
                        </TableCell>
                        <TableCell className="text-right">
                          {daysLived}
                        </TableCell>
                        <TableCell className="text-right">
                          {weeksLived}
                        </TableCell>
                        <TableCell className="text-right">
                          {yearsLived}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="flex items-center gap-2">
                          <span className="block size-4 bg-blue-700" />
                          <span className="leading-none">Life Worked</span>
                        </TableCell>
                        <TableCell className="text-right">
                          {daysWorked}
                        </TableCell>
                        <TableCell className="text-right">
                          {weeksWorked}
                        </TableCell>
                        <TableCell className="text-right">
                          {yearsWorked}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="flex items-center gap-2">
                          <span className="block size-4 bg-red-400" />
                          <span className="leading-none">Work Left</span>
                        </TableCell>
                        <TableCell className="text-right">
                          {workDaysLeft}
                        </TableCell>
                        <TableCell className="text-right">
                          {workWeeksLeft}
                        </TableCell>
                        <TableCell className="text-right">
                          {workYearsLeft}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="flex items-center gap-2">
                          <span className="block size-4 bg-purple-500" />
                          <span className="leading-none">Sleep Left</span>
                        </TableCell>
                        <TableCell className="text-right">
                          {sleepDaysLeft}
                        </TableCell>
                        <TableCell className="text-right">
                          {sleepWeeksLeft}
                        </TableCell>
                        <TableCell className="text-right">
                          {sleepYearsLeft}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="flex items-center gap-2">
                          <span className="block size-4 bg-red-500" />
                          <span className="leading-none">Life Left</span>
                        </TableCell>
                        <TableCell className="text-right">
                          {daysLifeLeft}
                        </TableCell>
                        <TableCell className="text-right">
                          {weeksLifeLeft}
                        </TableCell>
                        <TableCell className="text-right">
                          {yearsLifeLeft}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </ResizablePanel>
            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={65}>
              <Card className="rounded-none p-4 h-full">
                <CardHeader>
                  <CardTitle>Weeks displayed as boxes</CardTitle>
                  <CardDescription>
                    Each line represents a year of 52 weeks.
                    <br />
                    The boxes represent the weeks in that year.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row justify-between gap-1 pl-4">
                    {Array.from({ length: 52 }).map((_, i) => (
                      <div key={i} className="text-[7px] w-full text-right">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-1 mt-1">
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
                        <div className="boxes">
                          {Array.from({ length: 1040 }).map((_, i) => (
                            <div
                              key={i}
                              className="aspect-square bg-secondary"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </div>
    </div>
  );
}
