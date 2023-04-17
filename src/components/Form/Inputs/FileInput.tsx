import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface IProps {
  label: string;
  name: string;
  reference: UseFormRegister<FieldValues>;
  error?: string;
}

export default function FileInput(props: IProps) {
  return (
    <fieldset>
      <label className="form__label">{props.label}</label>
      <input
        className="form__input form__input_file"
        type="file"
        accept="image/*"
        {...props.reference(props.name, {
          required: `input ${props.label}`,
          validate: (value) =>
            (value[0] as File).type.includes('image') || 'unsupported image format',
        })}
      />
      {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    </fieldset>
  );
}
