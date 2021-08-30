import React from 'react';

const Counter = (props) => {
  const { id, value, name, onIncrement, onDecrement, onDelete } = props;

  const getCount = () => !value ? 'Ноль' : value;

  const getCountClasses = () => {
    const isDanger = !value ? 'danger' : 'primary';
    return `badge m-2 bg-${isDanger}`;
  }

  return (
    <>
      <h4>{name}</h4>
      <span className={getCountClasses()}>{getCount()}</span>
      <button className='btn btn-secondary btn-sm' onClick={() => onIncrement({ id })}>+</button>
      <button className='btn btn-secondary btn-sm' onClick={() => onDecrement({ id })} disabled={!value}>-</button>
      <button className='btn btn-danger btn-sm m-2' onClick={() => onDelete({ id })}>Delete</button>
    </>
  );
}

export default Counter;
