import React from 'react';
import { ILabel } from '@/types/formField';


const CompositeLabel: React.FC<ILabel> = ({ text, image }) => {
  return (
    <span>
      {text}
      {image && <img src={image} alt={text} />}
    </span>
  );
};

export default CompositeLabel;