import React from "react";
import image1 from "../../Image/image1.png";
import "./homePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage">
      <img src={image1} alt="Envoyer" />
      <div className="homePage_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit
          lectus, mattis a tristique sit amet, faucibus sit amet nunc. Donec
          porttitor blandit nisl, accumsan efficitur mauris volutpat et.
          Vestibulum mattis urna nec turpis congue sagittis. Nulla facilisi. Ut
          sit amet iaculis purus. Maecenas non leo eu ipsum ullamcorper
          faucibus.{" "}
        </p>
      </div>
      <div className="homePage_button">
        <Link to="/page2">
          <button>Suivant &#62;</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
