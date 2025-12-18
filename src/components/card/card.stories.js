import './card.scss';

export default {
    title: 'SXA Components/Content/Card',
    parameters: {
        docs: {
            description: {
                component: `
# Card Component

Versatile card component for displaying content in various layouts.

## SXA Integration

### Rendering Information
- **Rendering Name**: Content/Card
- **Data Source**: Content items with fields:
  - Image (Image field)
  - Icon (Text field for emoji/icon)
  - Title (Single-Line Text)
  - Description (Multi-Line Text)
  - Link (General Link)
  - Meta (Date/Category)

### Rendering Parameters
- \`CardStyle\`: Elevated, Flat, Outlined
- \`ImagePosition\`: Top, Left, Right
- \`ShowShadow\`: Boolean

### Variants
1. **Vertical**: Standard card with image on top
2. **Horizontal**: Side-by-side layout
3. **Image-top**: Compact version
4. **Icon-based**: Icon instead of image

## Usage in Grids
Use the \`.card-grid\` class for responsive card layouts.
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['vertical', 'horizontal', 'image-top', 'icon-based'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./card.html', import.meta.url))
        .then(response => response.text());
};

export const Vertical = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const card = doc.querySelector('.sxa-card');
        card.setAttribute('data-variant', args.variant);
        return card.outerHTML;
    },
    args: {
        variant: 'vertical',
    },
};

export const Horizontal = {
    ...Vertical,
    args: {
        variant: 'horizontal',
    },
};

export const ImageTop = {
    ...Vertical,
    args: {
        variant: 'image-top',
    },
};

export const IconBased = {
    ...Vertical,
    args: {
        variant: 'icon-based',
    },
};

export const CardGrid = {
    render: async () => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const card = doc.querySelector('.sxa-card');

        // Create 3 cards
        const cards = Array(3).fill(null).map((_, i) => {
            const clonedCard = card.cloneNode(true);
            clonedCard.querySelector('.card-title').textContent = `Card ${i + 1}`;
            return clonedCard.outerHTML;
        }).join('');

        return `<div class="card-grid">${cards}</div>`;
    },
};
