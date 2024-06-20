import * as React from "react";
import texts from "@/locales/texts.json";
import { useLanguage } from "@/context/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
} from "@/components/";
import countries from "@/data/life-expectancy.json";

interface SelectCountryProps {
  handleCountrySelect: (lifeExpectancy: number) => void;
}

export function SelectCountry({ handleCountrySelect }: SelectCountryProps) {
  const { language } = useLanguage();

  const handleSelect = (selectedCountryCode: string) => {
    const selectedCountry = countries.find(
      (country) => country.country_code === selectedCountryCode
    );
    if (selectedCountry) {
      handleCountrySelect(selectedCountry.life_expectancy);
    }
  };

  return (
    <>
      <Label htmlFor="bornCountry">{texts[language].born_country}</Label>
      <div className="mt-2 mb-4">
        <Select onValueChange={handleSelect} defaultValue="ARG">
          <SelectTrigger className="w-full">
            <SelectValue placeholder={texts[language].born_country} />
          </SelectTrigger>

          <SelectContent>
            {countries.map((country) => (
              <SelectItem
                key={country.country_code}
                value={country.country_code}
              >
                {country.country_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
