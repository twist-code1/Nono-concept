import styles from './Hero.module.css';
import type { HeroContent } from '../../texts/content';

type HeroProps = {
  heroText: HeroContent;
};

const Hero = ({ heroText }: HeroProps) => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>{heroText.eyebrow}</p>
        <h1 className={styles.title}>{heroText.title}</h1>
        <p className={styles.description}>{heroText.description}</p>
        <a href={heroText.cta.href} className={styles.button}>{heroText.cta.label}</a>
      </div>
    </section>
  );
};

export default Hero;
