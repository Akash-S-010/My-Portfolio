import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Typewriter() {
  const [text] = useTypewriter({
    words: ['MERN Stack Developer','Frontend Developer', 'Backend Developer','Graphic Designer'],
    loop: true,
    delaySpeed: 1000,
    typeSpeed: 100,
    deleteSpeed:30,
  });

  return (
    <span>
      {text}
      <Cursor />
    </span>
  );
}

export default Typewriter;
