import React, { useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';
import Marquee from 'react-fast-marquee';
import ButtonCTA from './ButtonCTA';

interface Props {
  welcome: boolean;
}

const Hero: React.FC<Props> = ({ welcome }) => {
  const cardParentRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const [activeDot, setActiveDot] = useState<number>(1);

  // useEffect(() => {
  //   if (!welcome) {
  //     const onScroll = setInterval(() => {
  //       if (card1Ref.current && card2Ref.current && card3Ref.current) {
  //         setActiveDot((prev) => {
  //           if (prev === 3) {
  //             return 1;
  //           }

  //           return prev + 1;
  //         });
  //       }
  //     }, 3000);

  //     return () => clearInterval(onScroll);
  //   }
  // }, [welcome]);

  useEffect(() => {
    const onScroll = (e: WheelEvent) => {
      if (card1Ref.current && card2Ref.current && card3Ref.current) {
        setActiveDot((prev) => {
          if (e.deltaY < 0) {
            if (prev === 3) {
              return 1;
            }

            return prev + 1;
          } else {
            if (prev === 1) {
              return 3;
            }

            return prev - 1;
          }
        });
      }
    };

    const scrollAction = cardParentRef.current;
    scrollAction?.addEventListener('wheel', (e) => onScroll(e));

    return () => {
      scrollAction?.removeEventListener('wheel', (e) => onScroll(e));
    };
  }, []);

  useEffect(() => {
    switch (activeDot) {
      case 1:
        scrollToRef(card1Ref);
        break;
      case 2:
        scrollToRef(card2Ref);
        break;
      case 3:
        scrollToRef(card3Ref);
        break;
      default:
        break;
    }
  }, [activeDot]);

  const downloadCV = (): void => {
    window.open('/Muh Abdul Azis CV.pdf', '_self');
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>): void => {
    if (cardParentRef.current && ref.current) {
      cardParentRef.current.scrollTop = ref.current.clientHeight * (activeDot - 1);
    }
  };

  return (
    <div id="Hero">
      <div className="hero-container">
        <div className="col1 col">
          <img id="ProfilePict" src="/profile.png" alt="profile-picture" />
          <Marquee>
            <span className="profile-pict-running-text">Muhamad Abdul Azis</span>
          </Marquee>
          <Marquee className="profile-pict-profesion" speed={50}>
            webdeveloper #
          </Marquee>
        </div>
        <div ref={cardParentRef} className="col2 col">
          <div ref={card1Ref} className="hero-card card1">
            <div className="hero-name-texts">
              <span className="hero-name-text1">Hi, I'm</span>
              <span className="hero-name-text2">Muhamad</span>
              <span className="hero-name-text2">Abdul</span>
              <span className="hero-name-text2">Azis</span>
            </div>
            <div className="hero-about-texts">
              <h1 className="hero-about-text1">A bit of my back story...</h1>
              <p className="hero-about-text2">
                I graduated from “almost” an IT major, a major that focused on digital electronics that requires coding. It builds my interest on programming much more than the electronics itself. So here I am ended up with programming
                skills and focusing on web development for the basic learning path. I also have some hobbies related to design and aesthetical objects that supports my interest to learn from web development.
              </p>
              <ButtonCTA action={downloadCV} className="bi bi-download" style={{ marginTop: '40px', alignSelf: 'flex-end' }}>
                Download as CV
              </ButtonCTA>
            </div>
          </div>
          <div ref={card2Ref} className="hero-card card2"></div>
          <div ref={card3Ref} className="hero-card card3"></div>
        </div>
        <div className="col3 col">
          <div
            className={activeDot === 1 ? 'dot active' : 'dot'}
            onClick={() => {
              setActiveDot(1);
            }}
          ></div>
          <div
            className={activeDot === 2 ? 'dot active' : 'dot'}
            onClick={() => {
              setActiveDot(2);
            }}
          ></div>
          <div
            className={activeDot === 3 ? 'dot active' : 'dot'}
            onClick={() => {
              setActiveDot(3);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
