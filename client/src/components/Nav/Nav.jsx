import styles from "./Nav.module.css";

// import local from "../../img/local.svg";
import logo from "../../img/Icon.svg";
import Btnsi from "../Btnsi/Btnsi";
import Btnjn from "../Btnjn/Btnjn";
const Nav = () => {
  return (
    <>
      <div className={styles.Nav}>
        <div className={styles.Itens}>
          <div>
            <img className={styles.logo} src={logo} alt="Logo Starbucks." />
          </div>
          <div className={styles.link}>
            <a href="#">MENU</a>
            <a href="#">REWARDS</a>
            <a href="#">GIFT CARDS</a>
          </div>
          <div className={styles.Divlocal}>
            {/* <img className={styles.local} src={local} alt="" />  */}
            <a href="#">Find a store</a>
          </div>
          <div className={styles.Btns}>
            <Btnsi />
            <Btnjn />
          </div>
        </div>
      </div>
      <div className={styles.Navfixed}>
        <p>Starbucks® Rewards</p>
      </div>
    </>
  );
};

export default Nav;
