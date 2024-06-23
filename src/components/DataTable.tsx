import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "./ui";
import texts from "@/locales/texts.json";
import { useLanguage } from "@/context/LanguageContext";

interface DataTableProps {
  daysLived: number | null;
  weeksLived: number | null;
  yearsLived: number | null;
  daysWorked: number;
  weeksWorked: number;
  yearsWorked: number;
  workDaysLeft: number;
  workWeeksLeft: number;
  workYearsLeft: number;
  sleepDaysLeft: number;
  sleepWeeksLeft: number;
  sleepYearsLeft: number;
  daysLifeLeft: number;
  weeksLifeLeft: number;
  yearsLifeLeft: number;
}

export function DataTable({
  daysLived,
  weeksLived,
  yearsLived,
  daysWorked,
  weeksWorked,
  yearsWorked,
  workDaysLeft,
  workWeeksLeft,
  workYearsLeft,
  sleepDaysLeft,
  sleepWeeksLeft,
  sleepYearsLeft,
  daysLifeLeft,
  weeksLifeLeft,
  yearsLifeLeft,
}: DataTableProps) {
  const { language } = useLanguage();

  return (
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{texts[language].table_time_spent}</TableHead>
            <TableHead className="text-right">
              {texts[language].table_days}
            </TableHead>
            <TableHead className="text-right">
              {texts[language].table_weeks}
            </TableHead>
            <TableHead className="text-right">
              {texts[language].table_years}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <span className="block size-4 bg-red-900" />
              <span className="leading-none">
                {texts[language].table_life_lived}
              </span>
            </TableCell>
            <TableCell className="text-right">
              {daysLived ? daysLived : "0"}
            </TableCell>
            <TableCell className="text-right">
              {weeksLived ? weeksLived : "0"}
            </TableCell>
            <TableCell className="text-right">
              {yearsLived ? yearsLived : "0"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <span className="block size-4 bg-red-700" />
              <span className="leading-none">
                {texts[language].table_life_worked}
              </span>
            </TableCell>
            <TableCell className="text-right">{daysWorked}</TableCell>
            <TableCell className="text-right">{weeksWorked}</TableCell>
            <TableCell className="text-right">{yearsWorked}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <span className="block size-4 bg-green-900" />
              <span className="leading-none">
                {texts[language].table_work_left}
              </span>
            </TableCell>
            <TableCell className="text-right">{workDaysLeft}</TableCell>
            <TableCell className="text-right">{workWeeksLeft}</TableCell>
            <TableCell className="text-right">{workYearsLeft}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <span className="block size-4 bg-green-700" />
              <span className="leading-none">
                {texts[language].table_sleep_left}
              </span>
            </TableCell>
            <TableCell className="text-right">{sleepDaysLeft}</TableCell>
            <TableCell className="text-right">{sleepWeeksLeft}</TableCell>
            <TableCell className="text-right">{sleepYearsLeft}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <span className="block size-4 bg-green-500" />
              <span className="leading-none">
                {texts[language].table_life_left}
              </span>
            </TableCell>
            <TableCell className="text-right">{daysLifeLeft}</TableCell>
            <TableCell className="text-right">{weeksLifeLeft}</TableCell>
            <TableCell className="text-right">{yearsLifeLeft}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </CardContent>
  );
}
