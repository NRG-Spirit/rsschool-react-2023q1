import React from 'react';
import { MutableRefObject } from 'react';

interface IProps {
  label: string;
  reference: MutableRefObject<HTMLInputElement[] | null>;
}

class RadioInput extends React.Component<IProps> {
  material: string[];
  constructor(props: IProps) {
    super(props);
    this.material = ['платина', 'золото', 'серебро', 'мельхиор', 'нейзельбер', 'алюминий', 'медь'];
  }
  render() {
    return (
      <fieldset className="flexItem">
        <label className="form__label form__label-block">{this.props.label}</label>
        <div className="fieldset_radio">
          {this.material.map((item, idx) => (
            <div className="form__input_radio" key={idx}>
              <input
                type="radio"
                className="form__input_radio"
                defaultValue={item}
                name={this.props.label}
                ref={(el) => {
                  if (el && this.props.reference.current) this.props.reference.current[idx] = el;
                }}
              />
              <label className="form__label">{item}</label>
            </div>
          ))}
        </div>
      </fieldset>
    );
  }
}
export default RadioInput;
