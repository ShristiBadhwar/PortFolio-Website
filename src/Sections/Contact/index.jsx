import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function Contact() {
	return (
		<section className={styles.contact_section} id="contact">
			<div className={styles.heading_1}>
				<Heading index="03" heading="Contact Me" />
			</div>
			<h1 className={styles.heading_2}>Get In Touch</h1>
			<p className={styles.desc}>
				Feel free to get in touch with me. I am open to discussing new
				projects, or opportunities to be part of your visions.
			</p>
			<a href="mailto:shristibadhwar@gmail.com">
				<button className={styles.btn}>Contact</button>
			</a>
		</section>
	);
}

export default Contact;
