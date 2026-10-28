import { useState } from 'react';
import styles from './Header.module.css';
import type { Language, SiteContent } from '../../texts/content';

type HeaderProps = {
  siteText: SiteContent;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const Header = ({ siteText, language, onLanguageChange }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <header className={styles.header}>
        <nav className={styles.container}>
          <a href="#home" className={styles.logo}>
            {siteText.brand}
          </a>

          <div className={styles.actions}>
            <div className={styles.languageSwitch} role="group" aria-label={siteText.languageLabel}>
              {(['en', 'ru', 'am'] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`${styles.languageButton} ${language === item ? styles.languageButtonActive : ''}`}
                  aria-pressed={language === item}
                  onClick={() => onLanguageChange(item)}
                >
                  {siteText.languageOptions[item]}
                </button>
              ))}
            </div>

            <button
              className={styles.menuButton}
              type="button"
              aria-label={isMenuOpen ? siteText.navigationToggle.close : siteText.navigationToggle.open}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
            {siteText.navigation.map((link) => (
              <li key={link.id}>
                <a href={link.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
  );
};

export default Header;
