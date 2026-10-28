import { useEffect, useState } from 'react';
import Header from './components/Header/Header.tsx';
import Hero from './sections/Hero/Hero.tsx'
import About from './sections/About/About.tsx'
import Menu from './sections/Menu/Menu.tsx'
import Reviews from './sections/Reviews/Reviews.tsx';
import Contacts from './sections/Contacts/Contacts.tsx';
import Footer from './components/Footer/Footer.tsx';
import { content, type Language } from './texts/content';

import './App.css'

// npm run build && firebase deploy --only hosting

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const currentContent = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = currentContent.site.documentTitle;
  }, [language, currentContent.site.documentTitle]);

  return (
    <>
      <Header
        siteText={currentContent.site}
        language={language}
        onLanguageChange={setLanguage}
      />
      <Hero heroText={currentContent.hero} />
      <About aboutText={currentContent.about} />
      <Menu menuText={currentContent.menu} />
      <Reviews highlightsText={currentContent.highlights} />
      <Contacts contactsText={currentContent.contacts} />
      <Footer footerText={currentContent.footer} siteText={currentContent.site} />
    </>
  );
}

export default App;
