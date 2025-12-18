import './rich-text.scss';

export default {
    title: 'SXA Components/Content/Rich Text',
    parameters: {
        docs: {
            description: {
                component: `
# Rich Text Component

Formatted text content with typography styles.

## SXA Integration

### Rendering Information
- **Rendering Name**: Content/Rich Text
- **Data Source**: Rich Text field

### Variants
1. **Standard**: Left-aligned text
2. **Centered**: Center-aligned text
3. **Highlighted**: Background highlight
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['standard', 'centered', 'highlighted'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./rich-text.html', import.meta.url))
        .then(response => response.text());
};

export const Standard = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const richText = doc.querySelector('.sxa-rich-text');
        richText.setAttribute('data-variant', args.variant);
        return richText.outerHTML;
    },
    args: {
        variant: 'standard',
    },
};

export const Centered = {
    ...Standard,
    args: {
        variant: 'centered',
    },
};

export const Highlighted = {
    ...Standard,
    args: {
        variant: 'highlighted',
    },
};
