# Sitecore SXA Component Library - Use Cases & User Guide

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Use Cases](#use-cases)
4. [How to Use Components](#how-to-use-components)
5. [Theme Customization](#theme-customization)
6. [Multi-lingual Implementation](#multi-lingual-implementation)
7. [Experience Editor Usage](#experience-editor-usage)
8. [Integration with Sitecore](#integration-with-sitecore)
9. [Development Workflow](#development-workflow)
10. [Best Practices](#best-practices)

---

## 📖 Project Overview

The Sitecore SXA Component Library Simulator is a comprehensive toolkit for:
- **Developers**: Building and testing SXA components before Sitecore integration
- **Designers**: Creating and previewing component designs with multiple themes
- **Content Editors**: Understanding component capabilities and variants
- **Project Managers**: Demonstrating SXA capabilities to stakeholders

---

## 🚀 Getting Started

### Installation

```bash
# Clone or navigate to the project
cd d:\Sitecore

# Install dependencies (already done)
npm install

# Start Storybook
npm run storybook
```

Storybook will open at **http://localhost:6006**

### First Steps

1. **Explore Components**: Browse the sidebar to see all 13 components
2. **Try Themes**: Use the toolbar to switch between Default, Dark, and Vibrant themes
3. **Test RTL**: Switch to Arabic language to see RTL layout
4. **Enable Experience Editor**: Toggle Experience Editor mode to see editing UI

---

## 💼 Use Cases

### Use Case 1: Rapid Prototyping

**Scenario**: You need to quickly prototype a new website layout for a client presentation.

**Steps**:
1. Open Storybook at http://localhost:6006
2. Navigate to **SXA Components > Navigation > Header**
3. Select the **Sticky** variant for a fixed header
4. Go to **Content > Promo** and choose **Hero** variant for the banner
5. Add **Card** components in a grid layout for content sections
6. Use **Footer > Multi Column** for the footer
7. Switch themes to show different design options to the client

**Benefits**:
- No Sitecore setup required
- Instant visual feedback
- Easy to demonstrate multiple design options

### Use Case 2: Component Development & Testing

**Scenario**: You're developing a new component and need to test it across different themes and languages.

**Steps**:
1. Create your component in `src/components/your-component/`
2. Add HTML, SCSS, and JS files
3. Create a Storybook story file
4. Run `npm run storybook`
5. Use the toolbar to test:
   - **Theme Switcher**: Test all 3 themes
   - **Locale Switcher**: Test English, Arabic (RTL), French
   - **Experience Editor**: Verify editing experience

**Benefits**:
- Isolated component testing
- Multi-theme validation
- RTL layout verification
- No backend dependencies

### Use Case 3: Design System Documentation

**Scenario**: Your team needs a living style guide for the SXA implementation.

**Steps**:
1. Use Storybook as the single source of truth
2. Each component shows:
   - All available variants
   - SXA integration notes
   - Rendering parameters
   - HTML requirements
3. Share the Storybook URL with the team
4. Build static Storybook for deployment:
   ```bash
   npm run build-storybook
   ```

**Benefits**:
- Self-documenting components
- Always up-to-date documentation
- Accessible to entire team
- Can be deployed to staging server

### Use Case 4: Client Training

**Scenario**: Content editors need to understand what components are available and how they work.

**Steps**:
1. Open Storybook in presentation mode
2. Navigate through components category by category
3. Show different variants for each component
4. Enable **Experience Editor** mode to show:
   - How placeholders appear
   - How to add components
   - How to edit components
5. Demonstrate theme switching for multi-brand sites

**Benefits**:
- Visual, interactive training
- No risk of breaking production
- Editors can explore freely
- Realistic editing experience

### Use Case 5: Multi-Brand Website Development

**Scenario**: You're building multiple websites for different brands using the same component library.

**Steps**:
1. Use the **Default SXA** theme as the base
2. Create brand-specific themes by modifying CSS Custom Properties
3. Test components across all brand themes
4. Use the theme switcher to compare brands side-by-side
5. Export theme CSS for Sitecore integration

**Benefits**:
- Consistent component behavior
- Brand-specific styling
- Easy theme comparison
- Reduced development time

### Use Case 6: Accessibility Audit

**Scenario**: You need to ensure all components meet WCAG 2.1 AA standards.

**Steps**:
1. Open each component in Storybook
2. Use browser DevTools to inspect:
   - ARIA attributes
   - Semantic HTML
   - Keyboard navigation
3. Test with screen readers
4. Verify focus management
5. Check color contrast in all themes

**Benefits**:
- Component-level accessibility testing
- Easy to identify issues
- Test across all variants
- Document accessibility features

### Use Case 7: Responsive Design Testing

**Scenario**: Verify components work across all device sizes.

**Steps**:
1. Open Storybook
2. Use browser DevTools responsive mode
3. Test each component at:
   - Mobile (320px - 767px)
   - Tablet (768px - 991px)
   - Desktop (992px+)
4. Use **Experience Editor** device preview for additional testing

**Benefits**:
- Quick responsive testing
- No device lab needed
- Test all breakpoints
- Identify layout issues early

---

## 🎨 How to Use Components

### Basic Component Usage

#### 1. Header Component

**Purpose**: Site-wide navigation with logo, menu, search, and utilities.

**HTML Structure**:
```html
<header class="sxa-component sxa-header" data-component-name="Header" data-variant="standard">
  <!-- Header content -->
</header>
```

**Variants**:
- `data-variant="standard"` - Default header
- `data-variant="sticky"` - Fixed on scroll
- `data-variant="transparent"` - Semi-transparent background

**Customization**:
```javascript
// Change logo text
document.querySelector('.logo-text').textContent = 'Your Brand';

// Hide search
document.querySelector('.search-toggle').style.display = 'none';
```

**Sitecore Integration**:
- Rendering: `Navigation/Header`
- Data Source: Site Settings > Navigation
- Parameters: `Logo`, `ShowSearch`, `StickyHeader`

#### 2. Promo/Banner Component

**Purpose**: High-impact promotional content for hero sections.

**HTML Structure**:
```html
<div class="sxa-component sxa-promo" data-component-name="Promo" data-variant="hero">
  <div class="promo-container">
    <!-- Promo content -->
  </div>
</div>
```

**Variants**:
- `hero` - Full-width hero banner
- `split-content` - Two-column layout
- `overlay` - Centered with gradient
- `card-style` - Contained card format

**Customization**:
```css
/* Custom gradient */
.sxa-promo .promo-background {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

**Sitecore Integration**:
- Rendering: `Content/Promo`
- Fields: `Image`, `Title`, `Description`, `CTA Text`, `CTA Link`
- Parameters: `BackgroundStyle`, `TextAlignment`

#### 3. Card Component

**Purpose**: Flexible content cards for articles, products, or services.

**HTML Structure**:
```html
<div class="sxa-component sxa-card" data-component-name="Card" data-variant="vertical">
  <div class="card-wrapper">
    <!-- Card content -->
  </div>
</div>
```

**Grid Layout**:
```html
<div class="card-grid">
  <!-- Multiple card components -->
</div>
```

**Variants**:
- `vertical` - Standard card
- `horizontal` - Side-by-side
- `image-top` - Compact version
- `icon-based` - Icon instead of image

**Sitecore Integration**:
- Rendering: `Content/Card`
- Fields: `Image`, `Title`, `Description`, `Link`
- Parameters: `CardStyle`, `ImagePosition`

#### 4. Form Component

**Purpose**: Contact forms with validation.

**HTML Structure**:
```html
<div class="sxa-component sxa-form" data-component-name="Form" data-variant="contact">
  <form class="contact-form">
    <!-- Form fields -->
  </form>
</div>
```

**JavaScript Integration**:
```javascript
// Form is auto-initialized
// Access form data on submit:
$('.contact-form').on('submit', function(e) {
  const formData = $(this).serialize();
  // Send to Sitecore Forms API
});
```

**Sitecore Integration**:
- Rendering: `Forms/Form`
- Integration: Sitecore Forms module
- Parameters: `FormAction`, `SuccessMessage`

#### 5. Tabs Component

**Purpose**: Organize content in tabbed interface.

**HTML Structure**:
```html
<div class="sxa-component sxa-tabs" data-component-name="Tabs" data-variant="horizontal">
  <ul class="tabs-nav">
    <!-- Tab buttons -->
  </ul>
  <div class="tabs-content">
    <!-- Tab panels -->
  </div>
</div>
```

**Keyboard Navigation**:
- Arrow keys: Navigate between tabs
- Home: First tab
- End: Last tab
- Enter/Space: Activate tab

**Sitecore Integration**:
- Rendering: `Structure/Tabs`
- Data Source: Tab items collection
- Parameters: `TabStyle`, `ActiveTabIndex`

---

## 🎨 Theme Customization

### Using Built-in Themes

**Via Storybook Toolbar**:
1. Click the **Theme** dropdown in toolbar
2. Select: Default SXA, Dark Corporate, or Modern Vibrant
3. All components update instantly

**Via JavaScript**:
```javascript
// Set theme programmatically
ThemeSwitcher.setTheme('dark');

// Get current theme
const currentTheme = ThemeSwitcher.getCurrentTheme();

// Listen for theme changes
$(document).on('themeChanged', function(event, themeName) {
  console.log('Theme changed to:', themeName);
});
```

### Creating Custom Themes

**Step 1**: Define CSS Custom Properties in `_themes.scss`:

```scss
[data-theme='custom'] {
  // Primary colors
  --color-primary: #your-primary-color;
  --color-primary-light: #your-light-shade;
  --color-primary-dark: #your-dark-shade;
  
  // Background colors
  --bg-body: #your-bg-color;
  --bg-surface: #your-surface-color;
  
  // Text colors
  --text-primary: #your-text-color;
  --text-secondary: #your-secondary-text;
  
  // Component-specific
  --header-bg: #your-header-bg;
  --footer-bg: #your-footer-bg;
}
```

**Step 2**: Add to theme switcher:

```javascript
// In theme-switcher.js or your custom script
ThemeSwitcher.setTheme('custom');
```

**Step 3**: Test in Storybook:

```javascript
// Add to .storybook/preview.js
globalTypes: {
  theme: {
    toolbar: {
      items: [
        { value: 'default', title: 'Default SXA' },
        { value: 'dark', title: 'Dark Corporate' },
        { value: 'vibrant', title: 'Modern Vibrant' },
        { value: 'custom', title: 'Your Custom Theme' }, // Add this
      ],
    },
  },
}
```

---

## 🌍 Multi-lingual Implementation

### Using Built-in Languages

**Via Storybook Toolbar**:
1. Click the **Locale** dropdown
2. Select: English, Arabic (RTL), or French
3. Layout automatically adjusts for RTL

**Via JavaScript**:
```javascript
// Set language
LanguageSwitcher.setLanguage('ar');

// Check if RTL
const isRTL = LanguageSwitcher.isRTL(); // true for Arabic

// Get current language
const currentLang = LanguageSwitcher.getCurrentLanguage();
```

### Adding Translations

**Step 1**: Add translations in `language-switcher.js`:

```javascript
translations: {
  en: {
    home: 'Home',
    about: 'About',
    // ... more translations
  },
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    // ... more translations
  },
  de: { // Add German
    home: 'Startseite',
    about: 'Über uns',
    // ... more translations
  }
}
```

**Step 2**: Add language to switcher:

```javascript
// Add to rtlLanguages if RTL
rtlLanguages: ['ar', 'he', 'fa', 'ur'],
```

**Step 3**: Use in HTML:

```html
<span data-i18n="home">Home</span>
```

### RTL Best Practices

1. **Use Logical Properties**:
   ```css
   /* Instead of margin-left */
   margin-inline-start: 1rem;
   
   /* Instead of padding-right */
   padding-inline-end: 1rem;
   ```

2. **Test Text Expansion**:
   - Arabic text can be 20% longer
   - German text can be 30% longer
   - Use flexible layouts

3. **Mirror Icons**:
   ```html
   <svg class="icon-flip-rtl"><!-- Icon --></svg>
   ```

---

## 🛠️ Experience Editor Usage

### Enabling Experience Editor

**Via Storybook Toolbar**:
1. Click the **Experience Editor** toggle
2. Select "On"
3. Placeholder chrome and toolbars appear

**Via JavaScript**:
```javascript
// Toggle Experience Editor
ExperienceEditor.toggle();

// Check if enabled
const isEnabled = ExperienceEditor.isEnabled;
```

### Experience Editor Features

#### 1. Placeholder Visualization

**What You See**:
- Dashed borders around placeholders
- Placeholder name labels
- "Add Component" buttons

**Usage**:
```html
<div class="sxa-placeholder" data-placeholder-name="main">
  <!-- Components go here -->
</div>
```

#### 2. Component Toolbars

**What You See**:
- Edit button (✏️)
- Move button (↕️)
- Delete button (🗑️)

**Usage**:
- Hover over any component
- Click toolbar buttons
- Actions are logged to console

#### 3. Component Panel

**What You See**:
- Categorized component list
- Search functionality
- Drag-and-drop simulation

**Usage**:
1. Click the ➕ button (bottom right)
2. Browse components by category
3. Search for specific components
4. Drag components to placeholders

#### 4. Device Preview

**What You See**:
- Desktop, Tablet, Mobile buttons
- Active device highlighted

**Usage**:
- Click device icons in toolbar
- Layout adjusts for selected device

---

## 🔗 Integration with Sitecore

### Component Integration Workflow

#### Step 1: Export Component HTML

```bash
# From Storybook, copy the HTML structure
# Each component has SXA integration notes
```

#### Step 2: Create Sitecore Rendering

```csharp
// In Sitecore:
// 1. Create rendering item
// 2. Set controller and view
// 3. Configure rendering parameters
```

#### Step 3: Map Data Sources

```cshtml
@* In your .cshtml view *@
<div class="sxa-component sxa-card" data-component-name="Card">
  <div class="card-wrapper">
    <div class="card-image">
      <img src="@Model.Image.Src" alt="@Model.Image.Alt" />
    </div>
    <div class="card-content">
      <h3 class="card-title">@Model.Title</h3>
      <p class="card-description">@Model.Description</p>
      <a href="@Model.Link.Url" class="card-link">@Model.Link.Text</a>
    </div>
  </div>
</div>
```

#### Step 4: Add Rendering Variants

```xml
<!-- In Sitecore, create rendering variants -->
<Variant Name="Vertical">
  <VariantField data-variant="vertical" />
</Variant>
<Variant Name="Horizontal">
  <VariantField data-variant="horizontal" />
</Variant>
```

#### Step 5: Deploy Assets

```bash
# Copy compiled CSS and JS to Sitecore
npm run sass:build

# Copy to: /sitecore/shell/themes/your-theme/
```

### SXA Integration Checklist

For each component, verify:

- [ ] Rendering item created
- [ ] Controller and view configured
- [ ] Data source template defined
- [ ] Rendering parameters set
- [ ] Variants created
- [ ] CSS and JS deployed
- [ ] Component tested in Experience Editor
- [ ] Component tested on published site

---

## 👨‍💻 Development Workflow

### Adding a New Component

**Step 1**: Create component folder:
```bash
mkdir src/components/your-component
```

**Step 2**: Create files:
```bash
# HTML template
touch src/components/your-component/your-component.html

# Styles
touch src/components/your-component/your-component.scss

# JavaScript (if needed)
touch src/components/your-component/your-component.js

# Storybook story
touch src/components/your-component/your-component.stories.js
```

**Step 3**: Build the component:

```html
<!-- your-component.html -->
<div class="sxa-component sxa-your-component" 
     data-component-name="Your Component" 
     data-variant="default">
  <!-- Component content -->
</div>
```

```scss
// your-component.scss
@import '../../styles/variables';

.sxa-your-component {
  // Styles using CSS Custom Properties
  background: var(--card-bg);
  color: var(--text-primary);
}
```

```javascript
// your-component.stories.js
import './your-component.scss';

export default {
  title: 'SXA Components/Category/Your Component',
  parameters: {
    docs: {
      description: {
        component: `
# Your Component

Description and SXA integration notes.
        `,
      },
    },
  },
};

const loadTemplate = () => {
  return fetch(new URL('./your-component.html', import.meta.url))
    .then(response => response.text());
};

export const Default = {
  render: async () => {
    return await loadTemplate();
  },
};
```

**Step 4**: Test in Storybook:
```bash
npm run storybook
```

**Step 5**: Test across:
- All 3 themes
- All 3 languages (including RTL)
- Experience Editor mode
- Different viewport sizes

### Modifying Existing Components

**Step 1**: Locate component files:
```
src/components/[component-name]/
```

**Step 2**: Make changes:
- Edit HTML structure
- Update SCSS styles
- Modify JavaScript behavior
- Update Storybook story

**Step 3**: Hot reload:
- Storybook auto-refreshes
- See changes immediately

**Step 4**: Test thoroughly:
- All variants
- All themes
- RTL layout
- Responsive design

---

## ✅ Best Practices

### Component Development

1. **Use CSS Custom Properties**:
   ```scss
   // Good
   color: var(--text-primary);
   
   // Avoid
   color: #212529;
   ```

2. **Follow SXA Naming**:
   ```html
   <!-- Good -->
   <div class="sxa-component sxa-card">
   
   <!-- Avoid -->
   <div class="card-component">
   ```

3. **Include Data Attributes**:
   ```html
   <div class="sxa-component" 
        data-component-name="Card" 
        data-variant="vertical">
   ```

4. **Document SXA Integration**:
   - Rendering name
   - Data source fields
   - Rendering parameters
   - Variant options

### Accessibility

1. **Use Semantic HTML**:
   ```html
   <!-- Good -->
   <nav>, <header>, <main>, <footer>
   
   <!-- Avoid -->
   <div class="nav">, <div class="header">
   ```

2. **Add ARIA Attributes**:
   ```html
   <button aria-label="Close" aria-expanded="false">
   ```

3. **Support Keyboard Navigation**:
   ```javascript
   // Handle arrow keys, Enter, Escape, etc.
   ```

4. **Test with Screen Readers**:
   - NVDA (Windows)
   - JAWS (Windows)
   - VoiceOver (Mac)

### Performance

1. **Optimize Images**:
   - Use appropriate formats (WebP, AVIF)
   - Implement lazy loading
   - Provide responsive images

2. **Minimize JavaScript**:
   - Use event delegation
   - Debounce scroll/resize events
   - Load scripts asynchronously

3. **Optimize CSS**:
   - Remove unused styles
   - Use CSS containment
   - Minimize specificity

### Testing

1. **Browser Testing**:
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

2. **Device Testing**:
   - Mobile (320px - 767px)
   - Tablet (768px - 991px)
   - Desktop (992px+)
   - Large screens (1400px+)

3. **Theme Testing**:
   - All 3 built-in themes
   - Custom themes
   - High contrast mode

4. **Language Testing**:
   - English (LTR)
   - Arabic (RTL)
   - French (LTR)
   - Text expansion scenarios

---

## 📞 Support & Resources

### Documentation
- [README.md](file:///d:/Sitecore/README.md) - Project overview and setup
- [Walkthrough](file:///C:/Users/deepa/.gemini/antigravity/brain/c021e615-1314-4221-9937-21ef1510977e/walkthrough.md) - Complete feature documentation

### Storybook
- Local: http://localhost:6006
- Build static: `npm run build-storybook`

### Commands Reference
```bash
npm run storybook       # Start dev server
npm run build-storybook # Build static site
npm run sass           # Compile Sass (watch)
npm run sass:build     # Compile Sass (production)
npm run dev            # Sass + Storybook
```

---

## 🎯 Quick Start Scenarios

### Scenario 1: "I want to see all components"
```bash
npm run storybook
# Browse sidebar in Storybook
```

### Scenario 2: "I want to test dark theme"
```bash
npm run storybook
# Click Theme dropdown > Dark Corporate
```

### Scenario 3: "I want to see RTL layout"
```bash
npm run storybook
# Click Locale dropdown > Arabic
```

### Scenario 4: "I want to simulate Experience Editor"
```bash
npm run storybook
# Click Experience Editor toggle > On
```

### Scenario 5: "I want to add a new component"
```bash
# Follow "Adding a New Component" in Development Workflow section
```

---

**Last Updated**: December 18, 2024  
**Version**: 1.0.0  
**Components**: 13/20+
