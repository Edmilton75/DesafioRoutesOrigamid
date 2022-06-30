import React from "react";
import styles from "../styles/Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>Edmilton7500@gmail.com</li>
          <li>(85) 9 9605-1157</li>
          <li>R. Ilha dourada N° 380</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
