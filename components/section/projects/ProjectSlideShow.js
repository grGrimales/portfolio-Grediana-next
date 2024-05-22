import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import styles from "./ProjectSlideShow.module.css";


export const ProjectSlideShow = ({ images }) => {
  
  return (

    <>

    <Slide easing="ease" duration={7000}  arrows={false} indicators >
      {images?.map((image) => {

        const url = `${image}`;

        return (
          <div className={styles["each-slide"]} key={image}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
    </>
  );
};


