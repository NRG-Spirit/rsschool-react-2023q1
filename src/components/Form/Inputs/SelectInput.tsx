import React from 'react';

interface IProps {
  label: string;
  reference: React.RefObject<HTMLSelectElement>;
}

class TextInput extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <fieldset className="fieldset__select">
        <label className="form__label form__label_select">{this.props.label}</label>
        <select className="form__input" name={this.props.label} ref={this.props.reference}>
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
      </fieldset>
    );
  }
}
export default TextInput;
