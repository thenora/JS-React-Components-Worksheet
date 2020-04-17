import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
  return (
    <img src={props.avatarUrl} className="avatar_img" alt={props.altText} />
  )
}


export default Avatar;