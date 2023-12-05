import styles from "./Imagem.module.css";

const Imagem = ({ img }) => {
  return (
    <div>
      <div>
        <img src={img} alt="rações para cães." width={"270"} />
      </div>
    </div>
  );
};

export default Imagem;
