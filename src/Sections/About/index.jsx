import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hey, I'm Shristi, a Flutter Developer . {""}



            An aspiring Flutter Developer with skills of creating intuitive and interactive applications.
            I am also dedicated to improving my problem solving skills by solving questions related to DSA.
            I have been trying to learn various skills and languages such as Flutter, MySQL, C++, Java, Python and many more. 
          </p>
          <p className={styles.desc}>
            I'm a final year student pursuing B.Tech. in Computer
            Science and Engineering at{" "}
            <a href="https://vitbhopal.ac.in/" className={styles.color1}>
              {" "}
              Vellore Institute Of Technology, Bhopal,India.
            </a>{" "}
            {/* <br></br>I have built accessible, inclusive products at start-ups
            like{" "}
            <a href="https://ravenapp.dev/" className={styles.color1}>
              Raven
            </a>{" "}
            &{" "}
            <a href="##" className={styles.color1}>
              DS Dairy Systems.
            </a>{" "}
            Also a community evangelist currently leading the local{" "}
            <a
              href="https://gdsc.community.dev/lakshmi-narain-college-of-technology-lnct-bhopal/"
              className={styles.color1}
            >
              GDSC (Google Developers Club)
            </a>{" "}
            chapter at my university with over 1K+ community members. */}
          </p>
        </div>

        <div className={styles.right}>
          <img
            src="./images/Profile_Picture.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
