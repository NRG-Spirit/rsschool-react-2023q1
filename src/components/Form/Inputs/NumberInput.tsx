import React from 'react';

interface IProps {
  label: string;
  reference: React.RefObject<HTMLInputElement>;
}

class NumberInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <fieldset className="fieldset__number">
        <label className="form__label form__label_number">{this.props.label}</label>
        <input
          className="form__input"
          type="number"
          min="0"
          max="1000000"
          placeholder={`Input ${this.props.label}`}
          ref={this.props.reference}
        />
      </fieldset>
    );
  }
}
export default NumberInput;
