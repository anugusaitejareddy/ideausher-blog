import React from "react";
import styles from "./BlogHero.module.css";
import { heroImages } from "../../constants/data";
import { GrPrevious, GrNext } from "react-icons/gr";

function BlogHero() {
  const [currentImage, setCurrentImage] = React.useState(0);

  let imageTransform = [
    { transform: 1 - currentImage },
    { transform: 2 - currentImage },
    { transform: 3 - currentImage },
  ];

  function handleNextImage() {
    if (currentImage === 3) {
      setCurrentImage(1);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function handlePrevImage() {
    if (currentImage === 1) {
      setCurrentImage(3);
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
          <div key={index}>
            <img
              src={image.imageURL}
              alt=""
              style={{
                transform: `translateX(${
                  imageTransform[index].transform * 100
                }%)`,
              }}
            />
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
