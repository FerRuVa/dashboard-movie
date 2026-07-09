"use client";

import {
  useMemo,
  useCallback,
  SelectHTMLAttributes,
} from "react";

type Key = string | number;

export interface ComboBoxProps<T>
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "value" | "onChange"
  > {
  items: readonly T[];

  value?: Key;

  loading?: boolean;

  placeholder?: string;

  getValue(item: T): Key;

  getLabel(item: T): string;

  onChange(item?: T): void;
}

export default function ComboBox<T>({
  items,
  value,
  loading = false,
  placeholder = "Seleccione una opción",

  getValue,
  getLabel,

  onChange,

  className,

  ...props
}: ComboBoxProps<T>) {
  const itemsMap = useMemo(() => {
    return new Map(
      items.map((item) => [getValue(item), item])
    );
  }, [items, getValue]);

  const currentValue = useMemo(() => {
    if (
      value === undefined ||
      value === null ||
      !itemsMap.has(value)
    ) {
      return "";
    }

    return String(value);
  }, [value, itemsMap]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;

      const selected =
        itemsMap.get(selectedValue) ??
        itemsMap.get(Number(selectedValue));

      onChange(selected);
    },
    [itemsMap, onChange]
  );

  return (
    <select
      {...props}
      value={currentValue}
      onChange={handleChange}
      className={[
        "w-full rounded-lg border border-gray-300 bg-white px-3 py-4",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        currentValue === "" ? "text-gray-600" : "text-gray-900",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {!props.multiple && (
        <option value="">
          {loading ? "Cargando..." : placeholder}
        </option>
      )}

      {items.map((item) => {
        const key = getValue(item);
        return (
          <option
            key={String(key)}
            value={String(key)}
          >
            {getLabel(item)}
          </option>
        );
      })}
    </select>
  );
}