import React, { useEffect, useState } from 'react';
import './components/heading.css';

function Heading() {
  const [text, setText] = useState('');
  const fullText = 'REALITY IS THE STILLNESS BURIED DEEP BENEATH THE ILLUSION !!!';

  useEffect(() => {
    let typingTimeout;
    let eraseTimeout;

    const typeWriter = (index) => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        typingTimeout = setTimeout(() => typeWriter(index + 1), 200);
      } else {
        eraseTimeout = setTimeout(() => typeWriter(0), 3000); 
      }
    };

    typeWriter(0);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(eraseTimeout);
    };
  }, []);

  return (
    <header className="typewriter">{text}</header>
  );
}

export default Heading;
