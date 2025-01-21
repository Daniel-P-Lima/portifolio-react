import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>
      </div>
      <div className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Sou Daniel Lima, </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt="imagem"
        ></img>
      </div>
    </div>
  );
}
