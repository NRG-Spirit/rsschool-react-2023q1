import React from 'react';

interface IProps {
  label: string;
  reference: React.RefObject<HTMLInputElement>;
}

class TextInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <label className="form__label form__label-block">{this.props.label}</label>
        <input
          className="form__input_text"
          type="text"
          placeholder={`Input ${this.props.label}`}
          ref={this.props.reference}
        />
      </fieldset>
    );
  }
}
export default TextInput;
