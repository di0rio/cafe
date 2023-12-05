import styles from "./Nav.module.css";

// import Imagem from "../Imagem/Imagem";

import logo from "../../img/Icon.svg";
const Nav = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.Itens}>
        <img src={logo} alt="Logo Starbucks." />
        {/* <Imagem className={styles.logo} img={logo}></Imagem> */}
      </div>
    </div>
  );
};

export default Nav;
