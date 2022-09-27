import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import styles from "./ProjectSlideShow.module.css";
const fadeImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ];

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


{/*import { Slide } from "react-slideshow-image"

import { Zoom } from 'react-slideshow-image';
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ];

 export const ProjectSlideShow = () => {
    return (
      <div className="slide-container">
        <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
      </Fade>
      </div>
    )
}*/}