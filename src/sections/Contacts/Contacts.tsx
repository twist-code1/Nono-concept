import { type CSSProperties } from 'react';
import styles from './Contacts.module.css';
import type { ContactsContent } from '../../texts/content';
import useScrollReveal from '../../hooks/useScrollReveal.ts';

type ContactsProps = {
  contactsText: ContactsContent;
};

const Contacts = ({ contactsText }: ContactsProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className={styles.contact}>
      <div ref={ref} className={`${styles.container} ${styles.reveal} ${isVisible ? styles.isVisible : ''}`}>
        <h2 className={styles.title}>{contactsText.title}</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            {contactsText.details.map((detail, index) => (
              <div
                key={detail.id}
                className={styles.item}
                style={{ '--reveal-delay': `${index * 75 + 120}ms` } as CSSProperties}
              >
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </div>
            ))}
            <div
              className={styles.item}
              style={{ '--reveal-delay': `${contactsText.details.length * 75 + 120}ms` } as CSSProperties}
            >
              <h3>{contactsText.social.title}</h3>
              <div className={styles.socials}>
                {contactsText.social.links.map((link) => (
                  <a key={link.id} href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              title={contactsText.mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d675.7524122162114!2d44.5120155!3d40.179512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd76a2c4c0eb%3A0x6d698c4973ab639e!2zTsOWTsOW!5e1!3m2!1sru!2sam!4v1785099822323!5m2!1sru!2sam"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
