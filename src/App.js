import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

import "./App.css";

import image1 from "./assets/lifestyle.jpg";
import image2 from "./assets/photo.jpg";
import image3 from "./assets/gaming.jpg";
import image4 from "./assets/pro.jpg";

export default function App() {
  const [image, setImage] = useState(image1);
  const changeImage = (i) => {
    setImage(i);
  };

  const transitions = useTransition(image, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 1000,
    },
  });

  return (
    <div>
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
            href="./#"
            onMouseOver={() => changeImage(image2)}
            onMouseOut={() => changeImage(image1)}
          >
            Photography
          </a>
          <a
            href="./#"
            onMouseOver={() => changeImage(image3)}
            onMouseOut={() => changeImage(image1)}
          >
            Streaming
          </a>
          <a
            href="./#"
            onMouseOver={() => changeImage(image4)}
            onMouseOut={() => changeImage(image1)}
          >
            Pro
          </a>
        </div>
      </div>
    </div>
  );
}
