import { useEffect, useState } from "react";
import { useTransition, animated } from "@react-spring/web";

import "./App.css";

import image1 from "./assets/lifestyle.jpg";
import image2 from "./assets/photo.jpg";
import image3 from "./assets/gaming.jpg";
import image4 from "./assets/pro.jpg";

const time = 700;

export default function App() {
  const [image, setImage] = useState(image1);
  const [action, setAction] = useState(null);
  const changeImage = (i) => {
    if (!action) setImage(i);
  };

  const redirectAfterHide = (e) => {
    e.preventDefault();
    setAction(e);
  };

  const transitions = useTransition(image, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 500,
    },
  });

  useEffect(() => {
    let timeout;
    if (action) {
      timeout = setTimeout(() => {
        window.location = action.target.href;
      }, time);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [action]);

  // ? Preload the images to avoid flash on first render
  useEffect(() => {
    const pictures = [image1, image2, image3, image4];
    pictures.forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });
  }, []);

  return (
    <>
      {transitions((props, item) => {
        return (
          <animated.div
            className="background"
            style={{ ...props, backgroundImage: `url(${item})` }}
          />
        );
      })}
      <div className="box">
        <div className="innerBox">
          <a
            href="https://photo.joffraybillon.fr"
            onClick={redirectAfterHide}
            onMouseOver={() => changeImage(image2)}
            onMouseOut={() => changeImage(image1)}
          >
            Photography
          </a>
          <a
            href="https://freedou.fr"
            onClick={redirectAfterHide}
            onMouseOver={() => changeImage(image3)}
            onMouseOut={() => changeImage(image1)}
          >
            Streaming
          </a>
          <a
            href="https://joffraybillon.fr"
            onClick={redirectAfterHide}
            onMouseOver={() => changeImage(image4)}
            onMouseOut={() => changeImage(image1)}
          >
            Pro
          </a>
        </div>
      </div>
    </>
  );
}
