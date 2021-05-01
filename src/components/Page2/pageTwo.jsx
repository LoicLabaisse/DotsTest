import React from "react";
import image2 from "../../Image/image2.png";
import "./pageTwo.css";
import { Link } from "react-router-dom";

const PageTwo = () => {
  return (
    <div className="pageTwo">
      <img src={image2} alt="Rechercher" />
      <div className="pageTwo_text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit
          lectus, mattis a tristique sit amet, faucibus sit amet nunc. Donec
          porttitor blandit nisl, accumsan efficitur mauris volutpat et.
          Vestibulum mattis urna nec turpis congue sagittis. Nulla facilisi. Ut
          sit amet iaculis purus. Maecenas non leo eu ipsum ullamcorper
          faucibus.{" "}
        </p>
      </div>
      <div className="pageTwo_button">
        <Link to="/">
          <button>Suivant &#62;</button>
        </Link>
      </div>
    </div>
  );
};

export default PageTwo;
