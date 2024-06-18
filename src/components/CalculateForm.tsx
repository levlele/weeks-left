import { ChangeEvent } from "react";
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
  workHoursPerDay: number;
  setWorkHoursPerDay: (value: number) => void;
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
  workHoursPerDay,
  setWorkHoursPerDay,
  retirementAge,
  setRetirementAge,
  sleepHoursPerDay,
  setSleepHoursPerDay,
  handleCalculate,
}: CalculateFormProps) {
  const { language } = useLanguage();

  const inputFields = [
    {
      id: "birthDate",
      label: texts[language].birth_date,
      type: "date",
      value: birthDate,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setBirthDate(e.target.value),
    },
    {
      id: "lifeExpectancy",
      label: texts[language].life_expectancy,
      type: "number",
      value: lifeExpectancy,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setLifeExpectancy(Number(e.target.value)),
    },
    {
      id: "yearsWorked",
      label: texts[language].years_worked,
      type: "number",
      value: yearsWorked,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setYearsWorked(Number(e.target.value)),
    },
    {
      id: "workHoursPerDay",
      label: texts[language].hours_worked_per_day,
      type: "number",
      value: workHoursPerDay,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setWorkHoursPerDay(Number(e.target.value)),
    },
    {
      id: "retirementAge",
      label: texts[language].retirement_age,
      type: "number",
      value: retirementAge,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setRetirementAge(Number(e.target.value)),
    },
    {
      id: "sleepHoursPerDay",
      label: texts[language].sleep_hours_per_day,
      type: "number",
      value: sleepHoursPerDay,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setSleepHoursPerDay(Number(e.target.value)),
    },
  ];

  return (
    <>
      <CardHeader>
        <CardTitle>{texts[language].calculate_weeks_left}</CardTitle>
        <CardDescription>
          {texts[language].calculate_weeks_left_description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {inputFields.map((field) => (
          <div key={field.id}>
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
              id={field.id}
              type={field.type}
              value={field.value}
              className="mt-2 mb-4"
              onChange={field.onChange}
              placeholder={field.label}
              required
            />
          </div>
        ))}
        <Button onClick={handleCalculate} className="mt-4">
          {texts[language].calculate}
        </Button>
      </CardContent>
    </>
  );
}
