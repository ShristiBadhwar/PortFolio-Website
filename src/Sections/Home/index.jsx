import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hey, I am</p>
      <h1 className={styles.heading_1}>Shristi Badhwar.</h1>
      <h1 className={styles.heading_2}>I develop apps.</h1>
      <p className={styles.desc}>
        I'm a budding software developer who specializes application development. {" "}
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;
