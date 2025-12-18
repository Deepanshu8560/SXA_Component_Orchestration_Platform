import './header.scss';
import './header.js';

export default {
    title: 'SXA Components/Navigation/Header',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# Header Component

The Header component is a core SXA navigation rendering that provides site-wide navigation, branding, and utility functions.

## SXA Integration

### Rendering Information
- **Rendering Name**: Navigation/Header
- **Controller**: NavigationController
- **View**: Header.cshtml
- **Caching**: VaryByData, VaryByParm

### Data Source
- Site Settings > Navigation
- Supports multi-level menu structure
- Configurable through Experience Editor

### Rendering Parameters
- \`Logo\`: Site logo image field
- \`ShowSearch\`: Boolean to show/hide search
- \`ShowLanguageSwitcher\`: Boolean for language selector
- \`StickyHeader\`: Enable sticky positioning
- \`TransparentMode\`: Enable transparent background

### Variants
1. **Standard**: Default header with full navigation
2. **Sticky**: Remains fixed at top on scroll
3. **Transparent**: Semi-transparent background for hero sections

## HTML Requirements

### Required Classes
- \`.sxa-header\`: Main container
- \`.header-main\`: Primary header section
- \`.header-nav\`: Navigation container
- \`.nav-menu\`: Menu list

### Data Attributes
- \`data-component-name="Header"\`: For Experience Editor
- \`data-variant\`: Specifies the rendering variant

## Features
- Responsive mobile menu
- Multi-level dropdown navigation
- Integrated search overlay
- Language switcher
- Theme switcher
- RTL support
- Accessibility compliant (ARIA labels)

## Usage Example

\`\`\`html
<div class="sxa-placeholder" data-placeholder-name="header">
  <!-- Header component renders here -->
</div>
\`\`\`

## Customization

### Adding Menu Items
Menu items are pulled from Sitecore navigation structure. Configure in:
- Content > Site > Settings > Navigation

### Styling
Override CSS custom properties:
\`\`\`css
:root {
  --header-bg: #ffffff;
  --header-text: #212529;
}
\`\`\`
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['standard', 'sticky', 'transparent'],
            description: 'Header variant',
            table: {
                defaultValue: { summary: 'standard' },
            },
        },
        showSearch: {
            control: 'boolean',
            description: 'Show search functionality',
            table: {
                defaultValue: { summary: true },
            },
        },
        logoText: {
            control: 'text',
            description: 'Logo text',
            table: {
                defaultValue: { summary: 'Sitecore SXA' },
            },
        },
    },
};

// Load the HTML template
const loadTemplate = () => {
    return fetch(new URL('./header.html', import.meta.url))
        .then(response => response.text());
};

// Standard variant
export const Standard = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const header = doc.querySelector('.sxa-header');

        header.setAttribute('data-variant', args.variant);

        if (!args.showSearch) {
            header.querySelector('.search-toggle').style.display = 'none';
            header.querySelector('.header-search-overlay').style.display = 'none';
        }

        if (args.logoText) {
            header.querySelector('.logo-text').textContent = args.logoText;
        }

        return header.outerHTML;
    },
    args: {
        variant: 'standard',
        showSearch: true,
        logoText: 'Sitecore SXA',
    },
};

// Sticky variant
export const Sticky = {
    ...Standard,
    args: {
        variant: 'sticky',
        showSearch: true,
        logoText: 'Sitecore SXA',
    },
};

// Transparent variant
export const Transparent = {
    ...Standard,
    args: {
        variant: 'transparent',
        showSearch: true,
        logoText: 'Sitecore SXA',
    },
};

// With custom logo
export const CustomLogo = {
    ...Standard,
    args: {
        variant: 'standard',
        showSearch: true,
        logoText: 'My Custom Brand',
    },
};

// Without search
export const WithoutSearch = {
    ...Standard,
    args: {
        variant: 'standard',
        showSearch: false,
        logoText: 'Sitecore SXA',
    },
};
