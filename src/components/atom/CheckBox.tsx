import React, { ChangeEventHandler, useState } from "react";

interface CheckBoxProps {
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const CheckBox = ({ name, onChange }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsChecked(e.target.checked);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label
      htmlFor={name}
      style={{
        display: "flex",
        gap: 5,
        fontSize: 14,
      }}
    >
      <input checked={isChecked} type="checkbox" id={name} name={name} onChange={handleChange} />
      {name}
    </label>
  );
};

export default CheckBox;
