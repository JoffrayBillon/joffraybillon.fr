import "./styles.css";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/streaming.jpg";
import image4 from "./assets/pro.jpg";
import { useState } from "react";

import { useTransition, animated } from "react-spring";

export default function App() {
  const [image, setImage] = useState(image1);
  const changeImage = (image) => {
    setImage(image);
  };

  const transitions = useTransition(image, (image) => image, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 1000
    }
  });

  return (
    <div>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div
            key={key}
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
