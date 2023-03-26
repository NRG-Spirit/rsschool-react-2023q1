import React from 'react';

interface IProps {
  label: string;
  reference: React.RefObject<HTMLInputElement>;
}

class FileInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <fieldset>
        <label className="form__label">{this.props.label}</label>
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
