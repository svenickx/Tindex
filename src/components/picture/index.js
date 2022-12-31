import React from 'react';
import {CardImage} from './style';

const Picture = ({src}) => {
  return (
    <CardImage
      source={{
        uri:
          src !== ''
            ? src
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png',
      }}
    />
  );
};

export default Picture;
