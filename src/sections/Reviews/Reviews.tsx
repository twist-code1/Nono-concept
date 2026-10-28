import { type CSSProperties } from 'react';
import styles from './Reviews.module.css';
import type { HighlightsContent } from '../../texts/content';
import useScrollReveal from '../../hooks/useScrollReveal.ts';

type ReviewsProps = {
  highlightsText: HighlightsContent;
};

const Reviews = ({ highlightsText }: ReviewsProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="reviews" className={styles.reviews}>
      <div ref={ref} className={`${styles.container} ${styles.reveal} ${isVisible ? styles.isVisible : ''}`}>
        <h2 className={styles.title}>{highlightsText.title}</h2>
        <div className={styles.grid}>
          {highlightsText.items.map((highlight, index) => (
            <div
              key={highlight.id}
              className={styles.card}
              style={{ '--reveal-delay': `${index * 110 + 110}ms` } as CSSProperties}
            >
              <div className={styles.stars}>NÖNÖ</div>
              <p className={styles.text}>{highlight.text}</p>
              <h4 className={styles.author}>{highlight.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
