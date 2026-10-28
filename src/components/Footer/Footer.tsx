import styles from './Footer.module.css';
import type { FooterContent, SiteContent } from '../../texts/content';

type FooterProps = {
  footerText: FooterContent;
  siteText: SiteContent;
};

const Footer = ({ footerText, siteText }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <span className={styles.logo}>{siteText.brand}</span>
          <p className={styles.tagline}>{footerText.tagline}</p>
        </div>
        <div className={styles.linksSection}>
          {siteText.navigation.map((link) => (
            <a key={link.id} href={link.href} className={styles.link}>{link.label}</a>
          ))}
        </div>
        <div className={styles.copySection}>
          <p>{footerText.description}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
