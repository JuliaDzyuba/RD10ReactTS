import React from 'react';

type AvatarProps = {
  source: string,
  username: string,
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
      <img src={props.source} alt={props.username} />
  );
};

export default Avatar;
