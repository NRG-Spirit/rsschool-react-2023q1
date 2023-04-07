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
    <fieldset className="fieldset__select">
      <label className="form__label form__label_select">{props.label}</label>
      <select
        className="form__input"
        {...props.reference(props.name, {
          required: 'choose language',
        })}
      >
        <option value="EN">EN</option>
        <option value="UA">UA</option>
        <option value="RU">RU</option>
        <option value="SPA">SPA</option>
        <option value="ITA">ITA</option>
        <option value="GER">GER</option>
        <option value="JPN">JPN</option>
      </select>
      {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    </fieldset>
  );
}
