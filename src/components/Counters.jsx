import React, { useState } from 'react';
import Counter from './Counter';

const initCounters = [
  {
    value: 0,
    id: 0,
    name: 'Ложка',
  },
  {
    value: 0,
    id: 1,
    name: 'Вилка',
  },
  {
    value: 0,
    id: 2,
    name: 'Тарелка',
  },
  {
    value: 0,
    id: 3,
    name: 'Стартовый набор минималиста',
  },
  {
    value: 0,
    id: 4,
    name: 'Ненужные вещи',
  },
];

const Counters = () => {
  const [ counters, setCounters ] = useState(initCounters);

  const handleIncrement = ({ id }) => {
    const counterIndex = counters.findIndex((counter) => counter.id === id);
    const counter = counters[counterIndex];
    const newCounters = [...counters]
    newCounters[counterIndex] = { ...counter, value: counter.value + 1};
    setCounters(newCounters);
  }

  const handleDecrement = ({ id }) => {
    const counterIndex = counters.findIndex((counter) => counter.id === id);
    const counter = counters[counterIndex];
    const newCounters = [...counters]
    newCounters[counterIndex] = { ...counter, value: counter.value - 1};
    setCounters(newCounters);
  }
  const handleDelete = ({ id }) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  }

  return (
    <>
      {counters.map((value) => 
        <Counter
          key={value.id}
          {...value}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}

export default Counters;
