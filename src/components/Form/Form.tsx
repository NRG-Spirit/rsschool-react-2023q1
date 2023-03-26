import React from 'react';
import './Form.css';
import { ICard } from '../../interfaces';

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
  material: string;
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
    this.material = 'золото';
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
      const card = {
        id: this.props.id,
        title: this.titleInput.current.value,
        year: this.yearInput.current.value,
        denomination: this.denominationInput.current.value,
        region: this.regionInput.current.value,
        condition: this.conditionInput.current.value,
        material: this.material,
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
    return (
      <form className="form" ref={this.form} onSubmit={this.handleSubmit.bind(this)}>
        <div className="flexContainer">
          <fieldset>
            <label className="form__label form__label-block">Title</label>
            <input
              className="form__input form__input_title"
              type="text"
              placeholder="Input title"
              ref={this.titleInput}
            />
          </fieldset>
          <fieldset>
            <label className="form__label form__label-block">Date of minting</label>
            <input
              className="form__input form__input_year"
              type="text"
              placeholder="Input year or century"
              ref={this.yearInput}
            />
          </fieldset>
        </div>

        <div className="flexContainer">
          <fieldset>
            <label className="form__label form__label-block">Denomination</label>
            <input
              className="form__input form__input_denomination"
              type="text"
              placeholder="Input denomination"
              ref={this.denominationInput}
            />
          </fieldset>
          <fieldset>
            <label className="form__label form__label-block">Region</label>
            <input
              className="form__input form__input_region"
              type="text"
              placeholder="Input region"
              ref={this.regionInput}
            />
          </fieldset>
        </div>

        <div className="flexContainer">
          <fieldset className="flexItem">
            <label className="form__label form__label-block">Material</label>
            <div className="fieldset_type_radio">
              <div className="form__input_radio">
                <input
                  type="radio"
                  className="form__input"
                  value="платина"
                  name="material"
                  defaultChecked
                />
                <label className="form__label">Платина</label>
              </div>
              <div className="form__input_radio">
                <input
                  type="radio"
                  className="form__input form__input_radio"
                  value="золото"
                  name="material"
                />
                <label className="form__label">Золото</label>
              </div>
              <div className="form__input_radio">
                <input
                  type="radio"
                  className="form__input form__input_radio"
                  value="серебро"
                  name="material"
                />
                <label className="form__label">Серебро</label>
              </div>
              <div className="form__input_radio">
                <input
                  type="radio"
                  className="form__input form__input_radio"
                  value="мельхиор"
                  name="material"
                />
                <label className="form__label">Мельхиор</label>
              </div>
              <div className="form__input_radio">
                <input
                  type="radio"
                  className="form__input form__input_radio"
                  value="нейзельбер"
                  name="material"
                />
                <label className="form__label">Нейзельбер</label>
              </div>
              <div className="form__input_radio">
                <input
                  type="radio"
                  className="form__input form__input_radio"
                  value="алюминий"
                  name="material"
                />
                <label className="form__label">Алюминий</label>
              </div>
              <div className="form__input_radio">
                <input
                  type="radio"
                  className="form__input form__input_radio"
                  value="медь"
                  name="material"
                />
                <label className="form__label">Медь</label>
              </div>
            </div>
          </fieldset>
          <div>
            <fieldset className="fieldset__type_select">
              <label className="form__label form__label_condition">Condition</label>
              <select className="form__input" name="location" ref={this.conditionInput}>
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
            <fieldset>
              <label className="form__label form__label-block">Weight</label>
              <input
                className="form__input form__input_weight"
                type="text"
                placeholder="Input weight"
                ref={this.weightInput}
              />
            </fieldset>
            <fieldset>
              <label className="form__label form__label-block">Description</label>
              <input
                className="form__input form__input_title"
                type="text"
                placeholder="Input description"
                ref={this.descriptionInput}
              />
            </fieldset>
            <fieldset className="fieldset__price">
              <label className="form__label form__label_price">Price</label>
              <input
                className="form__input"
                type="number"
                min="0"
                max="1000000"
                placeholder="Input price"
                ref={this.priceInput}
              />
            </fieldset>
          </div>
        </div>
        <fieldset>
          <label className="form__label">Obverse image</label>
          <input
            className="form__input form__input_file"
            type="file"
            accept="image/*"
            ref={this.img.obverse}
          />
        </fieldset>
        <fieldset>
          <label className="form__label">Reverse image</label>
          <input
            className="form__input form__input_file"
            type="file"
            accept="image/*"
            ref={this.img.reverse}
          />
        </fieldset>
        <fieldset>
          <label className="form__label">Confirm your age</label>
          <input type="date" className="form__input form__input_date" placeholder="Input date" />
        </fieldset>
        <fieldset>
          <input type="checkbox" className="form__input form__input_checkbox" />
          <label className="form__label">I Agree to Privacy Policy</label>
        </fieldset>
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
