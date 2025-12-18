import './tabs.scss';
import './tabs.js';

export default {
    title: 'SXA Components/Structure/Tabs',
    parameters: {
        docs: {
            description: {
                component: `
# Tabs Component

Tabbed content component with keyboard navigation and accessibility support.

## SXA Integration

### Rendering Information
- **Rendering Name**: Structure/Tabs
- **Data Source**: Tab items collection
- **Keyboard Navigation**: Arrow keys, Home, End

### Variants
1. **Horizontal**: Standard horizontal tabs
2. **Vertical**: Side-by-side layout
3. **Pills**: Pill-style buttons

## Accessibility
- Full ARIA support
- Keyboard navigation
- Focus management
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['horizontal', 'vertical', 'pills'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./tabs.html', import.meta.url))
        .then(response => response.text());
};

export const Horizontal = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const tabs = doc.querySelector('.sxa-tabs');
        tabs.setAttribute('data-variant', args.variant);
        return tabs.outerHTML;
    },
    args: {
        variant: 'horizontal',
    },
};

export const Vertical = {
    ...Horizontal,
    args: {
        variant: 'vertical',
    },
};

export const Pills = {
    ...Horizontal,
    args: {
        variant: 'pills',
    },
};
