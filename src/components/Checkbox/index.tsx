import React, { ReactElement } from 'react';

import { Text } from '..';

import { Container } from './styles';

export interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: ReactElement;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <Container
      className="checkbox no-user-select"
      onClick={evt => {
        evt.stopPropagation();
        onChange(!checked);
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={evt => onChange(evt.currentTarget.checked)}
      />
      {label && <Text color='var(--color-main-gray-dark)'>{label}</Text>}
    </Container>
  );
};

export default Checkbox;
