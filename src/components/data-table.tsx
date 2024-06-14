import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui";

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
  return (
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
              <span className="block size-4 bg-blue-700" />
              <span className="leading-none">Life Worked</span>
            </TableCell>
            <TableCell className="text-right">{daysWorked}</TableCell>
            <TableCell className="text-right">{weeksWorked}</TableCell>
            <TableCell className="text-right">{yearsWorked}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <span className="block size-4 bg-red-400" />
              <span className="leading-none">Work Left</span>
            </TableCell>
            <TableCell className="text-right">{workDaysLeft}</TableCell>
            <TableCell className="text-right">{workWeeksLeft}</TableCell>
            <TableCell className="text-right">{workYearsLeft}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <span className="block size-4 bg-purple-500" />
              <span className="leading-none">Sleep Left</span>
            </TableCell>
            <TableCell className="text-right">{sleepDaysLeft}</TableCell>
            <TableCell className="text-right">{sleepWeeksLeft}</TableCell>
            <TableCell className="text-right">{sleepYearsLeft}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <span className="block size-4 bg-red-500" />
              <span className="leading-none">Life Left</span>
            </TableCell>
            <TableCell className="text-right">{daysLifeLeft}</TableCell>
            <TableCell className="text-right">{weeksLifeLeft}</TableCell>
            <TableCell className="text-right">{yearsLifeLeft}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  );
}
