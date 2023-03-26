import React from 'react';

interface IProps {
  label: string;
  reference: React.RefObject<HTMLInputElement>;
}

class DateInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <label className="form__label">{this.props.label}</label>
        <input
          type="date"
          className="form__input form__input_date"
          placeholder={`Input ${this.props.label}`}
          ref={this.props.reference}
        />
      </fieldset>
    );
  }
}
export default DateInput;
