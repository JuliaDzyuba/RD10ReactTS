import React from 'react';

type Props = {
  counter: number;
}

const Counter: React.FC<Props> = ({ counter }) => {
  return (
    <div>
      <h2>Users counter: {counter}</h2>
    </div>
  );
}

export default Counter;
