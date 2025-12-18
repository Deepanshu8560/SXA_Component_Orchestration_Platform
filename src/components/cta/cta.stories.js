import './cta.scss';

export default {
    title: 'SXA Components/Interactive/CTA',
    parameters: {
        docs: {
            description: {
                component: `
# Call-to-Action Component

Prominent CTA component for conversions.

## SXA Integration

### Rendering Information
- **Rendering Name**: Interactive/CTA
- **Data Source**: CTA content item

### Variants
1. **Button**: Gradient background with buttons
2. **Banner**: Neutral background variant
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['button', 'banner'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./cta.html', import.meta.url))
        .then(response => response.text());
};

export const Button = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const cta = doc.querySelector('.sxa-cta');
        cta.setAttribute('data-variant', args.variant);
        return cta.outerHTML;
    },
    args: {
        variant: 'button',
    },
};

export const Banner = {
    ...Button,
    args: {
        variant: 'banner',
    },
};
