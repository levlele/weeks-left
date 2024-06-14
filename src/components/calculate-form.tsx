import {
  Input,
  Button,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Label,
} from "@/components/ui";

interface CalculateFormProps {
  birthDate: string;
  setBirthDate: (value: string) => void;
  lifeExpectancy: number;
  setLifeExpectancy: (value: number) => void;
  yearsWorked: number;
  setYearsWorked: (value: number) => void;
  retirementAge: number;
  setRetirementAge: (value: number) => void;
  sleepHoursPerDay: number;
  setSleepHoursPerDay: (value: number) => void;
  handleCalculate: () => void;
}

export function CalculateForm({
  birthDate,
  setBirthDate,
  lifeExpectancy,
  setLifeExpectancy,
  yearsWorked,
  setYearsWorked,
  retirementAge,
  setRetirementAge,
  sleepHoursPerDay,
  setSleepHoursPerDay,
  handleCalculate,
}: CalculateFormProps) {
  return (
    <>
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
          required
        />
        <Label htmlFor="lifeExpectancy">Life Expectancy In Your Country</Label>
        <Input
          id="lifeExpectancy"
          type="number"
          value={lifeExpectancy}
          className="mt-2 mb-4"
          onChange={(e) => setLifeExpectancy(Number(e.target.value))}
          placeholder="Expected Life Expectancy"
          required
        />
        <Label htmlFor="yearsWorked">Years Worked</Label>
        <Input
          id="yearsWorked"
          type="number"
          value={yearsWorked}
          className="mt-2 mb-4"
          onChange={(e) => setYearsWorked(Number(e.target.value))}
          placeholder="Years Worked"
          required
        />
        <Label htmlFor="retirementAge">Retirement Age</Label>
        <Input
          id="retirementAge"
          type="number"
          value={retirementAge}
          className="mt-2 mb-4"
          onChange={(e) => setRetirementAge(Number(e.target.value))}
          placeholder="Retirement Age"
          required
        />
        <Label htmlFor="sleepHoursPerDay">Sleep Hours Per Day</Label>
        <Input
          id="sleepHoursPerDay"
          type="number"
          value={sleepHoursPerDay}
          className="mt-2 mb-4"
          onChange={(e) => setSleepHoursPerDay(Number(e.target.value))}
          placeholder="Sleep Hours Per Day"
          required
        />
        <Button onClick={handleCalculate} className="mt-4">
          Calculate
        </Button>
      </CardContent>
    </>
  );
}
