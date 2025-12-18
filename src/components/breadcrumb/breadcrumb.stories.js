import './breadcrumb.scss';

export default {
    title: 'SXA Components/Navigation/Breadcrumb',
    parameters: {
        docs: {
            description: {
                component: `
# Breadcrumb Component

Breadcrumb navigation component with schema.org markup for SEO optimization.

## SXA Integration

### Rendering Information
- **Rendering Name**: Navigation/Breadcrumb
- **Auto-generated**: Based on site structure
- **Caching**: VaryByData

### Rendering Parameters
- \`ShowHome\`: Display home link
- \`SeparatorStyle\`: Slash, Arrow, or Chevron

### Variants
1. **Default**: Standard breadcrumb with slash separator
2. **Compact**: Smaller spacing and font size
3. **Icon**: Home icon and chevron separators

## SEO Features
- Schema.org BreadcrumbList markup
- Proper semantic HTML
- ARIA labels for accessibility
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'compact', 'icon'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./breadcrumb.html', import.meta.url))
        .then(response => response.text());
};

export const Default = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const breadcrumb = doc.querySelector('.sxa-breadcrumb');
        breadcrumb.setAttribute('data-variant', args.variant);
        return breadcrumb.outerHTML;
    },
    args: {
        variant: 'default',
    },
};

export const Compact = {
    ...Default,
    args: {
        variant: 'compact',
    },
};

export const IconBased = {
    ...Default,
    args: {
        variant: 'icon',
    },
};
