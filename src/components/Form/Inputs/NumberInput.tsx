import React from 'react';

interface IProps {
  label: string;
  reference: React.RefObject<HTMLInputElement>;
  correct: boolean;
}

class NumberInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <fieldset className="fieldset__number">
        <label className="form__label form__label_number">
          {this.props.label} {this.props.correct && <span style={{ color: 'red' }}>incorrect</span>}
        </label>

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
