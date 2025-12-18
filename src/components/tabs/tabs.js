// ============================================
// TABS COMPONENT JAVASCRIPT
// ============================================

(function ($) {
    'use strict';

    const TabsComponent = {
        init: function () {
            this.bindEvents();
            this.initKeyboardNavigation();
        },

        bindEvents: function () {
            $('.tabs-nav-link').on('click', function (e) {
                e.preventDefault();
                const $tab = $(this);
                const tabId = $tab.data('tab');

                TabsComponent.switchTab($tab, tabId);
            });
        },

        switchTab: function ($tab, tabId) {
            const $container = $tab.closest('.sxa-tabs');

            // Update nav links
            $container.find('.tabs-nav-link').removeClass('active').attr('aria-selected', 'false');
            $tab.addClass('active').attr('aria-selected', 'true');

            // Update panels
            $container.find('.tabs-panel').removeClass('active').attr('hidden', true);
            $container.find(`#tab-panel-${tabId}`).addClass('active').removeAttr('hidden');
        },

        initKeyboardNavigation: function () {
            $('.tabs-nav').on('keydown', '.tabs-nav-link', function (e) {
                const $current = $(this);
                const $nav = $current.closest('.tabs-nav');
                const $tabs = $nav.find('.tabs-nav-link');
                const currentIndex = $tabs.index($current);
                let $next;

                switch (e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        $next = $tabs.eq((currentIndex + 1) % $tabs.length);
                        $next.focus().click();
                        break;

                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        $next = $tabs.eq((currentIndex - 1 + $tabs.length) % $tabs.length);
                        $next.focus().click();
                        break;

                    case 'Home':
                        e.preventDefault();
                        $tabs.first().focus().click();
                        break;

                    case 'End':
                        e.preventDefault();
                        $tabs.last().focus().click();
                        break;
                }
            });
        }
    };

    // Initialize on DOM ready
    $(document).ready(function () {
        TabsComponent.init();
    });

})(jQuery);
