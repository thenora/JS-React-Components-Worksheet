import React from 'react';
import Avatar from './Avatar';

const AvatarList = (props) => {


  const userInfo = props.profilePics.map((pic) => {
    return (
      <Avatar
      imgUrl = {pic.imgUrl}
      altText = {pic.altText}
      />
      );
    }
  );

  return (
   <section>
    {userInfo}
   </section>
  )
};

export default AvatarList;