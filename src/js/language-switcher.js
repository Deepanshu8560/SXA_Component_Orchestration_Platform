// ============================================
// LANGUAGE SWITCHER UTILITY
// ============================================

(function ($) {
    'use strict';

    const LanguageSwitcher = {
        storageKey: 'sxa-language',
        defaultLanguage: 'en',
        rtlLanguages: ['ar', 'he', 'fa', 'ur'],

        translations: {
            en: {
                home: 'Home',
                about: 'About',
                services: 'Services',
                contact: 'Contact',
                search: 'Search',
                readMore: 'Read More',
                learnMore: 'Learn More',
                getStarted: 'Get Started',
                submit: 'Submit',
                close: 'Close',
            },
            ar: {
                home: 'الرئيسية',
                about: 'من نحن',
                services: 'الخدمات',
                contact: 'اتصل بنا',
                search: 'بحث',
                readMore: 'اقرأ المزيد',
                learnMore: 'تعلم المزيد',
                getStarted: 'ابدأ الآن',
                submit: 'إرسال',
                close: 'إغلاق',
            },
            fr: {
                home: 'Accueil',
                about: 'À propos',
                services: 'Services',
                contact: 'Contact',
                search: 'Rechercher',
                readMore: 'Lire la suite',
                learnMore: 'En savoir plus',
                getStarted: 'Commencer',
                submit: 'Soumettre',
                close: 'Fermer',
            }
        },

        init: function () {
            this.loadLanguage();
            this.bindEvents();
        },

        loadLanguage: function () {
            const savedLanguage = localStorage.getItem(this.storageKey) || this.defaultLanguage;
            this.setLanguage(savedLanguage);
        },

        setLanguage: function (language) {
            // Set HTML lang attribute
            document.documentElement.setAttribute('lang', language);

            // Set text direction for RTL languages
            const isRTL = this.rtlLanguages.includes(language);
            document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

            // Save to localStorage
            localStorage.setItem(this.storageKey, language);

            // Update active state on language buttons
            $('.language-switcher-btn').removeClass('active');
            $(`.language-switcher-btn[data-language="${language}"]`).addClass('active');

            // Translate content
            this.translateContent(language);

            // Trigger custom event
            $(document).trigger('languageChanged', [language, isRTL]);
        },

        translateContent: function (language) {
            const translations = this.translations[language] || this.translations[this.defaultLanguage];

            $('[data-i18n]').each(function () {
                const key = $(this).data('i18n');
                if (translations[key]) {
                    if ($(this).is('input, textarea')) {
                        $(this).attr('placeholder', translations[key]);
                    } else {
                        $(this).text(translations[key]);
                    }
                }
            });
        },

        bindEvents: function () {
            const self = this;

            $(document).on('click', '.language-switcher-btn', function (e) {
                e.preventDefault();
                const language = $(this).data('language');
                self.setLanguage(language);
            });
        },

        getCurrentLanguage: function () {
            return document.documentElement.getAttribute('lang') || this.defaultLanguage;
        },

        isRTL: function () {
            return document.documentElement.getAttribute('dir') === 'rtl';
        },

        addTranslation: function (language, key, value) {
            if (!this.translations[language]) {
                this.translations[language] = {};
            }
            this.translations[language][key] = value;
        }
    };

    // Initialize on DOM ready
    $(document).ready(function () {
        LanguageSwitcher.init();
    });

    // Expose to global scope
    window.LanguageSwitcher = LanguageSwitcher;

})(jQuery);
