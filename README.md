# Sitecore SXA Component Library Simulator

A comprehensive component library that mimics Sitecore SXA patterns, built with HTML5, CSS3 (Sass), JavaScript, jQuery, Bootstrap 5, and documented in Storybook.

## 🚀 Features

- **20+ SXA-like Components** organized into Navigation, Content, and Forms categories
- **Multi-theme System** with 3 distinct themes using CSS Custom Properties
- **Multi-lingual Support** with RTL capabilities and language switcher
- **Experience Editor Simulation** with placeholder visualization and component management
- **Comprehensive Documentation** with SXA integration notes for each component

## 📦 Tech Stack

- **HTML5** - Semantic markup
- **CSS3 (Sass)** - Styling with CSS Custom Properties
- **JavaScript & jQuery** - Component interactivity
- **Bootstrap 5** - Responsive framework
- **Storybook 7** - Component documentation and development

## 🎨 Themes

1. **Default SXA** - Classic Sitecore styling
2. **Dark Corporate** - Modern dark theme
3. **Modern Vibrant** - Colorful, energetic theme

## 🌍 Multi-lingual Support

- **English** (LTR)
- **Arabic** (RTL)
- **French** (LTR)

Automatic RTL layout flipping and text expansion handling included.

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook

# Compile Sass
npm run sass

# Development mode (Sass watch + Storybook)
npm run dev
```

## 📚 Component Categories

### Navigation & Structure (7 components)
- Header/Navigation (3 variants: Standard, Sticky, Transparent)
- Breadcrumb (3 variants: Default, Compact, Icon-based)
- Footer (3 variants: Multi-column, Simple, Newsletter)
- Container/Grid
- Tabs
- Accordion
- Page Content

### Content & Media (7 components)
- Rich Text
- Image
- Video
- Promo/Banner (4 variants: Hero, Split-content, Overlay, Card-style)
- Card/Tile (4 variants: Vertical, Horizontal, Image-top, Icon-based)
- Carousel/Slider
- Gallery

### Forms & Interactive (6+ components)
- Search Box
- Form (Contact, Newsletter, Multi-step)
- Social Links
- Call-to-Action
- Link List
- Map

## 🎯 Experience Editor Simulation

Toggle Experience Editor mode in Storybook toolbar to see:
- Placeholder visualization with borders and labels
- Component selection panel
- Component toolbars (Edit, Move, Delete)
- Drag-and-drop simulation
- Device preview modes

## 📖 SXA Integration

Each component includes detailed SXA integration notes:
- Rendering name and controller
- Data source requirements
- Rendering parameters
- Variant definitions
- HTML requirements
- Caching strategies

## 🎨 Theming

Themes are implemented using CSS Custom Properties. Switch themes via the Storybook toolbar or programmatically:

```javascript
// Set theme
ThemeSwitcher.setTheme('dark');

// Get current theme
const currentTheme = ThemeSwitcher.getCurrentTheme();
```

## 🌐 Language Switching

Switch languages via the Storybook toolbar or programmatically:

```javascript
// Set language
LanguageSwitcher.setLanguage('ar');

// Check if RTL
const isRTL = LanguageSwitcher.isRTL();
```

## 📁 Project Structure

```
sitecore-sxa-component-library/
├── .storybook/              # Storybook configuration
├── src/
│   ├── components/          # SXA components
│   │   ├── header/
│   │   ├── breadcrumb/
│   │   ├── footer/
│   │   ├── promo/
│   │   ├── card/
│   │   ├── form/
│   │   └── ...
│   ├── styles/              # Global styles
│   │   ├── _variables.scss
│   │   ├── _themes.scss
│   │   ├── _rtl.scss
│   │   ├── _experience-editor.scss
│   │   └── main.scss
│   ├── js/                  # JavaScript utilities
│   │   ├── theme-switcher.js
│   │   ├── language-switcher.js
│   │   └── experience-editor.js
│   └── demos/               # Demo pages
├── package.json
└── README.md
```

## 🔧 Development

### Creating a New Component

1. Create component folder in `src/components/`
2. Add HTML template (`component.html`)
3. Add Sass styles (`component.scss`)
4. Add JavaScript if needed (`component.js`)
5. Create Storybook story (`component.stories.js`)

### Component Template

```html
<!-- component.html -->
<div class="sxa-component sxa-[name]" data-component-name="[Name]" data-variant="default">
  <!-- Component content -->
</div>
```

### Storybook Story Template

```javascript
// component.stories.js
import './component.scss';

export default {
  title: 'SXA Components/Category/ComponentName',
  // ... configuration
};

export const Default = {
  // ... story definition
};
```

## 🎨 CSS Custom Properties

All themes use CSS Custom Properties for easy customization:

```css
:root {
  --color-primary: #0078d4;
  --color-secondary: #6c757d;
  --bg-body: #ffffff;
  --text-primary: #212529;
  /* ... more variables */
}
```

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- **xs**: 0px
- **sm**: 576px
- **md**: 768px
- **lg**: 992px
- **xl**: 1200px
- **xxl**: 1400px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please follow the component creation guidelines above.

## 📧 Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ for the Sitecore community
