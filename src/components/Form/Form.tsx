import { useForm } from 'react-hook-form';
import './Form.css';
import { ICard, IFormData } from '../../interfaces';
import TextInput from './Inputs/TextInput';
import SelectInput from './Inputs/SelectInput';
import NumberInput from './Inputs/NumberInput';
import RadioInput from './Inputs/RadioInput';
import FileInput from './Inputs/FileInput';
import DateInput from './Inputs/DateInput';
import CheckboxInput from './Inputs/CheckboxInput';
import React from 'react';

interface IProps {
  addCard: (card: ICard) => void;
  id: number;
}

export default function Form(props: IProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit = async (data: IFormData) => {
    const card: ICard = {
      id: props.id,
      title: data.title || '',
      year: data.year || '',
      denomination: data.denomination || '',
      region: data.region || '',
      condition: data.condition || '',
      material: data.material || '',
      weight: data.weight || '',
      description: data.description || '',
      price: data.price || 0,
      img: {
        obverse: data.obverse || '',
        reverse: data.reverse || '',
      },
    };
    props.addCard(card);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="flexContainer">
        <TextInput
          label="title"
          reference={register}
          name={'title'}
          error={errors?.title?.message?.toString()}
        />
        <TextInput
          label="date of minting"
          reference={register}
          name={'year'}
          error={errors?.title?.message?.toString()}
        />
      </div>

      <div className="flexContainer">
        <TextInput
          label="denomination"
          reference={register}
          name={'denomination'}
          error={errors?.title?.message?.toString()}
        />
        <TextInput
          label="region"
          reference={register}
          name={'region'}
          error={errors?.title?.message?.toString()}
        />
      </div>
      {/*
      <div className="flexContainer">
        <RadioInput label="material" />
        <div>
          <SelectInput label="condition" />
          <TextInput label="weight" />
          <TextInput label="description" />
          <NumberInput label="price" />
        </div>
      </div>
      <FileInput label="obverse image" />
      <FileInput label="reverse image" />
      <DateInput label="confirm your age (18 years)" />
      <CheckboxInput label="i agree to privacy policy" /> */}
      <div className="flexContainer">
        <fieldset>
          <input className="form__input form__input_reset" type="reset" />
        </fieldset>
        <fieldset>
          <input className="form__input form__input_submit" type="submit" />
        </fieldset>
      </div>
    </form>
  );
}
