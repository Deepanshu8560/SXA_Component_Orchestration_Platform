import '../src/styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

// Make jQuery globally available
window.$ = window.jQuery = $;

/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#ffffff',
                },
                {
                    name: 'dark',
                    value: '#1a1a1a',
                },
            ],
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'default',
            toolbar: {
                icon: 'paintbrush',
                items: [
                    { value: 'default', title: 'Default SXA' },
                    { value: 'dark', title: 'Dark Corporate' },
                    { value: 'vibrant', title: 'Modern Vibrant' },
                ],
                showName: true,
            },
        },
        locale: {
            name: 'Locale',
            description: 'Internationalization locale',
            defaultValue: 'en',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', right: '🇺🇸', title: 'English' },
                    { value: 'ar', right: '🇸🇦', title: 'Arabic (RTL)' },
                    { value: 'fr', right: '🇫🇷', title: 'French' },
                ],
                showName: true,
            },
        },
        experienceEditor: {
            name: 'Experience Editor',
            description: 'Toggle Experience Editor mode',
            defaultValue: 'off',
            toolbar: {
                icon: 'edit',
                items: [
                    { value: 'off', title: 'Off' },
                    { value: 'on', title: 'On' },
                ],
                showName: true,
            },
        },
    },
    decorators: [
        (story, context) => {
            const { theme, locale, experienceEditor } = context.globals;

            // Apply theme
            document.documentElement.setAttribute('data-theme', theme);

            // Apply RTL for Arabic
            document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
            document.documentElement.setAttribute('lang', locale);

            // Apply Experience Editor mode
            document.documentElement.setAttribute('data-experience-editor', experienceEditor);

            return story();
        },
    ],
};

export default preview;
