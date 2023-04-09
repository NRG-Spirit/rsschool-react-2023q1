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
          required: 'choose condition',
        })}
      >
        <option value="PF">PF</option>
        <option value="PL">PL</option>
        <option value="BU">BU</option>
        <option value="UNC">UNC</option>
        <option value="AU+">AU+</option>
        <option value="AU">AU</option>
        <option value="XF+">XF+</option>
        <option value="XF">XF</option>
        <option value="VF+">VF+</option>
        <option value="VF">VF</option>
        <option value="F">F</option>
        <option value="VG">VG</option>
        <option value="G">G</option>
        <option value="AG">AG</option>
        <option value="FA">FA</option>
        <option value="PR">PR</option>
      </select>
      {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    </fieldset>
  );
}
