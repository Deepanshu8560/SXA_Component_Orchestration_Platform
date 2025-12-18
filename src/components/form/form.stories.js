import './form.scss';
import './form.js';

export default {
    title: 'SXA Components/Forms/Form',
    parameters: {
        docs: {
            description: {
                component: `
# Form Component

Contact and newsletter form component with validation.

## SXA Integration

### Rendering Information
- **Rendering Name**: Forms/Form
- **Integration**: Sitecore Forms module
- **Data Source**: Form definition items

### Rendering Parameters
- \`FormAction\`: Submit endpoint
- \`SuccessMessage\`: Custom success message
- \`ValidationStyle\`: Real-time or on-submit

### Variants
1. **Contact**: Full contact form
2. **Newsletter**: Simple email signup
3. **Multi-step**: Wizard-style form

## Features
- Real-time validation
- Accessibility compliant (ARIA)
- Success/error states
- Responsive layout
- RTL support
        `,
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['contact', 'newsletter', 'multi-step'],
        },
    },
};

const loadTemplate = () => {
    return fetch(new URL('./form.html', import.meta.url))
        .then(response => response.text());
};

export const Contact = {
    render: async (args) => {
        const template = await loadTemplate();
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        const form = doc.querySelector('.sxa-form');
        form.setAttribute('data-variant', args.variant);
        return form.outerHTML;
    },
    args: {
        variant: 'contact',
    },
};

export const Newsletter = {
    ...Contact,
    args: {
        variant: 'newsletter',
    },
};
