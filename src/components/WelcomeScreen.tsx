import React, { useEffect, useRef, useState } from 'react';
import '../styles/WelcomeScreen.css';

type Props = {
  setWelcome: React.Dispatch<React.SetStateAction<boolean>>;
};

const WelcomeScreen: React.FC<Props> = ({ setWelcome }) => {
  const screenRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState<string>('');
  const [iterate, setIterate] = useState<number>(0);

  useEffect(() => {
    const texts: string = 'WELCOME,';

    if (text.length < texts.length) {
      const timeout = setTimeout(() => {
        setText((prev: string) => prev + texts[iterate]);
        setIterate(iterate + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [text, iterate]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (screenRef.current) {
        screenRef.current.style.height = '0dvh';
        screenRef.current.style.top = '50dvh';
      }
    }, 5000);

    const timeout2 = setTimeout(() => {
      setWelcome(false);
    }, 6500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [setWelcome]);

  return (
    <div ref={screenRef} id="WelcomeScreen">
      <svg width={0} height={0}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" />
        </filter>
      </svg>

      <span className="welcome-text">{text}</span>
    </div>
  );
};

export default WelcomeScreen;
