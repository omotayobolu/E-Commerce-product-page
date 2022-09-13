import React from "react";

import Shoe1 from "../../assets/image-product-1.jpg";
import Shoe1Thumbnail from "../../assets/image-product-1-thumbnail.jpg";
import Shoe2 from "../../assets/image-product-2.jpg";
import Shoe2Thumbnail from "../../assets/image-product-2-thumbnail.jpg";
import Shoe3 from "../../assets/image-product-3.jpg";
import Shoe3Thumbnail from "../../assets/image-product-3-thumbnail.jpg";
import Shoe4 from "../../assets/image-product-4.jpg";
import Shoe4Thumbnail from "../../assets/image-product-4-thumbnail.jpg";

import classes from "./AvailableSneakers.module.css";

const SNEAKERS_AVAILABLE = [
  {
    id: "s1",
    shoe: <img src={Shoe1} alt="" />,
    shoeThumbnail: <img src={Shoe1Thumbnail} alt="" />,
  },
  {
    id: "s2",
    shoe: <img src={Shoe2} alt="" />,
    shoeThumbnail: <img src={Shoe2Thumbnail} alt="" />,
  },
  {
    id: "s3",
    shoe: <img src={Shoe3} alt="" />,
    shoeThumbnail: <img src={Shoe3Thumbnail} alt="" />,
  },
  {
    id: "s4",
    shoe: <img src={Shoe4} alt="" />,
    shoeThumbnail: <img src={Shoe4Thumbnail} alt="" />,
  },
];

const AvailableSneakers = (props) => {
  return (
    <div>
      <div className={classes.shoeSection}>
        {SNEAKERS_AVAILABLE.map((shoe) => {
          return (
            <div
              key={shoe.id}
              onClick={() => props.changeShoe(shoe.id)}
              className={classes.displayedShoes}
            >
              <div>
                <div
                  className={
                    props.selectedShoe === shoe.id
                      ? classes.thumbnailActive
                      : classes.thumbnails
                  }
                >
                  {shoe.shoeThumbnail}
                </div>
              </div>
              {props.selectedShoe === shoe.id ? shoe.shoe : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableSneakers;
