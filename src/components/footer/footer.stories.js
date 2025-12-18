import './footer.scss';

export default {
    title: 'SXA Components/Navigation/Footer',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# Footer Component

Site-wide footer with multiple columns, social links, and newsletter signup.

## SXA Integration

### Rendering Information
- **Rendering Name**: Navigation/Footer
- **Data Source**: Site Settings/Footer
- **Caching**: Site-level caching

### Rendering Parameters
- \`ShowSocialLinks\`: Display social media icons
- \`ShowNewsletter\`: Include newsletter signup
- \`CopyrightText\`: Custom copyright message

### Variants
1. **Multi-column**: 4-column layout with all features
2. **Simple**: Single column, centered layout
3. **Newsletter**: Focused on newsletter signup

## Features
- Responsive grid layout
- Social media integration
- Newsletter subscription form
- Legal links (Privacy, Terms, etc.)
- RTL support
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['multi-column', 'simple', 'newsletter'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./footer.html', import.meta.url))
        .then(response => response.text());
};

export const MultiColumn = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const footer = doc.querySelector('.sxa-footer');
        footer.setAttribute('data-variant', args.variant);
        return footer.outerHTML;
    },
    args: {
        variant: 'multi-column',
    },
};

export const Simple = {
    ...MultiColumn,
    args: {
        variant: 'simple',
    },
};

export const Newsletter = {
    ...MultiColumn,
    args: {
        variant: 'newsletter',
    },
};
