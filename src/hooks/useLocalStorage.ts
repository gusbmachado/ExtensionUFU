import { useState, useEffect, useCallback } from 'react';
import { hasValue } from 'utils';

// eslint-disable-next-line no-shadow
export enum LocalStorageKeys {
  AUTH_DATA = '@extensao:auth-data',
  REMEMBER_ME = '@extensao:remember-me',
}

export default function useLocalStorage<DataType = unknown>(
  key: LocalStorageKeys,
  defaultValue?: DataType,
): [
  DataType | undefined,
  React.Dispatch<React.SetStateAction<DataType | undefined>>,
  () => void,
] {
  const inLocalStorage = localStorage.getItem(key);
  let actualDefault: DataType | undefined;
  try {
    actualDefault = JSON.parse(inLocalStorage || '{}').value as DataType;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Local storage error:', err);
  }
  if (!hasValue(actualDefault)) {
    actualDefault = defaultValue;
  }
  if (!hasValue(actualDefault)) {
    actualDefault = undefined;
  }
  const [value, setValue] = useState(actualDefault);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [key, value]);
  const remove = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);
  return [value, setValue, remove];
}
