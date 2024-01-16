// import styles of this component
import styles from "./MasonryLayout.module.css"
import { useState } from "react";

// import other react pkg to use
import Masonry from "react-masonry-css"

// import other component to use
import MasonryBox from './MasonryBox/MasonryBox';

// MasonryLayout Component
const MasonryLayout = ({ images }) => {

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };



  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {images.map(item => (
          <MasonryBox
            key={item.id}
            wallSrc={item.src}
            userProf={item.user.src}
            userName={item.user.name}
          // userJob={item.user.job} 
          />
        ))}
      </Masonry>

    </>
  )
}

export default MasonryLayout