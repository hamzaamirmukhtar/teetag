import { useState } from "react";
import styles from "./FilterBox.module.css";
interface FilterBoxProps {
  values: string[];
  onChange: (value: string) => void;
}

const FilterBox = ({ values, onChange }: FilterBoxProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (onChange) {
      onChange(selectedValue);
    }
  };
  return (
    <form className={styles.sortbox}>
      <select onChange={handleChange}>
        <option value="">FIlter By</option>
        {values &&
          values.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
      </select>
    </form>
  );
};

export default FilterBox;
