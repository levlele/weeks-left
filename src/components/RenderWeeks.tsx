"use client";
import { useLanguage } from "@/context/";
import {
  CardContent,
  Skeleton,
  ScrollArea,
  ScrollBar,
  CardHeader,
  CardDescription,
  renderWeekBoxes,
} from "@/components/";
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
        <CardDescription className="md:text-center">
          {texts[language].weeks_description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap">
          {daysLived !== 0 ? (
            <div className="panel-grid grid gap-0.5">
              <div className="col-span-1 flex flex-col gap-0.5">
                <div className="aspect-square w-full" />
                {Array.from({
                  length: Number(lifeExpectancy),
                }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square w-full place-content-center overflow-hidden text-center text-[4px] leading-none md:text-[8px]"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="week-grid grid gap-0.5" key="renderedBoxes">
                {Array.from({ length: 52 }).map((_, i) => (
                  <div
                    key={i}
                    className="week col-span-1 aspect-square w-full place-content-center overflow-hidden text-center text-[5px] leading-none md:text-[8px]"
                  >
                    {i + 1}
                  </div>
                ))}

                {renderWeekBoxes(
                  weeksLived ?? 0,
                  (lifeExpectancy ?? 0) * 52,
                  weeksWorked ?? 0,
                  workWeeksLeft ?? 0,
                  sleepWeeksLeft ?? 0,
                  birthDate,
                )}
              </div>
            </div>
          ) : (
            <div className="relative h-full w-full">
              <div className="ascii-art absolute inset-0 animate-pulse bg-center bg-no-repeat opacity-50 delay-75" />
              <Skeleton className="aspect-square h-auto w-full" />
            </div>
          )}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </>
  );
}
