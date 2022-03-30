import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { nb } from "../nb";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Home = () => {
  const { home } = useGlobalContext();
  const [index, setIndex] = useState(2);

  const changeIndex = (direction) => {
    switch (direction) {
      case "up":
        if (index === nb.length) {
          setIndex(1);
        } else {
          setIndex(index + 1);
        }
        break;
      case "down":
        if (index === 1) {
          setIndex(3);
        } else {
          setIndex(index - 1);
        }
        break;
      default:
        console.log("error");
        break;
    }
  };
  return (
    <div className="home" id="home" ref={home}>
      <div className="home-center">
        {nb.map((item) => {
          return (
            <div
              key={item.id}
              className={` ${
                item.id === index
                  ? "center"
                  : item.id === index + 1 ||
                    (index === nb.length && item.id === 1)
                  ? "left"
                  : "right"
              } image`}
            >
              <img src={item.img} alt="a" />
            </div>
          );
        })}
        <button id="btn-left" onClick={() => changeIndex("down")}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button id="btn-right" onClick={() => changeIndex("up")}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Home;
