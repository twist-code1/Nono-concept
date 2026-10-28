import styles from './About.module.css';
import cafeImage from '../../assets/photos/cafe.webp';
import type { AboutContent } from '../../texts/content';
import useScrollReveal from '../../hooks/useScrollReveal.ts';

type AboutProps = {
  aboutText: AboutContent;
};

const About = ({ aboutText }: AboutProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className={styles.about}>
      <div ref={ref} className={`${styles.container} ${styles.reveal} ${isVisible ? styles.isVisible : ''}`}>
        <div className={styles.imageWrapper}>
          <img src={cafeImage} alt={aboutText.imageAlt} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{aboutText.title}</h2>
          <p className={styles.description}>{aboutText.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
