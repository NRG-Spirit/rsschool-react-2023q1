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
  form: React.RefObject<HTMLFormElement> = React.createRef() as React.RefObject<HTMLFormElement>;
  titleInput: React.RefObject<HTMLInputElement> = React.createRef();
  yearInput: React.RefObject<HTMLInputElement> = React.createRef();
  denominationInput: React.RefObject<HTMLInputElement> = React.createRef();
  regionInput: React.RefObject<HTMLInputElement> = React.createRef();
  weightInput: React.RefObject<HTMLInputElement> = React.createRef();
  descriptionInput: React.RefObject<HTMLInputElement> = React.createRef();
  priceInput: React.RefObject<HTMLInputElement> = React.createRef();
  conditionInput: React.RefObject<HTMLSelectElement> = React.createRef();
  materialInput: MutableRefObject<HTMLInputElement[] | null> = React.createRef();
  dateInput: React.RefObject<HTMLInputElement> = React.createRef();
  policyInput: React.RefObject<HTMLInputElement> = React.createRef();
  obverse: React.RefObject<HTMLInputElement> = React.createRef();
  reverse: React.RefObject<HTMLInputElement> = React.createRef();
  constructor(props: IProps) {
    super(props);
  }

  state = {
    form: false,
    title: false,
    year: false,
    denomination: false,
    region: false,
    condition: false,
    material: false,
    weight: false,
    description: false,
    price: false,
    obverse: false,
    reverse: false,
    age: false,
    policy: false,
  };

  textValidate(text: string) {
    if (text.length > 0) return true;
    return false;
  }

  radioValidate() {
    const radio = this.materialInput.current?.filter((el) => el.checked === true);
    if (
      radio &&
      radio[0] &&
      typeof radio[0].defaultValue === 'string' &&
      radio[0].defaultValue.length > 0
    ) {
      return true;
    }
    return false;
  }

  selectValidate() {
    if (this.conditionInput?.current?.value && this.conditionInput.current.value.length > 0) {
      return true;
    }
    return false;
  }

  numberValidate(data: number) {
    if (data > 0) return true;
    return false;
  }

  dateValidate() {
    const now = new Date();
    const value = this.dateInput?.current ? new Date(this.dateInput?.current?.value) : new Date();
    return (+now - +value) / 31536000000 > 18;
  }

  checkboxValidate() {
    if (this.policyInput.current?.checked === true) return true;
    return false;
  }

  async handleValidate() {
    await this.setState({ form: true });
    if (this.titleInput.current && this.textValidate(this.titleInput.current.value)) {
      await this.setState({ title: true });
      console.log('da', this.state.title);
    } else {
      await this.setState({ title: false });
      await this.setState({ form: false });
    }
    if (this.yearInput.current && this.textValidate(this.yearInput.current.value)) {
      await this.setState({ year: true });
    } else {
      await this.setState({ year: false });
      this.setState({ form: false });
    }
    if (this.denominationInput.current && this.textValidate(this.denominationInput.current.value)) {
      await this.setState({ denomination: true });
    } else {
      await this.setState({ denomination: false });
      await this.setState({ form: false });
    }
    if (this.regionInput.current && this.textValidate(this.regionInput.current.value)) {
      await this.setState({ region: true });
    } else {
      await this.setState({ region: false });
      await this.setState({ form: false });
    }
    if (this.radioValidate()) {
      await this.setState({ material: true });
    } else {
      await this.setState({ material: false });
      await this.setState({ form: false });
    }
    if (this.selectValidate()) {
      await this.setState({ condition: true });
    } else {
      await this.setState({ condition: false });
      await this.setState({ form: false });
    }
    if (this.weightInput.current && this.textValidate(this.weightInput.current.value)) {
      this.setState({ weight: true });
    } else {
      await this.setState({ weight: false });
      await this.setState({ form: false });
    }
    if (this.descriptionInput.current && this.textValidate(this.descriptionInput.current.value)) {
      await this.setState({ description: true });
    } else {
      await this.setState({ description: false });
      await this.setState({ form: false });
    }
    if (this.priceInput.current && this.numberValidate(Number(this.priceInput.current.value))) {
      await this.setState({ price: true });
    } else {
      await this.setState({ price: false });
      await this.setState({ form: false });
    }
    if (this.obverse.current?.files && this.obverse.current?.files.length > 0) {
      console.log(this.obverse.current?.files);
      await this.setState({ obverse: true });
    } else {
      await this.setState({ obverse: false });
      await this.setState({ form: false });
    }
    if (this.reverse.current?.files && this.reverse.current?.files.length > 0) {
      await this.setState({ reverse: true });
    } else {
      await this.setState({ reverse: false });
      await this.setState({ form: false });
    }
    if (this.dateValidate()) {
      await this.setState({ age: true });
    } else {
      await this.setState({ age: false });
      await this.setState({ form: false });
    }
    if (this.checkboxValidate()) {
      await this.setState({ policy: true });
    } else {
      await this.setState({ policy: false });
      await this.setState({ form: false });
    }

    console.log(this.state);
    return this.state.form;
  }

  async handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const isValidated = await this.handleValidate();
    if (isValidated) {
      if (
        this.titleInput.current &&
        this.yearInput.current &&
        this.denominationInput.current &&
        this.regionInput.current &&
        this.conditionInput.current &&
        this.weightInput.current &&
        this.descriptionInput.current &&
        this.priceInput.current &&
        this.obverse.current?.files &&
        this.reverse.current?.files
      ) {
        const radio = this.materialInput.current?.filter((el) => el.checked === true)[0]
          .defaultValue;
        const card = {
          id: this.props.id,
          title: this.titleInput?.current.value,
          year: this.yearInput.current.value,
          denomination: this.denominationInput.current.value,
          region: this.regionInput.current.value,
          condition: this.conditionInput.current.value,
          material: radio ? radio : '',
          weight: this.weightInput.current.value,
          description: this.descriptionInput.current.value,
          price: Number(this.priceInput.current.value),
          img: {
            obverse: URL.createObjectURL(this.obverse.current.files[0]),
            reverse: URL.createObjectURL(this.reverse.current.files[0]),
          },
        };

        this.props.addCard(card);
        const target = e.target as HTMLFormElement;
        target.reset();
      }
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
        <FileInput label="obverse image" reference={this.obverse} />
        <FileInput label="reverse image" reference={this.reverse} />
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
