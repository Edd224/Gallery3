import { useState, useEffect } from "react";

// import styles of this component
import styles from "./App.module.css"

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';
import Dropdown from './Components/Elements/Dropdown/Dropdown';
import {CaretDoubleUp} from '@phosphor-icons/react'
// import json files 
import images from "./Jsons/Images.json"

// App component
const App = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true
    },
    {
      id: 2,
      title: "Books",
      active: false
    },
    {
      id: 3,
      title: "Art images",
      active: false
    },
    {
      id: 4,
      title: "Logo",
      active: false
    },
    {
      id: 5,
      title: "Adobe Photoshop",
      active: false
    }
  ]

  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })
      return [...images.categories[categoryChoose]]
    })
  }

  // Scroll-to-top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide scroll-to-top button based on scroll position
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 200); // Adjust the scroll position threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
        <ContainerCard>
          <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
            <h1>All images</h1>
            <Dropdown title="All Images" items={ddItems} liftingDdTextUp={takeDdTitle} />
          </div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard>

        {showScrollButton && (
          <button className={styles["scroll-to-top"]} onClick={scrollToTop}>
            <CaretDoubleUp size={24} color="#48ff00" />
          </button>
        )}
      </div>
    </>
  )
}

export default App