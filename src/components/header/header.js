// ============================================
// HEADER COMPONENT JAVASCRIPT
// ============================================

(function ($) {
    'use strict';

    const HeaderComponent = {
        init: function () {
            this.bindEvents();
            this.initDropdowns();
        },

        bindEvents: function () {
            // Search toggle
            $('.search-toggle').on('click', function (e) {
                e.preventDefault();
                $('.header-search-overlay').toggleClass('active');
                if ($('.header-search-overlay').hasClass('active')) {
                    $('.search-input').focus();
                }
            });

            // Search close
            $('.search-close').on('click', function (e) {
                e.preventDefault();
                $('.header-search-overlay').removeClass('active');
            });

            // Close search on escape
            $(document).on('keydown', function (e) {
                if (e.key === 'Escape') {
                    $('.header-search-overlay').removeClass('active');
                }
            });

            // Mobile menu toggle
            $('.mobile-menu-toggle').on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('active');
                $('.nav-menu').toggleClass('mobile-active');

                // Animate hamburger
                if ($(this).hasClass('active')) {
                    $(this).find('.hamburger-line:nth-child(1)').css('transform', 'rotate(45deg) translateY(8px)');
                    $(this).find('.hamburger-line:nth-child(2)').css('opacity', '0');
                    $(this).find('.hamburger-line:nth-child(3)').css('transform', 'rotate(-45deg) translateY(-8px)');
                } else {
                    $(this).find('.hamburger-line').css({
                        'transform': 'none',
                        'opacity': '1'
                    });
                }
            });

            // Close mobile menu on outside click
            $(document).on('click', function (e) {
                if (!$(e.target).closest('.header-nav, .mobile-menu-toggle').length) {
                    $('.mobile-menu-toggle').removeClass('active');
                    $('.nav-menu').removeClass('mobile-active');
                    $('.mobile-menu-toggle .hamburger-line').css({
                        'transform': 'none',
                        'opacity': '1'
                    });
                }
            });
        },

        initDropdowns: function () {
            // Custom dropdown behavior for better control
            $('.nav-item.dropdown').hover(
                function () {
                    $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
                },
                function () {
                    $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
                }
            );
        }
    };

    // Initialize on DOM ready
    $(document).ready(function () {
        HeaderComponent.init();
    });

})(jQuery);
