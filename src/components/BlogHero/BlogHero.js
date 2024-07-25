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
    <div>
      <div className={styles.blogHeroWrapper}>
        <GrPrevious
          onClick={handlePrevImage}
          style={{ alignSelf: "center", cursor: "pointer" }}
        />
        <div className={styles.heroImagesWrapper}>
          {heroImages.map((image, index) => (
            <img
              src={image.imageURL}
              alt=""
              style={{ flex: index === currentImage ? 1 : 0 }}
            />
          ))}
        </div>
        <GrNext
          onClick={handleNextImage}
          style={{ alignSelf: "center", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default BlogHero;
