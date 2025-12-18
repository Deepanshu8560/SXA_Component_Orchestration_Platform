// ============================================
// ACCORDION COMPONENT JAVASCRIPT
// ============================================

(function ($) {
    'use strict';

    const AccordionComponent = {
        init: function () {
            this.bindEvents();
        },

        bindEvents: function () {
            $('.accordion-button').on('click', function (e) {
                e.preventDefault();
                const $button = $(this);
                const $accordion = $button.closest('.sxa-accordion');
                const $item = $button.closest('.accordion-item');
                const $panel = $item.find('.accordion-panel');
                const isExpanded = $button.attr('aria-expanded') === 'true';
                const variant = $accordion.data('variant');

                if (variant === 'single-open') {
                    // Close all other panels
                    $accordion.find('.accordion-button').attr('aria-expanded', 'false');
                    $accordion.find('.accordion-panel').removeClass('active').attr('hidden', true);
                    $accordion.find('.accordion-icon').text('+');
                }

                // Toggle current panel
                if (isExpanded) {
                    $button.attr('aria-expanded', 'false');
                    $panel.removeClass('active').attr('hidden', true);
                    $button.find('.accordion-icon').text('+');
                } else {
                    $button.attr('aria-expanded', 'true');
                    $panel.addClass('active').removeAttr('hidden');
                    $button.find('.accordion-icon').text('−');
                }
            });

            // Keyboard navigation
            $('.accordion-button').on('keydown', function (e) {
                const $current = $(this);
                const $accordion = $current.closest('.sxa-accordion');
                const $buttons = $accordion.find('.accordion-button');
                const currentIndex = $buttons.index($current);
                let $next;

                switch (e.key) {
                    case 'ArrowDown':
                        e.preventDefault();
                        $next = $buttons.eq((currentIndex + 1) % $buttons.length);
                        $next.focus();
                        break;

                    case 'ArrowUp':
                        e.preventDefault();
                        $next = $buttons.eq((currentIndex - 1 + $buttons.length) % $buttons.length);
                        $next.focus();
                        break;

                    case 'Home':
                        e.preventDefault();
                        $buttons.first().focus();
                        break;

                    case 'End':
                        e.preventDefault();
                        $buttons.last().focus();
                        break;
                }
            });
        }
    };

    // Initialize on DOM ready
    $(document).ready(function () {
        AccordionComponent.init();
    });

})(jQuery);
