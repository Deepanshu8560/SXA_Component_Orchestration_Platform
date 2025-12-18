// ============================================
// FORM COMPONENT JAVASCRIPT
// ============================================

(function ($) {
    'use strict';

    const FormComponent = {
        init: function () {
            this.bindEvents();
        },

        bindEvents: function () {
            const self = this;

            // Form submission
            $('.contact-form').on('submit', function (e) {
                e.preventDefault();

                const form = $(this);
                const isValid = self.validateForm(form);

                if (isValid) {
                    self.submitForm(form);
                }
            });

            // Real-time validation
            $('.form-control').on('blur', function () {
                self.validateField($(this));
            });

            // Clear error on input
            $('.form-control').on('input', function () {
                $(this).removeClass('error');
                $(this).siblings('.form-error').text('');
            });
        },

        validateField: function ($field) {
            const value = $field.val().trim();
            const fieldName = $field.attr('name');
            const isRequired = $field.prop('required');
            let errorMessage = '';

            if (isRequired && !value) {
                errorMessage = 'This field is required';
            } else if (fieldName === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Please enter a valid email address';
                }
            } else if (fieldName === 'phone' && value) {
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(value)) {
                    errorMessage = 'Please enter a valid phone number';
                }
            }

            if (errorMessage) {
                $field.addClass('error');
                $field.siblings('.form-error').text(errorMessage);
                return false;
            } else {
                $field.removeClass('error').addClass('success');
                $field.siblings('.form-error').text('');
                return true;
            }
        },

        validateForm: function ($form) {
            let isValid = true;

            $form.find('.form-control[required]').each(function () {
                if (!FormComponent.validateField($(this))) {
                    isValid = false;
                }
            });

            // Validate checkbox
            const $consent = $form.find('#consent');
            if ($consent.length && !$consent.is(':checked')) {
                alert('Please agree to the privacy policy and terms of service');
                isValid = false;
            }

            return isValid;
        },

        submitForm: function ($form) {
            const submitBtn = $form.find('button[type="submit"]');
            const originalText = submitBtn.text();

            // Disable button and show loading
            submitBtn.prop('disabled', true).text('Sending...');

            // Simulate API call
            setTimeout(function () {
                // Hide form, show success message
                $form.fadeOut(300, function () {
                    $form.siblings('.form-success').fadeIn(300);
                });

                // Reset button
                submitBtn.prop('disabled', false).text(originalText);

                // In real implementation, this would be an AJAX call to Sitecore Forms API
                console.log('Form data:', $form.serialize());
            }, 1500);
        }
    };

    // Initialize on DOM ready
    $(document).ready(function () {
        FormComponent.init();
    });

})(jQuery);
