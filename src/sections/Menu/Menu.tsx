import { type CSSProperties, useRef } from 'react';
import styles from './Menu.module.css';
import type { MenuContent } from '../../texts/content';
import useScrollReveal from '../../hooks/useScrollReveal.ts';

type MenuProps = {
  menuText: MenuContent;
};

const MenuCarousel = ({ menuText }: MenuProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} className={`${styles.carouselContainer} ${styles.reveal} ${isVisible ? styles.isVisible : ''}`} id="menu">
      <h2 className={styles.sectionTitle}>{menuText.title}</h2>
      
      <div className={styles.carouselWrapper}>
        <button className={`${styles.arrow} ${styles.prev}`} onClick={() => scroll('left')} aria-label={menuText.controls.previous}>
          &#10094;
        </button>

        <div className={styles.carouselTrack} ref={scrollRef}>
          {menuText.items.map((item, index) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
            >
              <div className={`${styles.cardImage} ${styles[item.visual]}`}>
                <span>{item.eyebrow}</span>
              </div>
              <div className={styles.cardBody}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.next}`} onClick={() => scroll('right')} aria-label={menuText.controls.next}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default MenuCarousel;
