// ============================================
// EXPERIENCE EDITOR SIMULATION
// ============================================

(function ($) {
    'use strict';

    const ExperienceEditor = {
        isEnabled: false,
        storageKey: 'sxa-experience-editor',

        components: {
            navigation: [
                { name: 'Header', desc: 'Main navigation header', icon: '📋' },
                { name: 'Breadcrumb', desc: 'Breadcrumb navigation', icon: '🔗' },
                { name: 'Footer', desc: 'Page footer', icon: '📄' },
            ],
            content: [
                { name: 'Rich Text', desc: 'Rich text content', icon: '📝' },
                { name: 'Image', desc: 'Image component', icon: '🖼️' },
                { name: 'Video', desc: 'Video player', icon: '🎥' },
                { name: 'Promo', desc: 'Promotional banner', icon: '🎯' },
                { name: 'Card', desc: 'Content card', icon: '🃏' },
                { name: 'Carousel', desc: 'Image carousel', icon: '🎠' },
                { name: 'Gallery', desc: 'Image gallery', icon: '🖼️' },
            ],
            forms: [
                { name: 'Search Box', desc: 'Search input', icon: '🔍' },
                { name: 'Form', desc: 'Contact form', icon: '📋' },
                { name: 'CTA', desc: 'Call to action', icon: '👆' },
                { name: 'Social Links', desc: 'Social media links', icon: '📱' },
            ],
            structure: [
                { name: 'Container', desc: 'Layout container', icon: '📦' },
                { name: 'Tabs', desc: 'Tabbed content', icon: '📑' },
                { name: 'Accordion', desc: 'Accordion panel', icon: '📂' },
            ]
        },

        init: function () {
            this.loadState();
            this.createToolbar();
            this.createComponentPanel();
            this.bindEvents();
        },

        loadState: function () {
            const savedState = localStorage.getItem(this.storageKey);
            this.isEnabled = savedState === 'true';
            this.updateState();
        },

        toggle: function () {
            this.isEnabled = !this.isEnabled;
            localStorage.setItem(this.storageKey, this.isEnabled);
            this.updateState();
        },

        updateState: function () {
            document.documentElement.setAttribute('data-experience-editor', this.isEnabled ? 'on' : 'off');

            if (this.isEnabled) {
                this.enhancePlaceholders();
                this.enhanceComponents();
            }

            // Trigger custom event
            $(document).trigger('experienceEditorChanged', [this.isEnabled]);
        },

        createToolbar: function () {
            const toolbar = `
        <div class="ee-main-toolbar">
          <div class="ee-toolbar-section">
            <h1 class="ee-toolbar-title">Experience Editor</h1>
            <button class="ee-toolbar-button" data-action="toggle-placeholders">
              Toggle Placeholders
            </button>
            <button class="ee-toolbar-button" data-action="toggle-panel">
              Components
            </button>
          </div>
          <div class="ee-toolbar-section">
            <div class="ee-device-preview">
              <button data-device="desktop" class="active" title="Desktop">🖥️</button>
              <button data-device="tablet" title="Tablet">📱</button>
              <button data-device="mobile" title="Mobile">📱</button>
            </div>
          </div>
          <div class="ee-toolbar-section">
            <button class="ee-toolbar-button">Preview</button>
            <button class="ee-toolbar-button ee-primary">Save</button>
            <button class="ee-toolbar-button ee-primary">Publish</button>
          </div>
        </div>
        <button class="ee-panel-toggle" title="Toggle Component Panel">
          ➕
        </button>
      `;

            if ($('.ee-main-toolbar').length === 0) {
                $('body').prepend(toolbar);
            }
        },

        createComponentPanel: function () {
            let categoriesHtml = '';

            for (const [category, components] of Object.entries(this.components)) {
                const componentItems = components.map(comp => `
          <div class="ee-component-item" draggable="true" data-component="${comp.name}">
            <div class="ee-component-name">${comp.icon} ${comp.name}</div>
            <div class="ee-component-desc">${comp.desc}</div>
          </div>
        `).join('');

                categoriesHtml += `
          <div class="ee-component-category">
            <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <div class="ee-component-list">
              ${componentItems}
            </div>
          </div>
        `;
            }

            const panel = `
        <div class="ee-component-panel">
          <div class="ee-panel-header">
            <h3>Add Component</h3>
            <input type="text" class="ee-panel-search" placeholder="Search components...">
          </div>
          <div class="ee-panel-content">
            ${categoriesHtml}
          </div>
        </div>
      `;

            if ($('.ee-component-panel').length === 0) {
                $('body').append(panel);
            }
        },

        enhancePlaceholders: function () {
            $('.sxa-placeholder').each(function () {
                if (!$(this).find('.ee-add-component').length) {
                    const placeholderName = $(this).data('placeholder-name') || 'main';
                    $(this).attr('data-placeholder-name', placeholderName);
                    $(this).append('<button class="ee-add-component">Add Component</button>');
                }
            });
        },

        enhanceComponents: function () {
            $('.sxa-component').each(function () {
                if (!$(this).find('.ee-component-toolbar').length) {
                    const componentName = $(this).data('component-name') || 'Component';
                    $(this).attr('data-component-name', componentName);

                    const toolbar = `
            <div class="ee-component-toolbar">
              <button class="ee-toolbar-btn ee-edit" title="Edit">✏️</button>
              <button class="ee-toolbar-btn ee-move" title="Move">↕️</button>
              <button class="ee-toolbar-btn ee-delete" title="Delete">🗑️</button>
            </div>
          `;
                    $(this).prepend(toolbar);
                }
            });
        },

        bindEvents: function () {
            const self = this;

            // Toggle panel
            $(document).on('click', '.ee-panel-toggle, [data-action="toggle-panel"]', function (e) {
                e.preventDefault();
                $('.ee-component-panel').toggleClass('open');
            });

            // Add component button
            $(document).on('click', '.ee-add-component', function (e) {
                e.preventDefault();
                $('.ee-component-panel').addClass('open');
            });

            // Component search
            $(document).on('input', '.ee-panel-search', function () {
                const searchTerm = $(this).val().toLowerCase();
                $('.ee-component-item').each(function () {
                    const componentName = $(this).find('.ee-component-name').text().toLowerCase();
                    const componentDesc = $(this).find('.ee-component-desc').text().toLowerCase();
                    const matches = componentName.includes(searchTerm) || componentDesc.includes(searchTerm);
                    $(this).toggle(matches);
                });
            });

            // Device preview
            $(document).on('click', '.ee-device-preview button', function () {
                $('.ee-device-preview button').removeClass('active');
                $(this).addClass('active');
                const device = $(this).data('device');
                $(document).trigger('devicePreviewChanged', [device]);
            });

            // Component toolbar actions
            $(document).on('click', '.ee-toolbar-btn', function (e) {
                e.stopPropagation();
                const action = $(this).attr('class').match(/ee-(\w+)/)[1];
                const component = $(this).closest('.sxa-component');

                switch (action) {
                    case 'edit':
                        console.log('Edit component:', component.data('component-name'));
                        break;
                    case 'delete':
                        if (confirm('Delete this component?')) {
                            component.fadeOut(300, function () { $(this).remove(); });
                        }
                        break;
                    case 'move':
                        console.log('Move component:', component.data('component-name'));
                        break;
                }
            });

            // Drag and drop simulation
            $(document).on('dragstart', '.ee-component-item', function (e) {
                e.originalEvent.dataTransfer.setData('component', $(this).data('component'));
            });

            $(document).on('dragover', '.sxa-placeholder', function (e) {
                e.preventDefault();
                $(this).addClass('drag-over');
            });

            $(document).on('dragleave', '.sxa-placeholder', function () {
                $(this).removeClass('drag-over');
            });

            $(document).on('drop', '.sxa-placeholder', function (e) {
                e.preventDefault();
                $(this).removeClass('drag-over');
                const componentName = e.originalEvent.dataTransfer.getData('component');
                console.log('Drop component:', componentName, 'into placeholder:', $(this).data('placeholder-name'));
                // In a real implementation, this would add the component to the placeholder
            });
        }
    };

    // Initialize on DOM ready
    $(document).ready(function () {
        ExperienceEditor.init();
    });

    // Expose to global scope
    window.ExperienceEditor = ExperienceEditor;

})(jQuery);
