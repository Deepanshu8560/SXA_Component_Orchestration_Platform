import './social-links.scss';

export default {
    title: 'SXA Components/Interactive/Social Links',
    parameters: {
        docs: {
            description: {
                component: `
# Social Links Component

Social media links with multiple display styles.

## SXA Integration

### Rendering Information
- **Rendering Name**: Interactive/Social Links
- **Data Source**: Social media links collection

### Variants
1. **Icons-only**: Circular icon buttons
2. **Text+Icons**: Buttons with labels
3. **Colored**: Brand-colored buttons
4. **Monochrome**: Single-color style
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['icons-only', 'text-icons', 'colored', 'monochrome'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./social-links.html', import.meta.url))
        .then(response => response.text());
};

export const IconsOnly = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const socialLinks = doc.querySelector('.sxa-social-links');
        socialLinks.setAttribute('data-variant', args.variant);
        return socialLinks.outerHTML;
    },
    args: {
        variant: 'icons-only',
    },
};

export const TextIcons = {
    ...IconsOnly,
    args: {
        variant: 'text-icons',
    },
};

export const Colored = {
    ...IconsOnly,
    args: {
        variant: 'colored',
    },
};

export const Monochrome = {
    ...IconsOnly,
    args: {
        variant: 'monochrome',
    },
};
