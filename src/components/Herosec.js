import Sneakers from "./Sneakers";
import Header from "./Header";
import { useState, useEffect, useRef } from "react";
import fake from "../images/counterfeit-text-red-round-grungy-stamp-texture-217814824.jpg"
import claim from "../images/claim.png";
import { useParams, useLocation } from "react-router-dom";
import certificate from "../images/certificate.png";
import cartImg from "../images/img1-icon.jpg";
import product from '../images/product-design-sketch-name.png'
import load from "../images/Animation - 1702820512387.gif"
import "./hero.css";
import axios from "axios";

const Herosec = () => {
  const [items, setItems] = useState(0);
  const [cart, setCart] = useState(0);
  const [endpoint, setEndpoint] = useState("");
  const [activeButton, setActiveButton] = useState("button1");
  const [displayedData, setDisplayedData] = useState("");
  const [displayedDataheading, setDisplayedDataheading] = useState("");
  const [data, setdata] = useState("");
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const shadowRef = useRef(null);
  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    // Update active button and associated data
    setActiveButton(buttonId);
    console.log(buttonId);
    if (buttonId == "button1") {
      setDisplayedDataheading(data.data.productName);
      setDisplayedData(data.data.productDescription);
    } else if (buttonId == "button2") {
      setDisplayedDataheading(data.data.productBrand);
      setDisplayedData(data.data.aboutBrand);
    }
  };
  const shadowFu = function () {
    return shadowRef.current;
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const uidParam = searchParams.get("uid");
  console.log("------>", uidParam);
  // setEndpoint(uidParam)

  useEffect(() => {
    axios
      .get(`https://ar-1pvt.onrender.com/api/users/auth/213/?uid=${uidParam}`)
      .then(
        (response) => {
          console.log(response.data);
          setdata(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [uidParam]);
 
  const arrayMap = data ? data.data.productJourney : [];

  const timelineList1 = arrayMap.map(function (i) {
    console.log(i);
    return {
      title: i.title,
      cardTitle: i.time,
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    };
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 6 seconds
    const delay = 8000;

    const timeoutId = setTimeout(() => {
      // After 6 seconds, set loading to false
      setLoading(false);
    }, delay);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const timelineList = [
    {
      title: "e",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
  ];  console.log(timelineList1,timelineList);

  return (<>
    {loading?(<>
    <div style={{display:'flex',justifyContent:'center' ,backgroundColor:'black'}}>
      <img src={load} height={500} width={500}/>
    </div></>):data?(<>
    <div className="hero-sec content-div">
     
      <Header cartItems={[cart, shadowFu]} />
      <div ref={shadowRef} className="shadow"></div>
      <div className="cart-box">
        <span className="cart-para cart-heading">
          Cart
          <hr className="cart-hr" />
        </span>

        <p ref={myRef3} className="cart-para empty-para">
          Your cart is empty.
        </p>
        <div ref={myRef1} className="cart-item-div">
          <div className="cart-item-col1">
            <img src={cartImg} className="cart-item-img" />
          </div>
          <div className="cart-item-col2">
            <p className="cart-para">
              Fall Limited Edition Sneakers $125.00 x {cart}{" "}
              <span className="item-amount">${125 * cart}.00</span>
            </p>
          </div>
          <div className="cart-item-col3">
            <svg
              className="cart-del"
              onClick={() => {
                setCart(cart - 1);
              }}
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a"
                />
              </defs>
              <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </div>
        </div>
        <div ref={myRef2} className="checkout-div">
          <button className="checkout-btn">checkout</button>
        </div>
      </div>
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px",
          padding: "10px",
        }}
      >
        <img src={certificate} height={400} />
      </div>

      <div className="hero-row">
        <div className="hero-col hero-col1">
          <br></br>
          {/* <img src={certificate} height={300} width={500}/> */}
          <br></br>
          <Sneakers productImage={data ? data.data.productImage : ""} />
        </div>
        <div className="hero-col hero-col2">
          <div className="col2-wrapper">
            <h4 className="hero-subHeading">
              {data ? data.data.digitalLegacy : ""}
            </h4>
            <div style={{ color: "white" }}>
              <h1 className="main-heading">
                {displayedDataheading
                  ? displayedDataheading
                  : data
                  ? data.data.productName
                  : ""}
              </h1>
            </div>
            <p className="hero-para">
              {displayedData
                ? displayedData
                : data
                ? data.data.productDescription
                : ""}
            </p>

            <div
              class="multi-button"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button
                onClick={() => handleButtonClick("button1")}
                // className="button"
                // id="cut"
                style={{ border: "none", background: "none" }}
              >
                About Product
              </button>
              {"|"}
              <button
                onClick={() => handleButtonClick("button2")}
                style={{ border: "none", background: "none" }}
              >
                About Brand
              </button>
              {/* <button
        onClick={() => handleButtonClick('button3')}
        className='button'
        id="paste"
      >
        Button 3
      </button> */}
            </div>

            <div className="cart2-sec">
              <div className="cart2-col cart2-col2">
                <button
                  style={{
                    background:
                      "radial-gradient(ellipse farthest-corner at right bottom,#fedb37 0,#fdb931 8%,#9f7928 30%,#8a6e2f 40%,transparent 80%),radial-gradient(ellipse farthest-corner at left top,#fff 0,#ffffac 8%,#d1b464 25%,#5d4a1f 62.5%,#5d4a1f 100%)",
                  }}
                  className="cart2-btn"
                >
                  <img src={claim} height={80} width={70} />
                  <span className="cart2-text">Claim Now</span>
                </button>
              </div>
              {/* <div style={{ width: "500px", height: "950px" }}>
    
      </div> */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="col2-wrapper" style={{color:'white'}}>
      <h1 className="main-heading">Tracing Origins, Authenticating Ownership:</h1>
      </div>
      <div class="timeline" style={{display:"flex",justifyContent:'center'}}>
  <div class="outer">
    {arrayMap.map(function(data) {
      return (
        <div class="card">
        <div class="info">
          <h3 class="title">{data.title} -{data.time}</h3>
          <p>  {data.description}</p>
        </div>
      </div>
      )
    })}

  </div>
</div> </div>
    </>):(<>
    <div style={{display:'flex',justifyContent:'center' ,backgroundColor:'black'}}>
      <img src={fake} height='150%' width='100%'/>
    
    </div>
 </>)}
    </> );
};

export default Herosec;
