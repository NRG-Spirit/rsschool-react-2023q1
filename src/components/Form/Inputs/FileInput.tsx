import React from 'react';

interface IProps {
  label: string;
  reference: React.RefObject<HTMLInputElement>;
  correct: boolean;
}

class FileInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <label className="form__label">
          {this.props.label}
          {this.props.correct && <span style={{ color: 'red' }}>incorrect</span>}
        </label>
        <input
          className="form__input form__input_file"
          type="file"
          accept="image/*"
          ref={this.props.reference}
        />
      </fieldset>
    );
  }
}
export default FileInput;
