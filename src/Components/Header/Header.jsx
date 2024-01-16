// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          {/* <Nav /> */}
          <BrickLayout />
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            {/* <h2 className={styles["heading-header-title"]}>Be one who change the world 😎🤘</h2> */}
            <h1 className={styles["heading-header-second-title"]}>
              Hi There !<br />
              I'M <span>Eduard Herak</span>
            </h1>
            <HeaderBoxes titles_numbers={JsonHeader.informations} />
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header