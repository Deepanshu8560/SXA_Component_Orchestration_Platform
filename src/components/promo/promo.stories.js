import './promo.scss';

export default {
    title: 'SXA Components/Content/Promo',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# Promo/Banner Component

High-impact promotional banner component for hero sections and featured content.

## SXA Integration

### Rendering Information
- **Rendering Name**: Content/Promo
- **Data Source**: Content items with fields:
  - Image (Image field)
  - Title (Single-Line Text)
  - Description (Multi-Line Text)
  - CTA Text (Single-Line Text)
  - CTA Link (General Link)

### Rendering Parameters
- \`BackgroundStyle\`: Gradient, Image, or Solid
- \`TextAlignment\`: Left, Center, Right
- \`CTAStyle\`: Primary, Secondary, Outline

### Variants
1. **Hero**: Full-width hero banner with overlay
2. **Split-content**: Two-column layout with image
3. **Overlay**: Centered text with gradient overlay
4. **Card-style**: Contained card format

## Features
- Responsive design
- Smooth animations
- Multiple CTA buttons
- Background image support
- Gradient overlays
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['hero', 'split-content', 'overlay', 'card-style'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./promo.html', import.meta.url))
        .then(response => response.text());
};

export const Hero = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const promo = doc.querySelector('.sxa-promo');
        promo.setAttribute('data-variant', args.variant);
        return promo.outerHTML;
    },
    args: {
        variant: 'hero',
    },
};

export const SplitContent = {
    ...Hero,
    args: {
        variant: 'split-content',
    },
};

export const Overlay = {
    ...Hero,
    args: {
        variant: 'overlay',
    },
};

export const CardStyle = {
    ...Hero,
    args: {
        variant: 'card-style',
    },
};
