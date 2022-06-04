import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { ColorPallete } from '../../styles/global';

export interface SelectProps {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

const StyledSelect: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const { t } = useTranslation();
  return (
    <Select
      styles={{
        control: base => ({
          ...base,
          padding: '5px 5px 4px',
          borderRradius: '2px',
          outline: 0,
          width: '100%',
          height: '61px',
          paddingLeft: '10px',
          paddingRight: '10px',
          marginBottom: '20px',
          transition: 'border-color 0.2s',
          border: 'none',
          boxShadow: 'none',
          fontFamily: 'Nunito, sans-serif',
          fontSize: '24px',
          cursor: 'pointer',
          backgroundColor: ColorPallete.MAIN_GRAY_LIGHT,
          color: ColorPallete.MAIN_GRAY_DARK,
        }),
        singleValue: base => ({
          ...base,
          color: ColorPallete.MAIN_GRAY_DARK,
        }),
        input: base => ({
          ...base,
          color: ColorPallete.MAIN_GRAY_DARK,
        }),
        menu: base => ({
          ...base,
          backgroundColor: ColorPallete.MAIN_GRAY_LIGHT,
          color: ColorPallete.MAIN_GRAY_DARK,
          width: 'max-content',
          minWidth: '100%',
        }),
        menuList: base => ({
          ...base,
          backgroundColor: ColorPallete.MAIN_GRAY_LIGHT,
          color: ColorPallete.MAIN_GRAY_DARK,
        }),
        option: (base, { isFocused, isSelected }) => {
          let backgroundColor = ColorPallete.MAIN_GRAY_LIGHT;
          if (isFocused) {
            backgroundColor = ColorPallete.NEUTRAL_LIGHTER_ALT;
          }
          if (isSelected) {
            backgroundColor = ColorPallete.NEUTRAL_LIGHTER_ALT;
          }
          return {
            ...base,
            backgroundColor,
            color: ColorPallete.MAIN_GRAY_DARK,
            ':active': undefined,
          };
        },
      }}
      placeholder={t('general:selectPlaceholder')}
      value={options.find(o => o.value === value)}
      options={options}
      onChange={v => onChange?.(v?.value || '')}
      menuPlacement="auto"
      menuPosition="fixed"
      menuShouldBlockScroll
    />
  );
};

export default StyledSelect;
