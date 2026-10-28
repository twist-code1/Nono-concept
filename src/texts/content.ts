export type Language = 'en' | 'ru' | 'am';

export type SiteContent = {
  brand: string;
  documentTitle: string;
  navigation: Array<{ id: string; href: string; label: string }>;
  navigationToggle: {
    open: string;
    close: string;
  };
  languageLabel: string;
  languageOptions: Record<Language, string>;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export type AboutContent = {
  imageAlt: string;
  title: string;
  description: string;
};

export type MenuContent = {
  title: string;
  controls: {
    previous: string;
    next: string;
  };
  items: Array<{
    id: string;
    visual: string;
    eyebrow: string;
    name: string;
    description: string;
    price: string;
  }>;
};

export type HighlightsContent = {
  title: string;
  items: Array<{
    id: string;
    text: string;
    name: string;
  }>;
};

export type ContactsContent = {
  title: string;
  details: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  social: {
    title: string;
    links: Array<{ id: string; label: string; href: string }>;
  };
  mapTitle: string;
};

export type FooterContent = {
  tagline: string;
  description: string;
};

export type ContentBundle = {
  site: SiteContent;
  hero: HeroContent;
  about: AboutContent;
  menu: MenuContent;
  highlights: HighlightsContent;
  contacts: ContactsContent;
  footer: FooterContent;
};

export const content: Record<Language, ContentBundle> = {
  en: {
    site: {
      brand: 'NÖNÖ',
      documentTitle: 'NÖNÖ Coffee',
      navigation: [
        { id: 'home', href: '#home', label: 'Home' },
        { id: 'about', href: '#about', label: 'About' },
        { id: 'menu', href: '#menu', label: 'Menu' },
        { id: 'reviews', href: '#reviews', label: 'Reviews' },
        { id: 'contact', href: '#contact', label: 'Contact' },
      ],
      navigationToggle: { open: 'Open navigation menu', close: 'Close navigation menu' },
      languageLabel: 'Language',
      languageOptions: { en: 'Eng', ru: 'Ru', am: 'Am' },
    },
    hero: {
      eyebrow: 'Website Concept for NÖNÖ Coffee',
      title: 'A Warm Digital Home for a Cozy Yerevan Cafe',
      description: 'A premium one-page concept showing how NÖNÖ could present its atmosphere, menu, and brand online.',
      cta: { label: 'Explore Concept', href: '#menu' },
    },
    about: {
      imageAlt: 'Coffee shop interior',
      title: 'Designed around warmth, taste, and detail',
      description:
        'This concept keeps the visual language intimate and refined: deep coffee tones, soft ivory sections, gentle motion, and a clear structure for real photos, menu items, and contact details.',
    },
    menu: {
      title: 'Sample Menu',
      controls: { previous: 'Previous menu items', next: 'Next menu items' },
      items: [
        { id: 'espresso', visual: 'espresso', eyebrow: 'Espresso shot', name: 'Espresso', description: 'Bold and focused classic coffee.', price: '800 AMD' },
        { id: 'cappuccino', visual: 'cappuccino', eyebrow: 'Milk coffee', name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '1200 AMD' },
        { id: 'latte', visual: 'latte', eyebrow: 'Soft latte', name: 'Latte', description: 'Smooth, creamy, and easy to love.', price: '1400 AMD' },
        { id: 'raf', visual: 'raf', eyebrow: 'Signature cup', name: 'Raf', description: 'Creamy coffee with soft vanilla notes.', price: '1600 AMD' },
        { id: 'croissant', visual: 'croissant', eyebrow: 'Fresh pastry', name: 'Croissant', description: 'Buttery pastry for a coffee break.', price: '900 AMD' },
      ],
    },
    highlights: {
      title: 'Highlights',
      items: [
        { id: 'atmosphere', text: 'A calm, premium experience that feels inviting on every screen.', name: 'Atmosphere' },
        { id: 'menu-focus', text: 'A menu layout that keeps drinks and pastries easy to scan.', name: 'Menu Focus' },
        { id: 'conversion', text: 'Clear contact details and a simple journey to the cafe.', name: 'Conversion' },
      ],
    },
    contacts: {
      title: 'Ready for Real Details',
      details: [
        { id: 'address', title: 'Address', description: 'NÖNÖ Coffee, Yerevan' },
        { id: 'phone', title: 'Phone or WhatsApp', description: 'A direct contact button can be connected for mobile visitors.' },
        { id: 'instagram', title: 'Instagram', description: 'The official profile can be linked for daily updates and stories.' },
        { id: 'hours', title: 'Working Hours', description: 'Opening hours can be shown clearly for locals and tourists.' },
      ],
      social: {
        title: 'Social Links',
        links: [
          { id: 'instagram', label: 'Instagram', href: '#home' },
          { id: 'facebook', label: 'Facebook', href: '#home' },
          { id: 'telegram', label: 'Telegram', href: '#home' },
        ],
      },
      mapTitle: 'NÖNÖ Coffee Location',
    },
    footer: {
      tagline: 'Website concept for a warm coffee experience',
      description: 'Concept website by a frontend developer. Real business details can be added during collaboration.',
    },
  },
  ru: {
    site: {
      brand: 'NÖNÖ',
      documentTitle: 'NÖNÖ Coffee',
      navigation: [
        { id: 'home', href: '#home', label: 'Главная' },
        { id: 'about', href: '#about', label: 'О нас' },
        { id: 'menu', href: '#menu', label: 'Меню' },
        { id: 'reviews', href: '#reviews', label: 'Отзывы' },
        { id: 'contact', href: '#contact', label: 'Контакты' },
      ],
      navigationToggle: { open: 'Открыть меню навигации', close: 'Закрыть меню навигации' },
      languageLabel: 'Язык',
      languageOptions: { en: 'Eng', ru: 'Ru', am: 'Am' },
    },
    hero: {
      eyebrow: 'Концепт сайта для NÖNÖ Coffee',
      title: 'Теплый цифровой дом для уютного кафе в Ереване',
      description: 'Премиальный одностраничный концепт, показывающий, как NÖNÖ может представить атмосферу, меню и бренд онлайн.',
      cta: { label: 'Посмотреть концепт', href: '#menu' },
    },
    about: {
      imageAlt: 'Интерьер кофейни',
      title: 'Создано вокруг уюта, вкуса и деталей',
      description:
        'Этот концепт сохраняет камерную и изящную визуальную подачу: глубокие кофейные оттенки, мягкие светлые блоки, плавная анимация и понятная структура для фотографий, меню и контактов.',
    },
    menu: {
      title: 'Пример меню',
      controls: { previous: 'Предыдущие позиции', next: 'Следующие позиции' },
      items: [
        { id: 'espresso', visual: 'espresso', eyebrow: 'Шот эспрессо', name: 'Эспрессо', description: 'Насыщенный и собранный классический кофе.', price: '800 AMD' },
        { id: 'cappuccino', visual: 'cappuccino', eyebrow: 'Кофе с молоком', name: 'Капучино', description: 'Эспрессо с молоком и нежной пенкой.', price: '1200 AMD' },
        { id: 'latte', visual: 'latte', eyebrow: 'Нежный латте', name: 'Латте', description: 'Мягкий, сливочный и очень приятный вкус.', price: '1400 AMD' },
        { id: 'raf', visual: 'raf', eyebrow: 'Фирменный стакан', name: 'Раф', description: 'Кремовый кофе с мягкими ванильными нотами.', price: '1600 AMD' },
        { id: 'croissant', visual: 'croissant', eyebrow: 'Свежая выпечка', name: 'Круассан', description: 'Сливочная выпечка для кофейной паузы.', price: '900 AMD' },
      ],
    },
    highlights: {
      title: 'Преимущества',
      items: [
        { id: 'atmosphere', text: 'Спокойный премиальный опыт, который приятно смотрится на любом экране.', name: 'Атмосфера' },
        { id: 'menu-focus', text: 'Удобная подача меню, где напитки и выпечку легко просмотреть.', name: 'Фокус на меню' },
        { id: 'conversion', text: 'Понятные контакты и простой путь к посещению кафе.', name: 'Конверсия' },
      ],
    },
    contacts: {
      title: 'Готово для реальных данных',
      details: [
        { id: 'address', title: 'Адрес', description: 'NÖNÖ Coffee, Ереван' },
        { id: 'phone', title: 'Телефон или WhatsApp', description: 'Можно добавить кнопку прямой связи для мобильных гостей.' },
        { id: 'instagram', title: 'Instagram', description: 'Официальный профиль можно подключить для новостей и сторис.' },
        { id: 'hours', title: 'Часы работы', description: 'Время работы можно показать понятно для местных и туристов.' },
      ],
      social: {
        title: 'Соцсети',
        links: [
          { id: 'instagram', label: 'Instagram', href: '#home' },
          { id: 'facebook', label: 'Facebook', href: '#home' },
          { id: 'telegram', label: 'Telegram', href: '#home' },
        ],
      },
      mapTitle: 'Местоположение NÖNÖ Coffee',
    },
    footer: {
      tagline: 'Концепт сайта для теплого кофейного опыта',
      description: 'Концепт сайта от фронтенд-разработчика. Реальные данные бизнеса можно добавить в процессе работы.',
    },
  },
  am: {
    site: {
      brand: 'NÖNÖ',
      documentTitle: 'NÖNÖ Coffee',
      navigation: [
        { id: 'home', href: '#home', label: 'Գլխավոր' },
        { id: 'about', href: '#about', label: 'Մեր մասին' },
        { id: 'menu', href: '#menu', label: 'Մենյու' },
        { id: 'reviews', href: '#reviews', label: 'Կարծիքներ' },
        { id: 'contact', href: '#contact', label: 'Կոնտակտ' },
      ],
      navigationToggle: { open: 'Բացել նավիգացիան', close: 'Փակել նավիգացիան' },
      languageLabel: 'Լեզու',
      languageOptions: { en: 'Eng', ru: 'Ru', am: 'Am' },
    },
    hero: {
      eyebrow: 'NÖNÖ Coffee-ի կայքի կոնցեպտ',
      title: 'Տաք թվային տուն՝ հարմարավետ երևանյան սրճարանի համար',
      description: 'Պրեմիում մեկ էջանոց կոնցեպտ, որը ցույց է տալիս, թե ինչպես կարող է NÖNÖ-ն ներկայացնել իր մթնոլորտը, մենյուն և բրենդը առցանց։',
      cta: { label: 'Տեսնել կոնցեպտը', href: '#menu' },
    },
    about: {
      imageAlt: 'Սրճարանի ինտերիեր',
      title: 'Ջերմության, համի և մանրամասների շուրջ կառուցված',
      description:
        'Այս կոնցեպտը պահում է ինտիմ ու նուրբ վիզուալ լեզուն՝ խորը սուրճի երանգներ, մեղմ բաց հատվածներ, նուրբ շարժում և հստակ կառուցվածք իրական լուսանկարների, մենյուի ու կոնտակտների համար։',
    },
    menu: {
      title: 'Օրինակային մենյու',
      controls: { previous: 'Նախորդ տարրերը', next: 'Հաջորդ տարրերը' },
      items: [
        { id: 'espresso', visual: 'espresso', eyebrow: 'Էսպրեսոյի շոթ', name: 'Էսպրեսո', description: 'Հագեցած և կենտրոնացած դասական սուրճ։', price: '800 AMD' },
        { id: 'cappuccino', visual: 'cappuccino', eyebrow: 'Կաթով սուրճ', name: 'Կապուչինո', description: 'Էսպրեսո՝ տաք կաթով և փրփուրով։', price: '1200 AMD' },
        { id: 'latte', visual: 'latte', eyebrow: 'Փափուկ լատե', name: 'Լատե', description: 'Նուրբ, կրեմային և հեշտ սիրելի տարբերակ։', price: '1400 AMD' },
        { id: 'raf', visual: 'raf', eyebrow: 'Հատուկ բաժակ', name: 'Ռաֆ', description: 'Կրեմային սուրճ՝ վանիլային մեղմ նոտաներով։', price: '1600 AMD' },
        { id: 'croissant', visual: 'croissant', eyebrow: 'Թարմ թխվածք', name: 'Կրուասան', description: 'Կարագոտ թխվածք՝ սուրճի ընդմիջման համար։', price: '900 AMD' },
      ],
    },
    highlights: {
      title: 'Առանձնահատկություններ',
      items: [
        { id: 'atmosphere', text: 'Հանգիստ և պրեմիում փորձ, որը լավ է երևում ցանկացած էկրանին։', name: 'Մթնոլորտ' },
        { id: 'menu-focus', text: 'Մենյուի հստակ կառուցվածք, որտեղ խմիչքներն ու թխվածքները հեշտ են դիտվում։', name: 'Մենյուի ֆոկուս' },
        { id: 'conversion', text: 'Հասկանալի կոնտակտներ և դեպի սրճարան տանող պարզ ուղի։', name: 'Կոնվերսիա' },
      ],
    },
    contacts: {
      title: 'Պատրաստ է իրական տվյալների համար',
      details: [
        { id: 'address', title: 'Հասցե', description: 'NÖNÖ Coffee, Երևան' },
        { id: 'phone', title: 'Հեռախոս կամ WhatsApp', description: 'Կարելի է ավելացնել անմիջական կապի կոճակ։' },
        { id: 'instagram', title: 'Instagram', description: 'Պաշտոնական էջը կարելի է կապել նորությունների համար։' },
        { id: 'hours', title: 'Աշխատանքային ժամեր', description: 'Բացման ժամերը կարելի է հստակ ցույց տալ այցելուներին։' },
      ],
      social: {
        title: 'Սոցիալական հղումներ',
        links: [
          { id: 'instagram', label: 'Instagram', href: '#home' },
          { id: 'facebook', label: 'Facebook', href: '#home' },
          { id: 'telegram', label: 'Telegram', href: '#home' },
        ],
      },
      mapTitle: 'NÖNÖ Coffee-ի տեղադրությունը',
    },
    footer: {
      tagline: 'Սրճարանի ջերմ փորձի կայքի կոնցեպտ',
      description: 'Ֆրոնթենդ դիզայների կոնցեպտ կայք։ Իրական բիզնես տվյալները կարող են ավելացվել համագործակցության ընթացքում։',
    },
  },
};

