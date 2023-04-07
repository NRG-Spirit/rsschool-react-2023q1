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
        <option value="PF">EN</option>
        <option value="PL">UA</option>
        <option value="BU">RU</option>
        <option value="BU">SPA</option>
        <option value="BU">ITA</option>
        <option value="BU">GER</option>
        <option value="BU">JPN</option>
      </select>
      {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    </fieldset>
  );
}
