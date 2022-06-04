import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { ColorPallete } from '../../styles/global';

const animatedComponents = makeAnimated();

export interface Option {
  value: string; type: string;
};

export interface SelectProps {
  placeholder: string;
  options: { type: string; options: Option[]; }[]
  value?: string;
  onChange?: (value: { value: string; type: string; }[]) => void;
}

const StyledSelect: React.FC<SelectProps> = ({ placeholder, options, value, onChange }) => {
  return (
    <Select
      styles={{
        control: base => ({
          ...base,
          borderRadius: "4px",
          outline: "0",
          height: "38px",
          minWidth: "250px",
          fontFamily: "Nunito, sans-serif",
          fontSize: "20px",
          verticalAlign: "top",
          paddingLeft: "10px",
          paddingRight: "10px",
          marginRight: "10px",
          marginBottom: "20px",
          transition: "border-color 0.2s",
          border: "none",
          boxShadow: "none",
          cursor: "pointer",
          backgroundColor: "transparent",
          color: "var(--color-neutral-blank)",
        }),
        singleValue: base => ({
          ...base,
          color: ColorPallete.NEUTRAL_BLANK,
        }),
        input: base => ({
          ...base,
          color: ColorPallete.NEUTRAL_BLANK,
        }),
        menu: base => ({
          ...base,
          backgroundColor: ColorPallete.NEUTRAL_DARKER_ALT,
          color: ColorPallete.NEUTRAL_BLANK,
          width: '250px',
        }),
        menuList: base => ({
          ...base,
          backgroundColor: ColorPallete.NEUTRAL_DARKER_ALT,
          color: ColorPallete.NEUTRAL_BLANK,
        }),
        option: (base, { isFocused, isSelected }) => {
          let backgroundColor = ColorPallete.NEUTRAL_DARKER_ALT;
          if (isFocused) {
            backgroundColor = ColorPallete.NEUTRAL_DARKER;
          }
          if (isSelected) {
            backgroundColor = ColorPallete.NEUTRAL_LIGHTER;
          }
          return {
            ...base,
            backgroundColor,
            color: ColorPallete.NEUTRAL_BLANK,
            ':active': undefined,
          };
        },
        multiValue: (styles) => {
          return {
            ...styles,
            backgroundColor: ColorPallete.PRIMARY_DARK,
            color: ColorPallete.NEUTRAL_BLANK,
          };
        },
        multiValueLabel: (styles) => {
          return {
            ...styles,
            backgroundColor: ColorPallete.PRIMARY_DARK,
            color: ColorPallete.NEUTRAL_BLANK,
            marginLeft: "5px",
          };
        }
      }}
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      placeholder={placeholder}
      value={options.find(o => o.options.find(oo => oo.value === value))}
      options={options}
      onChange={opt => {
        onChange?.(opt as Option[]);
      }}
      menuPlacement="auto"
      menuPosition="fixed"
    />
  );
};

export default StyledSelect;
