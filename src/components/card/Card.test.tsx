import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Card from './Card';

describe('Card', () => {
  it('Render card', () => {
    const testData = {
      id: 1,
      title: 'Шреккенбергер',
      year: '1507',
      sortingYear: 1507,
      denomination: '1',
      region: 'Саксония',
      condition: 'XF',
      material: 'серебро',
      weight: '4,497',
      description:
        'Шреккенбергер — саксонский грошен, который чеканился с 1498 года из серебра, добытого в рудниках горы Шреккенберг (нем. Schreckenberg, в дословном переводе — Страшная гора). Чеканка велась в Саксонии и Тюрингии до 1571 года и была возобновлена во время Тридцатилетней войны (1618—1648). Первоначально шреккенбергер приравнивался к 1/7 золотого гульдена (голдгульдена), что соответствовало 1/7 серебряного гульдинера. На аверсе изображался ангел, поддерживающий щит со скрещёнными мечами (поэтому иногда такие монеты называют Engelgroschen — ангельский грош). На оборотной стороне — гербовый щит, разделённый на 4 части. Первые монеты весили 4,497 г (чистого серебра — 4,206 г), с 1558 года — 5,03 г (4,54 г).',
      price: 700,
      img: {
        obverse: './img/cards/0001.png',
        reverse: './img/cards/0002.png',
      },
    };
    render(<Card card={testData} />);
    expect(
      screen.getByRole('heading', {
        level: 4,
      })
    ).toHaveTextContent('Шреккенбергер');
    expect(
      screen.getAllByRole('img', {
        name: 'coin',
      })
    ).toBeInTheDocument;
  });
});
