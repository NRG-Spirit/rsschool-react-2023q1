import React from 'react';

interface IProps {
  label: string;
  reference: React.RefObject<HTMLInputElement>;
  correct: boolean;
}

class CheckboxInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <input
          type="checkbox"
          className="form__input form__input_checkbox"
          ref={this.props.reference}
        />
        <label className="form__label">
          {this.props.label}
          {this.props.correct && <span style={{ color: 'red' }}>incorrect</span>}
        </label>
      </fieldset>
    );
  }
}
export default CheckboxInput;
