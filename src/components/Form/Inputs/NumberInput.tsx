import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface IProps {
  label: string;
  name: string;
  reference: UseFormRegister<FieldValues>;
  error?: string;
  validate: {
    positive: (value: string) => boolean | string;
  };
}

export default function NumberInput(props: IProps) {
  return (
    <fieldset className="fieldset__number">
      <label className="form__label form__label_number">{props.label}</label>

      <input
        className="form__input"
        type="number"
        min="0"
        max="1000000"
        placeholder={`Input ${props.label}`}
        {...props.reference(props.name, {
          required: `input ${props.label}`,
          validate: props.validate,
        })}
      />
      {props.error && <div style={{ color: 'red' }}>{props.error}</div>}
    </fieldset>
  );
}
