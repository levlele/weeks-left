import { ChangeEvent } from "react";
import {
  Input,
  Button,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Label,
  SelectCountry,
} from "@/components/";
import texts from "@/locales/texts.json";
import { useLanguage } from "@/context/LanguageContext";

interface CalculateWeeksProps {
  birthDate: string;
  setBirthDate: (value: string) => void;
  lifeExpectancy: number | null;
  setLifeExpectancy: (value: number) => void;
  yearsWorked: number | null;
  setYearsWorked: (value: number) => void;
  workHoursPerDay: number | null;
  setWorkHoursPerDay: (value: number) => void;
  retirementAge: number | null;
  setRetirementAge: (value: number) => void;
  sleepHoursPerDay: number | null;
  setSleepHoursPerDay: (value: number) => void;
  handleCalculate: () => void;
}

export function CalculateWeeks({
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
}: CalculateWeeksProps) {
  const { language } = useLanguage();

  const inputFields = [
    {
      id: "lifeExpectancy",
      label: texts[language].life_expectancy,
      type: "number",
      value: lifeExpectancy,
      placeholder: texts[language].life_expectancy_placeholder,
      disabled: true,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setLifeExpectancy(Number(e.target.value)),
    },
    {
      id: "birthDate",
      label: texts[language].birth_date,
      type: "date",
      value: birthDate,
      placeholder: texts[language].birth_date_placeholder,
      disabled: false,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setBirthDate(e.target.value),
    },
    {
      id: "yearsWorked",
      label: texts[language].years_worked,
      type: "number",
      value: yearsWorked,
      placeholder: texts[language].years_worked_placeholder,
      disabled: false,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setYearsWorked(Number(e.target.value)),
    },
    {
      id: "workHoursPerDay",
      label: texts[language].hours_worked_per_day,
      type: "number",
      value: workHoursPerDay,
      placeholder: texts[language].hours_worked_per_day_placeholder,
      disabled: false,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setWorkHoursPerDay(Number(e.target.value)),
    },
    {
      id: "retirementAge",
      label: texts[language].retirement_age,
      type: "number",
      value: retirementAge,
      placeholder: texts[language].retirement_age_placeholder,
      disabled: false,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setRetirementAge(Number(e.target.value)),
    },
    {
      id: "sleepHoursPerDay",
      label: texts[language].sleep_hours_per_day,
      type: "number",
      value: sleepHoursPerDay,
      placeholder: texts[language].sleep_hours_per_day_placeholder,
      disabled: false,
      onChange: (e: ChangeEvent<HTMLInputElement>) =>
        setSleepHoursPerDay(Number(e.target.value)),
    },
  ];

  const handleCountrySelect = (selectedLifeExpectancy: number) => {
    setLifeExpectancy(selectedLifeExpectancy);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-primary">
          {texts[language].calculate_weeks_left}
        </CardTitle>
        <CardDescription>
          {texts[language].calculate_weeks_left_description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SelectCountry handleCountrySelect={handleCountrySelect} />
        {inputFields.map((field) => (
          <div key={field.id}>
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input
              id={field.id}
              type={field.type}
              value={field.value as string | number}
              className="mb-4 mt-2"
              onChange={field.onChange}
              placeholder={field.placeholder}
              disabled={field.disabled}
            />
          </div>
        ))}
        <Button onClick={handleCalculate} className="mt-4" size="lg">
          {texts[language].calculate}
        </Button>
      </CardContent>
    </>
  );
}
