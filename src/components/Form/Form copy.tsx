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
    toValidate: false,
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
    let result = true;
    if (this.titleInput.current && this.textValidate(this.titleInput.current.value)) {
      await this.setState({ title: true });
    } else {
      await this.setState({ title: false });
      result = false;
    }
    if (this.yearInput.current && this.textValidate(this.yearInput.current.value)) {
      await this.setState({ year: true });
    } else {
      await this.setState({ year: false });
      result = false;
    }
    if (this.denominationInput.current && this.textValidate(this.denominationInput.current.value)) {
      await this.setState({ denomination: true });
    } else {
      await this.setState({ denomination: false });
      result = false;
    }
    if (this.regionInput.current && this.textValidate(this.regionInput.current.value)) {
      await this.setState({ region: true });
    } else {
      await this.setState({ region: false });
      result = false;
    }
    if (this.radioValidate()) {
      await this.setState({ material: true });
    } else {
      await this.setState({ material: false });
      result = false;
    }
    if (this.selectValidate()) {
      await this.setState({ condition: true });
    } else {
      await this.setState({ condition: false });
      result = false;
    }
    if (this.weightInput.current && this.textValidate(this.weightInput.current.value)) {
      this.setState({ weight: true });
    } else {
      await this.setState({ weight: false });
      result = false;
    }
    if (this.descriptionInput.current && this.textValidate(this.descriptionInput.current.value)) {
      await this.setState({ description: true });
    } else {
      await this.setState({ description: false });
      result = false;
    }
    if (this.priceInput.current && this.numberValidate(Number(this.priceInput.current.value))) {
      await this.setState({ price: true });
    } else {
      await this.setState({ price: false });
      result = false;
    }
    if (this.obverse.current?.files && this.obverse.current?.files.length > 0) {
      await this.setState({ obverse: true });
    } else {
      await this.setState({ obverse: false });
      result = false;
    }
    if (this.reverse.current?.files && this.reverse.current?.files.length > 0) {
      await this.setState({ reverse: true });
    } else {
      await this.setState({ reverse: false });
      result = false;
    }
    if (this.dateValidate()) {
      await this.setState({ age: true });
    } else {
      await this.setState({ age: false });
      result = false;
    }
    if (this.checkboxValidate()) {
      await this.setState({ policy: true });
    } else {
      await this.setState({ policy: false });
      result = false;
    }
    await this.setState({ form: result });
    return this.state.form;
  }

  async handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    this.setState({ toValidate: true });

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
        await this.setState({ toValidate: false });
        alert('Card added');
      }
    }
  }

  handleReset() {
    this.setState({ toValidate: false });
  }

  render() {
    this.materialInput.current = [];
    return (
      <form
        className="form"
        ref={this.form}
        onSubmit={this.handleSubmit.bind(this)}
        onReset={this.handleReset.bind(this)}
      >
        <div className="flexContainer">
          <TextInput
            label="title"
            reference={this.titleInput}
            correct={!this.state.title && this.state.toValidate}
          />
          <TextInput
            label="date of minting"
            reference={this.yearInput}
            correct={!this.state.year && this.state.toValidate}
          />
        </div>

        <div className="flexContainer">
          <TextInput
            label="denomination"
            reference={this.denominationInput}
            correct={!this.state.denomination && this.state.toValidate}
          />
          <TextInput
            label="region"
            reference={this.regionInput}
            correct={!this.state.region && this.state.toValidate}
          />
        </div>

        <div className="flexContainer">
          <RadioInput
            label="material"
            reference={this.materialInput}
            correct={!this.state.material && this.state.toValidate}
          />
          <div>
            <SelectInput label="condition" reference={this.conditionInput} />
            <TextInput
              label="weight"
              reference={this.weightInput}
              correct={!this.state.weight && this.state.toValidate}
            />
            <TextInput
              label="description"
              reference={this.descriptionInput}
              correct={!this.state.description && this.state.toValidate}
            />
            <NumberInput
              label="price"
              reference={this.priceInput}
              correct={!this.state.price && this.state.toValidate}
            />
          </div>
        </div>
        <FileInput
          label="obverse image"
          reference={this.obverse}
          correct={!this.state.obverse && this.state.toValidate}
        />
        <FileInput
          label="reverse image"
          reference={this.reverse}
          correct={!this.state.reverse && this.state.toValidate}
        />
        <DateInput
          label="confirm your age (18 years)"
          reference={this.dateInput}
          correct={!this.state.age && this.state.toValidate}
        />
        <CheckboxInput
          label="i agree to privacy policy"
          reference={this.policyInput}
          correct={!this.state.policy && this.state.toValidate}
        />
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
