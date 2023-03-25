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
  }
  render() {
    console.log(this.form.current?.checkValidity);
    return (
      <form className="form" ref={this.form}>
        <fieldset>
          <label className="form__label">Title</label>
          <input
            className="form__input form__input_title"
            type="text"
            placeholder="Input title"
            ref={this.titleInput}
            required={true}
          />
          <span>Invalid Input</span>
        </fieldset>
        <fieldset>
          <label className="form__label">Date of minting</label>
          <input
            className="form__input form__input_year"
            type="text"
            placeholder="Input year or century"
            ref={this.yearInput}
            required={false}
          />
          <span>Invalid Input</span>
        </fieldset>
        <fieldset>
          <label className="form__label">Denomination</label>
          <input
            className="form__input form__input_denomination"
            type="text"
            placeholder="Input denomination"
            ref={this.denominationInput}
            required={true}
          />
          <span>Invalid Input</span>
        </fieldset>
        <fieldset>
          <label className="form__label">Region</label>
          <input
            className="form__input form__input_region"
            type="text"
            placeholder="Input region"
            ref={this.regionInput}
            required={true}
          />
          <span>Invalid Input</span>
        </fieldset>
        <fieldset>
          <label className="form__label">Condition</label>
          <select name="location">
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
          <label className="form__label">Material</label>
          <div className="fieldset_type_radio">
            <div className="form__input_radio">
              <label className="form__label">Платина</label>
              <input
                type="radio"
                className="form__input"
                value="платина"
                name="material"
                defaultChecked
              />
            </div>
            <div className="form__input_radio">
              <label className="form__label">Золото</label>
              <input type="radio" className="form__input" value="золото" name="material" />
            </div>
            <div className="form__input_radio">
              <label className="form__label">Серебро</label>
              <input type="radio" className="form__input" value="серебро" name="material" />
            </div>
            <div className="form__input_radio">
              <label className="form__label">Мельхиор</label>
              <input type="radio" className="form__input" value="мельхиор" name="material" />
            </div>
            <div className="form__input_radio">
              <label className="form__label">Нейзельбер</label>
              <input type="radio" className="form__input" value="нейзельбер" name="material" />
            </div>
            <div className="form__input_radio">
              <label className="form__label">Алюминий</label>
              <input type="radio" className="form__input" value="алюминий" name="material" />
            </div>
            <div className="form__input_radio">
              <label className="form__label">Медь</label>
              <input type="radio" className="form__input" value="медь" name="material" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <label className="form__label">Weight</label>
          <input
            className="form__input form__input_title"
            type="text"
            placeholder="Input weight"
            ref={this.weightInput}
            required={true}
          />
          <span>Invalid Input</span>
        </fieldset>
        <fieldset>
          <label className="form__label">Description</label>
          <input
            className="form__input form__input_title"
            type="text"
            placeholder="Input description"
            ref={this.descriptionInput}
            required={true}
          />
          <span>Invalid Input</span>
        </fieldset>
        <fieldset>
          <label className="form__label">Price</label>
          <input
            className="form__input form__input_type_price"
            type="number"
            min="0"
            max="1000000"
            placeholder="Input price"
            ref={this.priceInput}
          />
          <span>Invalid Input</span>
        </fieldset>
        <fieldset>
          <label className="form__label">Confirm your age</label>
          <input type="date" className="form__input" placeholder="Input date" />
        </fieldset>
      </form>
    );
  }
}
export default Form;
