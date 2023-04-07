import { useForm } from 'react-hook-form';
import './Form.css';
import { IFormData, IBook } from '../../interfaces';
import TextInput from './Inputs/TextInput';
import SelectInput from './Inputs/SelectInput';
import NumberInput from './Inputs/NumberInput';
import RadioInput from './Inputs/RadioInput';
import FileInput from './Inputs/FileInput';
import DateInput from './Inputs/DateInput';
import CheckboxInput from './Inputs/CheckboxInput';
import React from 'react';

interface IProps {
  addCard: (card: IBook) => void;
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
    const card: IBook = {
      id: props.id.toString(),
      volumeInfo: {
        title: data.title || '',
        authors: data.author ? [data.author] : [''],
        description: data.description || '',
        language: data.language || '',
        mainCategory: data.category ? data.category : '',
        imageLinks: {
          smallThumbnail: data.smallThumbnail ? URL.createObjectURL(data.smallThumbnail[0]) : '',
          thumbnail: data.thumbnail ? URL.createObjectURL(data.thumbnail[0]) : '',
        },
        publishedDate: data.publishedDate?.toString() || '',
        pageCount: data.pageCount || 0,
      },
      kind: data.kind || '',
    };
    props.addCard(card);
    alert('Cards added');
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <div className="flexContainer">
        <TextInput
          label="title"
          reference={register}
          name={'title'}
          error={errors?.title?.message?.toString()}
        />
        <TextInput
          label="author"
          reference={register}
          name={'author'}
          error={errors?.author?.message?.toString()}
        />
      </div>

      <div className="flexContainer">
        <TextInput
          label="category"
          reference={register}
          name={'category'}
          error={errors?.category?.message?.toString()}
        />
        <TextInput
          label="description"
          reference={register}
          name={'description'}
          error={errors?.description?.message?.toString()}
        />
      </div>

      <div className="flexContainer">
        <RadioInput
          label="kind"
          reference={register}
          name="kind"
          error={errors?.kind?.message?.toString()}
        />
        <div>
          <SelectInput
            label="language"
            reference={register}
            name="language"
            error={errors?.language?.message?.toString()}
          />
          <NumberInput
            label="Count of pages"
            reference={register}
            name={'pageCount'}
            error={errors?.pageCount?.message?.toString()}
          />
        </div>
      </div>

      <FileInput
        label="small thumbnail image"
        reference={register}
        name={'smallThumbnail'}
        error={errors?.smallThumbnail?.message?.toString()}
      />
      <FileInput
        label="thumbnail image"
        reference={register}
        name={'thumbnail'}
        error={errors?.thumbnail?.message?.toString()}
      />

      <DateInput
        label="date of publishing"
        reference={register}
        name={'publishedDate'}
        error={errors?.publishedDate?.message?.toString()}
      />

      <CheckboxInput
        label="i agree to privacy policy"
        reference={register}
        name={'policy'}
        error={errors?.policy?.message?.toString()}
      />
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
