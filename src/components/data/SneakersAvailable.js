import Shoe1 from "../../assets/image-product-1.jpg";
import Shoe1Thumbnail from "../../assets/image-product-1-thumbnail.jpg";
import Shoe2 from "../../assets/image-product-2.jpg";
import Shoe2Thumbnail from "../../assets/image-product-2-thumbnail.jpg";
import Shoe3 from "../../assets/image-product-3.jpg";
import Shoe3Thumbnail from "../../assets/image-product-3-thumbnail.jpg";
import Shoe4 from "../../assets/image-product-4.jpg";
import Shoe4Thumbnail from "../../assets/image-product-4-thumbnail.jpg";

const SneakersAvailable = [
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

export default SneakersAvailable;
