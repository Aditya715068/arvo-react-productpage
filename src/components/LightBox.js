import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img1Icon from "../images/img1-icon.jpg";
import img2Icon from "../images/img2-icon.jpg";
import img3Icon from "../images/img3-icon.jpg";
import img4Icon from "../images/img4-icon.jpg";
import { useState, useEffect } from "react";
const LightBox = (num) => {
  //   let number = 1 + props.imageTrack;
  useEffect(() => {
    setImage2(num.imageTrack);
  }, [num.imageTrack]);
  const [image2, setImage2] = useState(num.imageTrack);
  let url = image2;
  if (image2 == 1) {
    url = img1;
  } else if (image2 == 2) {
    url = img2;
  } else if (image2 == 3) {
    url = img3;
  } else if (image2 == 4) {
    url = img4;
  }
  return (
    <div className="lightBox-div">
      <div className="lightBox-row">
        <div className="lightBox-col lightBox-col1">
          <svg
            onClick={() => {
              document
                .querySelector(".lightBox-div")
                .classList.remove("lightBox-toggle");
              document
                .querySelector(".shadow")
                .classList.remove("shadow-toggle");
            }}
            className="lightBox-close"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#FFFFFF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="lightBox-col lightBox-col2">
          <svg
            onClick={() => {
              let num;
              num = image2 - 1;
              if (num < 1) {
                num = 4;
              }
              setImage2(num);
            }}
            className="prev"
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <img alt="img" className="big-sneaker lightBox-sneaker" src={url} />
          <svg
            onClick={() => {
              let num;
              num = image2 + 1;
              if (num > 4) {
                num = 1;
              }
              setImage2(num);
            }}
            className="next"
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="lightBox-col lightBox-col3">
          <div
            className={`small-sneaker-div ${image2 == 1 && "active-sneaker"}`}
          >
            <img
              alt="img"
              className={`small-sneaker`}
              onClick={() => {
                setImage2(1);
              }}
              src={img1Icon}
            />
          </div>
          <div
            className={`small-sneaker-div ${image2 == 2 && "active-sneaker"}`}
          >
            <img
              alt="img"
              className={`small-sneaker`}
              onClick={() => {
                setImage2(2);
              }}
              src={img2Icon}
            />
          </div>
          <div
            className={`small-sneaker-div ${image2 == 3 && "active-sneaker"}`}
          >
            <img
              alt="img"
              className={`small-sneaker`}
              onClick={() => {
                setImage2(3);
              }}
              src={img3Icon}
            />
          </div>
          <div
            className={`small-sneaker-div ${image2 == 4 && "active-sneaker"}`}
          >
            <img
              alt="img"
              className={`small-sneaker`}
              onClick={() => {
                setImage2(4);
              }}
              src={img4Icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBox;
