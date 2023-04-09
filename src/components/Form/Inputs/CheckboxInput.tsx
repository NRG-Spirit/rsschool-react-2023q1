import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface IProps {
  label: string;
  name: string;
  reference: UseFormRegister<FieldValues>;
  error?: string;
}

export default function CheckboxInput(props: IProps) {
  return (
    <fieldset>
      <input
        type="checkbox"
        className="form__input form__input_checkbox"
        {...props.reference(props.name, {
          required: 'accept privacy policy',
        })}
      />
      <label className="form__label">{props.label}</label>
      {props.error && <div style={{ color: 'red' }}>{props.error}</div>}
    </fieldset>
  );
}
