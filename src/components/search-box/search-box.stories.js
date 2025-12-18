import './search-box.scss';

export default {
    title: 'SXA Components/Interactive/Search Box',
    parameters: {
        docs: {
            description: {
                component: `
# Search Box Component

Search input with auto-suggest functionality.

## SXA Integration

### Rendering Information
- **Rendering Name**: Interactive/Search Box
- **Data Source**: Search configuration

### Features
- Auto-suggest dropdown
- Keyboard navigation
- Responsive design
        `,
            },
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./search-box.html', import.meta.url))
        .then(response => response.text());
};

export const Inline = {
    render: async () => {
        const template = await loadTemplate();
        return template;
    },
};
