import React from 'react';

type Props = {
  onClick: () => void,
}

const Button: React.FC<Props> = ({onClick}) => {
  return (
    <button type="button" onClick={onClick}>Add new user</button>
  );
};

export default Button;
