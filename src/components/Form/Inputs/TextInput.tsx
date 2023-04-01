import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label: string;
  name: string;
  reference: UseFormRegister<FieldValues>;
  error?: string;
}

export default function TextInput(props: IProps) {
  return (
    <fieldset>
      <label className="form__label form__label-block">{props.label}</label>
      <input
        className="form__input_text"
        type="text"
        placeholder={`Input ${props.label}`}
        autoComplete="off"
        {...props.reference(props.name, {
          required: true,
          minLength: {
            value: 3,
            message: 'Title is too short, minimum three letters',
          },
        })}
      />
      {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    </fieldset>
  );
}
