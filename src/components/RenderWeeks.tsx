"use client";
import { useLanguage } from "@/context/";
import {
  CardContent,
  Skeleton,
  ScrollArea,
  ScrollBar,
  CardHeader,
  CardDescription,
} from "@/components/ui";
import { renderWeekBoxes } from "@/components/";
import texts from "@/locales/texts.json";

interface RenderWeeksProps {
  daysLived: number | null;
  weeksLived: number | null;
  weeksWorked: number;
  workWeeksLeft: number;
  sleepWeeksLeft: number;
  lifeExpectancy: number;
  birthDate: string;
}

export function RenderWeeks({
  daysLived,
  weeksLived,
  weeksWorked,
  workWeeksLeft,
  sleepWeeksLeft,
  lifeExpectancy,
  birthDate,
}: RenderWeeksProps) {
  const { language } = useLanguage();

  return (
    <>
      <CardHeader>
        <CardDescription className="text-center">
          {texts[language].weeks_description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex flex-row justify-evenly gap-0.5 pl-4">
            {Array.from({ length: 52 }).map((_, i) => (
              <div key={i} className="text-[7px] w-full text-center">
                {i + 1}
              </div>
            ))}
          </div>
          <div className="flex gap-1 mt-1">
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
    </>
  );
}
