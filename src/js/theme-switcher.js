// ============================================
// THEME SWITCHER UTILITY
// ============================================

(function ($) {
    'use strict';

    const ThemeSwitcher = {
        storageKey: 'sxa-theme',
        defaultTheme: 'default',

        init: function () {
            this.loadTheme();
            this.bindEvents();
        },

        loadTheme: function () {
            const savedTheme = localStorage.getItem(this.storageKey) || this.defaultTheme;
            this.setTheme(savedTheme);
        },

        setTheme: function (theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(this.storageKey, theme);

            // Update active state on theme buttons
            $('.theme-switcher-btn').removeClass('active');
            $(`.theme-switcher-btn[data-theme="${theme}"]`).addClass('active');

            // Trigger custom event
            $(document).trigger('themeChanged', [theme]);
        },

        bindEvents: function () {
            const self = this;

            $(document).on('click', '.theme-switcher-btn', function (e) {
                e.preventDefault();
                const theme = $(this).data('theme');
                self.setTheme(theme);
            });
        },

        getCurrentTheme: function () {
            return document.documentElement.getAttribute('data-theme') || this.defaultTheme;
        }
    };

    // Initialize on DOM ready
    $(document).ready(function () {
        ThemeSwitcher.init();
    });

    // Expose to global scope
    window.ThemeSwitcher = ThemeSwitcher;

})(jQuery);
