import './accordion.scss';
import './accordion.js';

export default {
    title: 'SXA Components/Structure/Accordion',
    parameters: {
        docs: {
            description: {
                component: `
# Accordion Component

Collapsible accordion component with keyboard navigation.

## SXA Integration

### Rendering Information
- **Rendering Name**: Structure/Accordion
- **Data Source**: Accordion items collection

### Variants
1. **Single-open**: Only one panel open at a time
2. **Multi-open**: Multiple panels can be open
3. **Icon-right**: Icon positioned on right side

## Accessibility
- ARIA attributes
- Keyboard navigation (Arrow keys, Home, End)
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['single-open', 'multi-open', 'icon-right'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./accordion.html', import.meta.url))
        .then(response => response.text());
};

export const SingleOpen = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const accordion = doc.querySelector('.sxa-accordion');
        accordion.setAttribute('data-variant', args.variant);
        return accordion.outerHTML;
    },
    args: {
        variant: 'single-open',
    },
};

export const MultiOpen = {
    ...SingleOpen,
    args: {
        variant: 'multi-open',
    },
};

export const IconRight = {
    ...SingleOpen,
    args: {
        variant: 'icon-right',
    },
};
