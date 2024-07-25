import React from "react";
import styles from "./BlogHero.module.css";
import { heroImages } from "../../constants/data";
import { GrPrevious, GrNext } from "react-icons/gr";

function BlogHero() {
  const [currentImage, setCurrentImage] = React.useState(0);

  function handleNextImage() {
    if (currentImage === 2) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function handlePrevImage() {
    if (currentImage === 0) {
      setCurrentImage(2);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  return (
    <div className={styles.blogHeroWrapper}>
      <GrPrevious
        className={styles.grPrevious}
        onClick={handlePrevImage}
        style={{ alignSelf: "center", cursor: "pointer" }}
      />
      <div className={styles.heroImagesWrapper}>
        {heroImages.map((image, index) => (
          <div key={index} style={{ flex: index === currentImage ? 1 : 0 }}>
            <img src={image.imageURL} alt="" />
          </div>
        ))}
      </div>
      <GrNext
        onClick={handleNextImage}
        style={{ alignSelf: "center", cursor: "pointer" }}
      />
    </div>
  );
}

export default BlogHero;
