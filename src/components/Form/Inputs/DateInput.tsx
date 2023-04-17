import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface IProps {
  label: string;
  name: string;
  reference: UseFormRegister<FieldValues>;
  error?: string;
}

export default function DateInput(props: IProps) {
  return (
    <fieldset>
      <label className="form__label">{props.label}</label>
      <input
        type="date"
        className="form__input form__input_date"
        data-testid="form-date"
        {...props.reference(props.name, {
          required: `${props.label}`,
          validate: (value) => +new Date() - +new Date(value) > 0 || 'not valid age',
        })}
      />
      {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    </fieldset>
  );
}
