import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  label: string;
  name: string;
  reference: UseFormRegister<FieldValues>;
  error?: string;
}

export default function RadioInput(props: IProps) {
  const material = ['платина', 'золото', 'серебро', 'мельхиор', 'нейзельбер', 'алюминий', 'медь'];
  return (
    <fieldset className="flexItem">
      <label className="form__label form__label-block">{props.label} </label>

      <div className="fieldset_radio">
        {material.map((item, idx) => (
          <div className="form__input_radio" key={idx}>
            <input
              type="radio"
              className="form__input_radio"
              {...props.reference(props.name, {
                required: 'choose material',
              })}
            />
            <label className="form__label">{item}</label>
          </div>
        ))}
      </div>
      {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
    </fieldset>
  );
}
