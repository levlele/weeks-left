import {
  Input,
  Button,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Label,
} from "@/components/ui";
import texts from "@/locales/texts.json";
import { useLanguage } from "@/context/LanguageContext";

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
  const { language } = useLanguage();
  return (
    <>
      <CardHeader>
        <CardTitle>{texts[language].calculate_weeks_left}</CardTitle>
        <CardDescription>
          {texts[language].calculate_weeks_left_description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="birthDate">{texts[language].birth_date}</Label>
        <Input
          id="birthDate"
          type="date"
          value={birthDate}
          className="mt-2 mb-4"
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <Label htmlFor="lifeExpectancy">
          {texts[language].life_expectancy}
        </Label>
        <Input
          id="lifeExpectancy"
          type="number"
          value={lifeExpectancy}
          className="mt-2 mb-4"
          onChange={(e) => setLifeExpectancy(Number(e.target.value))}
          placeholder="Expected Life Expectancy"
          required
        />
        <Label htmlFor="yearsWorked">{texts[language].years_worked}</Label>
        <Input
          id="yearsWorked"
          type="number"
          value={yearsWorked}
          className="mt-2 mb-4"
          onChange={(e) => setYearsWorked(Number(e.target.value))}
          placeholder="Years Worked"
          required
        />
        <Label htmlFor="retirementAge">{texts[language].retirement_age}</Label>
        <Input
          id="retirementAge"
          type="number"
          value={retirementAge}
          className="mt-2 mb-4"
          onChange={(e) => setRetirementAge(Number(e.target.value))}
          placeholder="Retirement Age"
          required
        />
        <Label htmlFor="sleepHoursPerDay">
          {texts[language].sleep_hours_per_day}
        </Label>
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
          {texts[language].calculate}
        </Button>
      </CardContent>
    </>
  );
}
