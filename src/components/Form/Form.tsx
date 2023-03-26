import React, { MutableRefObject } from 'react';
import './Form.css';
import { ICard } from '../../interfaces';
import TextInput from './Inputs/TextInput';
import SelectInput from './Inputs/SelectInput';
import NumberInput from './Inputs/NumberInput';
import RadioInput from './Inputs/RadioInput';
import FileInput from './Inputs/FileInput';
import DateInput from './Inputs/DateInput';
import CheckboxInput from './Inputs/CheckboxInput';

interface IProps {
  addCard: (card: ICard) => void;
  id: number;
}

class Form extends React.Component<IProps> {
  form: React.RefObject<HTMLFormElement>;
  titleInput: React.RefObject<HTMLInputElement>;
  yearInput: React.RefObject<HTMLInputElement>;
  denominationInput: React.RefObject<HTMLInputElement>;
  regionInput: React.RefObject<HTMLInputElement>;
  weightInput: React.RefObject<HTMLInputElement>;
  descriptionInput: React.RefObject<HTMLInputElement>;
  priceInput: React.RefObject<HTMLInputElement>;
  conditionInput: React.RefObject<HTMLSelectElement>;
  materialInput: MutableRefObject<HTMLInputElement[] | null>;
  dateInput: React.RefObject<HTMLInputElement>;
  policyInput: React.RefObject<HTMLInputElement>;
  img: {
    obverse: React.RefObject<HTMLInputElement>;
    reverse: React.RefObject<HTMLInputElement>;
  };
  constructor(props: IProps) {
    super(props);
    this.form = React.createRef() as React.RefObject<HTMLFormElement>;
    this.titleInput = React.createRef();
    this.yearInput = React.createRef();
    this.denominationInput = React.createRef();
    this.regionInput = React.createRef();
    this.weightInput = React.createRef();
    this.descriptionInput = React.createRef();
    this.priceInput = React.createRef();
    this.conditionInput = React.createRef();
    this.materialInput = React.createRef();
    this.dateInput = React.createRef();
    this.policyInput = React.createRef();
    this.img = {
      obverse: React.createRef(),
      reverse: React.createRef(),
    };
  }

  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (
      this.titleInput.current &&
      this.yearInput.current &&
      this.denominationInput.current &&
      this.regionInput.current &&
      this.conditionInput.current &&
      this.weightInput.current &&
      this.descriptionInput.current &&
      this.priceInput.current &&
      this.img.obverse.current?.files &&
      this.img.reverse.current?.files
    ) {
      const radio = this.materialInput.current?.filter((el) => el.checked === true)[0].defaultValue;
      const card = {
        id: this.props.id,
        title: this.titleInput.current.value,
        year: this.yearInput.current.value,
        denomination: this.denominationInput.current.value,
        region: this.regionInput.current.value,
        condition: this.conditionInput.current.value,
        material: radio ? radio : '',
        weight: this.weightInput.current.value,
        description: this.descriptionInput.current.value,
        price: Number(this.priceInput.current.value),
        img: {
          obverse: URL.createObjectURL(this.img.obverse.current.files[0]),
          reverse: URL.createObjectURL(this.img.reverse.current.files[0]),
        },
      };

      this.props.addCard(card);
    }
  }

  render() {
    this.materialInput.current = [];
    return (
      <form className="form" ref={this.form} onSubmit={this.handleSubmit.bind(this)}>
        <div className="flexContainer">
          <TextInput label="title" reference={this.titleInput} />
          <TextInput label="date of minting" reference={this.yearInput} />
        </div>

        <div className="flexContainer">
          <TextInput label="denomination" reference={this.denominationInput} />
          <TextInput label="region" reference={this.regionInput} />
        </div>

        <div className="flexContainer">
          <RadioInput label="material" reference={this.materialInput} />
          <div>
            <SelectInput label="condition" reference={this.conditionInput} />
            <TextInput label="weight" reference={this.weightInput} />
            <TextInput label="description" reference={this.descriptionInput} />
            <NumberInput label="price" reference={this.priceInput} />
          </div>
        </div>
        <FileInput label="obverse image" reference={this.img.obverse} />
        <FileInput label="reverse image" reference={this.img.reverse} />
        <DateInput label="confirm your age" reference={this.dateInput} />
        <CheckboxInput label="i agree to privacy policy" reference={this.policyInput} />
        <div className="flexContainer">
          <fieldset>
            <input className="form__input form__input_reset" type="reset" value="Reset" />
          </fieldset>
          <fieldset>
            <input className="form__input form__input_submit" type="submit" value="Submit" />
          </fieldset>
        </div>
      </form>
    );
  }
}
export default Form;
