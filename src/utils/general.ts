export function hasValue(data: unknown): boolean {
  return data !== undefined && data !== null && !Number.isNaN(data);
}

export function shallowEqual(
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>,
): boolean {
  return Object.entries(obj1).every(([key, value]) => obj2[key] === value);
}

export async function asyncSleep(duration: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), duration);
  });
}

export function objectFilter<ValueType>(
  obj: Record<string, ValueType>,
  filter: (key: string, value: ValueType) => boolean | undefined,
): Record<string, ValueType> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => filter(key, value)),
  );
}
