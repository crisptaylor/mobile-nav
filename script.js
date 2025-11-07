/**
 * Mobile/Tablet Wireframe Template - JavaScript
 * Handles navigation, menu interactions, and animations
 * Multi-Level Menu System Implementation
 */

(function() {
    'use strict';

    // ============================================
    // Menu Icons & Icon Utilities
    // ============================================
    const menuIcons = {
        // Level 1 Icons
        'Home': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>`,
        'About': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>`,
        'Projects': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>`,
        'Contact': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <line x1="10" y1="9" x2="14" y2="9"></line>
            <line x1="12" y1="7" x2="12" y2="11"></line>
        </svg>`,
        'Blog': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            <line x1="10" y1="6" x2="18" y2="6"></line>
            <line x1="10" y1="10" x2="18" y2="10"></line>
        </svg>`,
        // Level 3 Icons - About Section
        'History': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>`,
        'Mission': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>`,
        'Values': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>`,
        'Leadership': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>`,
        'Careers': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>`,
        'Press': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            <line x1="8" y1="6" x2="18" y2="6"></line>
        </svg>`,
        // Level 3 Icons - Services Section
        'Frontend Development': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>`,
        'Backend Development': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>`,
        'Full Stack Solutions': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3 9" x2="21" y2="9"></line>
            <line x1="9 21" x2="9" y2="9"></line>
        </svg>`,
        'Frameworks': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>`,
        'iOS Development': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>`,
        'Android Development': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
            <path d="M7 8h0M17 8h0"></path>
            <path d="M7 12h10"></path>
        </svg>`,
        'Cross-Platform': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
            <line x1="7" y1="8" x2="7.01" y2="8"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
            <line x1="17" y1="8" x2="17.01" y2="8"></line>
        </svg>`,
        'Technologies': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>`,
        'UI/UX Design': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
        </svg>`,
        'Brand Identity': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
        </svg>`,
        'Prototyping': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <line x1="3" y1="9" x2="21" y2="9"></line>
        </svg>`,
        'Consulting': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <line x1="13" y1="8" x2="13" y2="14"></line>
            <line x1="9" y1="10" x2="17" y2="10"></line>
        </svg>`,
        'Maintenance': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>`,
        // Level 3 Icons - Contact Section
        'New York': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>`,
        'London': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>`,
        'Tokyo': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>`,
        'Get in Touch': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>`,
        'Support': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <line x1="9" y1="9" x2="15" y2="9"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>`,
        'Sales': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>`,
        // Level 3 Icons - Blog Section
        'Design': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
        </svg>`,
        'Development': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>`,
        'Business': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>`,
        'Technology': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>`,
        'Latest Posts': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>`,
        'Archives': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="21 8 21 21 3 21 3 8"></polyline>
            <rect x="1" y="3" width="22" height="5"></rect>
            <line x1="10" y1="12" x2="14" y2="12"></line>
        </svg>`,
        'Newsletter': `<svg class="menu-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>`
    };

    /**
     * Create animated dropdown chevron icon
     */
    function createDropdownIcon() {
        const icon = document.createElement('span');
        icon.className = 'menu-dropdown-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>`;
        return icon;
    }

    /**
     * Create arrow icon for submenu navigation
     */
    function createArrowIcon() {
        const icon = document.createElement('span');
        icon.className = 'menu-arrow-icon';
        icon.setAttribute('aria-hidden', 'true');
        icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>`;
        return icon;
    }

    // ============================================
    // Menu Data Structure
    // ============================================
    const menuData = [
        { label: 'Home', href: 'index.html' },
        { 
            label: 'About', 
            children: [
                { label: 'My Journey', href: 'journey.html' },
                { label: 'Skills & Expertise', href: 'skills.html' },
                { 
                    label: 'Background', 
                    children: [
                        { label: 'Experience', href: 'background.html#experience' },
                        { label: 'Education', href: 'background.html#education' },
                        { label: 'Technologies', href: 'background.html#technologies' }
                    ]
                }
            ]
        },
        { 
            label: 'Projects', 
            children: [
                { 
                    label: 'Web Development', 
                    href: 'web-development.html',
                    children: [
                        { label: 'Frontend Development', href: 'web-development.html#frontend' },
                        { label: 'Backend Development', href: 'web-development.html#backend' },
                        { label: 'Full Stack Solutions', href: 'web-development.html#fullstack' },
                        { 
                            label: 'Frameworks', 
                            href: 'frameworks.html',
                            children: [
                                { label: 'React', href: 'frameworks.html#react' },
                                { label: 'Vue.js', href: 'frameworks.html#vue' },
                                { label: 'Angular', href: 'frameworks.html#angular' },
                                { label: 'Svelte', href: 'frameworks.html#svelte' }
                            ]
                        }
                    ]
                },
                { 
                    label: 'Mobile Apps', 
                    href: 'mobile-apps.html',
                    children: [
                        { label: 'iOS Development', href: 'mobile-apps.html#ios' },
                        { label: 'Android Development', href: 'mobile-apps.html#android' },
                        { label: 'Cross-Platform', href: 'mobile-apps.html#crossplatform' },
                        { 
                            label: 'Technologies', 
                            children: [
                                { label: 'React Native', href: 'mobile-apps.html#reactnative' },
                                { label: 'Flutter', href: 'mobile-apps.html#flutter' },
                                { label: 'Ionic', href: 'mobile-apps.html#ionic' }
                            ]
                        }
                    ]
                },
                { 
                    label: 'Design Services', 
                    href: 'design-services.html',
                    children: [
                        { label: 'UI/UX Design', href: 'design-services.html#uiux' },
                        { label: 'Brand Identity', href: 'design-services.html#brand' },
                        { label: 'Prototyping', href: 'design-services.html#prototyping' }
                    ]
                },
                { label: 'Consulting', href: 'consulting.html' },
                { label: 'Maintenance', href: 'maintenance.html' }
            ]
        },
        { 
            label: 'Contact', 
            children: [
                { label: 'Get in Touch', href: 'contact.html' },
                { label: 'Let\'s Collaborate', href: 'collaborate.html' },
                { label: 'Availability', href: 'availability.html' }
            ]
        },
        { 
            label: 'Blog', 
            children: [
                { label: 'Latest Posts', href: 'blog.html' },
                { 
                    label: 'Categories', 
                    children: [
                        { label: 'Design', href: 'blog.html#design' },
                        { label: 'Development', href: 'blog.html#development' },
                        { label: 'Business', href: 'blog.html#business' },
                        { label: 'Technology', href: 'blog.html#technology' }
                    ]
                },
                { label: 'Archives', href: 'archives.html' },
                { label: 'Newsletter', href: 'newsletter.html' }
            ]
        }
    ];

    // ============================================
    // DOM Elements
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuContent = document.getElementById('menuContent');
    const navItems = document.querySelectorAll('.nav-item');
    const ctaButton = document.querySelector('.cta-button');
    const mainContent = document.getElementById('mainContent');

    // ============================================
    // Menu State Management
    // ============================================
    let isMenuOpen = false;
    let currentLevel = 1;
    let navigationStack = [];
    let submenuPages = [];
    let swipeStartX = null;
    let swipeStartY = null;
    let swipeThreshold = 50;
    let isSwiping = false;

    // ============================================
    // Scroll Indicator Management
    // ============================================
    /**
     * Update scroll indicators for a scrollable container
     */
    function updateScrollIndicators(container) {
        if (!container) return;
        
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        const isScrollable = scrollHeight > clientHeight;
        const isAtTop = scrollTop <= 10;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
        
        // Remove all scroll indicator classes
        container.classList.remove('scrollable-top', 'scrollable-bottom');
        
        if (isScrollable) {
            if (!isAtTop) {
                container.classList.add('scrollable-top');
            }
            if (!isAtBottom) {
                container.classList.add('scrollable-bottom');
            }
        }
    }

    /**
     * Setup scroll listeners for a container
     */
    function setupScrollListeners(container) {
        if (!container) return;
        
        // Initial check
        updateScrollIndicators(container);
        
        // Update on scroll
        container.addEventListener('scroll', () => {
            updateScrollIndicators(container);
        }, { passive: true });
        
        // Update on resize (in case content changes)
        const resizeObserver = new ResizeObserver(() => {
            updateScrollIndicators(container);
        });
        resizeObserver.observe(container);
    }

    // ============================================
    // Menu Rendering System
    // ============================================
    /**
     * Recursively render menu items from data structure
     * @param {Array} data - Menu data array
     * @param {HTMLElement} container - Container element to render into
     * @param {number} level - Current nesting level (1 = top level)
     */
    function renderMenu(data, container, level = 1) {
        if (!container) return;
        
        container.innerHTML = '';
        
        data.forEach((item, index) => {
            const hasChildren = item.children && item.children.length > 0;
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.setAttribute('data-level', level);
            menuItem.setAttribute('data-index', index);
            
            if (hasChildren) {
                menuItem.classList.add('has-children');
                menuItem.setAttribute('aria-expanded', 'false');
                menuItem.setAttribute('role', level === 1 ? 'button' : 'menuitem');
            } else {
                menuItem.setAttribute('role', 'menuitem');
            }
            
            const menuLink = document.createElement(hasChildren && level === 1 ? 'button' : 'a');
            menuLink.className = 'menu-link';
            
            // Add icon for level 1 and level 3+ menu items
            if ((level === 1 || level >= 3) && menuIcons[item.label]) {
                const iconWrapper = document.createElement('span');
                iconWrapper.className = 'menu-icon-wrapper';
                iconWrapper.innerHTML = menuIcons[item.label];
                menuLink.appendChild(iconWrapper);
            }
            
            const linkText = document.createElement('span');
            linkText.className = 'menu-link-text';
            linkText.textContent = item.label;
            menuLink.appendChild(linkText);
            
            // Add animated dropdown icon for items with children
            if (hasChildren) {
                if (level === 1) {
                    const dropdownIcon = createDropdownIcon();
                    menuLink.appendChild(dropdownIcon);
                } else {
                    const arrowIcon = createArrowIcon();
                    menuLink.appendChild(arrowIcon);
                }
            }
            
            if (hasChildren && level === 1) {
                // Level 1: Accordion behavior
                menuLink.setAttribute('type', 'button');
                menuLink.setAttribute('aria-expanded', 'false');
                menuLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleAccordion(menuItem, item);
                });
            } else if (hasChildren && level > 1) {
                // Level 2+: Slide-in page
                menuLink.setAttribute('href', '#');
                menuLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openSubmenu(item.children, item.label, level + 1, menuItem);
                });
            } else {
                // Regular link
                menuLink.setAttribute('href', item.href || '#');
                menuLink.addEventListener('click', () => {
                    setTimeout(closeMenu, 100);
                });
            }
            
            menuItem.appendChild(menuLink);
            
            // Add dropdown container for level 1 accordion
            if (hasChildren && level === 1) {
                const dropdown = document.createElement('div');
                dropdown.className = 'menu-dropdown';
                dropdown.setAttribute('role', 'region');
                dropdown.setAttribute('aria-hidden', 'true');
                
                // Render children as accordion items
                item.children.forEach((child, childIndex) => {
                    const childItem = document.createElement('div');
                    childItem.className = 'menu-item menu-item-child';
                    childItem.setAttribute('data-level', level + 1);
                    childItem.setAttribute('data-index', childIndex);
                    
                    const childLink = document.createElement('a');
                    childLink.className = 'menu-link';
                    childLink.textContent = child.label;
                    
                    if (child.children && child.children.length > 0) {
                        childLink.setAttribute('href', '#');
                        childLink.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openSubmenu(child.children, child.label, level + 2, childItem);
                        });
                        
                        const arrowIcon = createArrowIcon();
                        childLink.appendChild(arrowIcon);
                    } else {
                        childLink.setAttribute('href', child.href || '#');
                        childLink.addEventListener('click', () => {
                            setTimeout(closeMenu, 100);
                        });
                    }
                    
                    childItem.appendChild(childLink);
                    dropdown.appendChild(childItem);
                });
                
                menuItem.appendChild(dropdown);
            }
            
            container.appendChild(menuItem);
        });
        
        // Add keyboard navigation
        setupKeyboardNavigation(container, level);
        
        // Setup scroll indicators after rendering
        setTimeout(() => {
            updateScrollIndicators(container);
            setupScrollListeners(container);
        }, 100);
    }

    // ============================================
    // Accordion Functionality (Level 1)
    // ============================================
    /**
     * Toggle accordion dropdown for level 1 items
     */
    function toggleAccordion(menuItem, itemData) {
        const isActive = menuItem.classList.contains('active');
        const dropdown = menuItem.querySelector('.menu-dropdown');
        const dropdownIcon = menuItem.querySelector('.menu-dropdown-icon');
        const link = menuItem.querySelector('.menu-link');
        const iconWrapper = menuItem.querySelector('.menu-icon-wrapper');
        
        // Close all other accordions
        if (!isActive) {
            document.querySelectorAll('.menu-item.has-children.active').forEach(otherItem => {
                if (otherItem !== menuItem) {
                    otherItem.classList.remove('active');
                    const otherDropdown = otherItem.querySelector('.menu-dropdown');
                    const otherDropdownIcon = otherItem.querySelector('.menu-dropdown-icon');
                    const otherLink = otherItem.querySelector('.menu-link');
                    const otherIconWrapper = otherItem.querySelector('.menu-icon-wrapper');
                    if (otherDropdown) {
                        otherDropdown.style.maxHeight = '0';
                        otherDropdown.setAttribute('aria-hidden', 'true');
                    }
                    if (otherDropdownIcon) {
                        otherDropdownIcon.classList.remove('active');
                    }
                    if (otherLink) {
                        otherLink.setAttribute('aria-expanded', 'false');
                    }
                    if (otherIconWrapper) {
                        otherIconWrapper.classList.remove('active');
                    }
                }
            });
        }
        
        // Toggle current accordion
        menuItem.classList.toggle('active');
        
        if (dropdown) {
            if (isActive) {
                dropdown.style.maxHeight = '0';
                dropdown.setAttribute('aria-hidden', 'true');
            } else {
                dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
                dropdown.setAttribute('aria-hidden', 'false');
            }
        }
        
        if (dropdownIcon) {
            dropdownIcon.classList.toggle('active', !isActive);
        }
        
        if (link) {
            link.setAttribute('aria-expanded', !isActive);
        }
        
        if (iconWrapper) {
            iconWrapper.classList.toggle('active', !isActive);
        }
        
        // Update scroll indicators after accordion animation
        setTimeout(() => {
            const menuContentContainer = menuItem.closest('.menu-content');
            if (menuContentContainer) {
                updateScrollIndicators(menuContentContainer);
            }
        }, 350);
    }

    // ============================================
    // Slide-in Page System (Level 2+)
    // ============================================
    /**
     * Open a slide-in submenu page
     */
    function openSubmenu(menuData, parentLabel, level, parentMenuItem = null) {
        // Activate icon if parent menu item exists (for 3rd level items)
        if (parentMenuItem) {
            const iconWrapper = parentMenuItem.querySelector('.menu-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.classList.add('active');
            }
        }
        
        // Create submenu page
        const submenuPage = document.createElement('div');
        submenuPage.className = 'submenu-page';
        submenuPage.setAttribute('data-level', level);
        submenuPage.setAttribute('aria-label', `${parentLabel} submenu`);
        
        // Create header with back button
        const header = document.createElement('div');
        header.className = 'submenu-header';
        
        const backButton = document.createElement('button');
        backButton.className = 'menu-back-btn';
        backButton.setAttribute('aria-label', 'Go back');
        backButton.innerHTML = '←';
        backButton.addEventListener('click', () => {
            // Deactivate icon when going back
            if (parentMenuItem) {
                const iconWrapper = parentMenuItem.querySelector('.menu-icon-wrapper');
                if (iconWrapper) {
                    iconWrapper.classList.remove('active');
                }
            }
            goBack();
        });
        
        const title = document.createElement('h2');
        title.className = 'submenu-title';
        title.textContent = parentLabel;
        
        header.appendChild(backButton);
        header.appendChild(title);
        submenuPage.appendChild(header);
        
        // Create content container
        const content = document.createElement('nav');
        content.className = 'submenu-content';
        content.setAttribute('role', 'navigation');
        
        // Render menu items
        renderMenu(menuData, content, level);
        
        submenuPage.appendChild(content);
        
        // Add to overlay
        menuOverlay.appendChild(submenuPage);
        
        // Setup scroll indicators for submenu content
        setTimeout(() => {
            updateScrollIndicators(content);
            setupScrollListeners(content);
        }, 100);
        
        // Track in navigation stack
        navigationStack.push({
            level: level,
            parentLabel: parentLabel,
            element: submenuPage,
            parentMenuItem: parentMenuItem
        });
        
        submenuPages.push(submenuPage);
        currentLevel = level;
        
        // Animate slide-in
        requestAnimationFrame(() => {
            submenuPage.classList.add('active');
        });
        
        // Update z-index for stacking
        updateZIndex();
        
        // Announce to screen readers
        announceNavigation(parentLabel, level);
    }

    /**
     * Update z-index for stacked submenu pages
     */
    function updateZIndex() {
        submenuPages.forEach((page, index) => {
            page.style.zIndex = (2000 + index + 1).toString();
        });
    }

    // ============================================
    // Back Button Functionality
    // ============================================
    /**
     * Navigate back to previous menu level
     */
    function goBack() {
        if (navigationStack.length === 0) {
            // If at level 1, close menu
            closeMenu();
            return;
        }
        
        const currentPage = navigationStack.pop();
        const pageElement = currentPage.element;
        const parentMenuItem = currentPage.parentMenuItem;
        
        // Deactivate icon when going back
        if (parentMenuItem) {
            const iconWrapper = parentMenuItem.querySelector('.menu-icon-wrapper');
            if (iconWrapper) {
                iconWrapper.classList.remove('active');
            }
        }
        
        if (pageElement) {
            // Slide out current page
            pageElement.classList.remove('active');
            
            setTimeout(() => {
                pageElement.remove();
                submenuPages = submenuPages.filter(p => p !== pageElement);
                
                // Update current level
                if (navigationStack.length > 0) {
                    currentLevel = navigationStack[navigationStack.length - 1].level;
                } else {
                    currentLevel = 1;
                }
                
                // Update z-index
                updateZIndex();
            }, 300);
        }
    }

    // ============================================
    // Swipe Gesture Detection
    // ============================================
    /**
     * Initialize swipe gesture detection for submenu pages
     */
    function initSwipeGestures() {
        menuOverlay.addEventListener('touchstart', handleTouchStart, { passive: true });
        menuOverlay.addEventListener('touchmove', handleTouchMove, { passive: false });
        menuOverlay.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    function handleTouchStart(e) {
        if (currentLevel === 1) return;
        
        const touch = e.touches[0];
        swipeStartX = touch.clientX;
        swipeStartY = touch.clientY;
        isSwiping = false;
    }

    function handleTouchMove(e) {
        if (swipeStartX === null || swipeStartY === null) return;
        if (currentLevel === 1) return;
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - swipeStartX;
        const deltaY = touch.clientY - swipeStartY;
        
        // Check if horizontal swipe (more horizontal than vertical)
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
            isSwiping = true;
            e.preventDefault();
            
            const currentPage = submenuPages[submenuPages.length - 1];
            if (!currentPage) return;
            
            // For 3rd level pages (level >= 3), reverse swipe direction (right swipe = go back)
            // For 2nd level pages, keep left swipe (go back)
            if (currentLevel >= 3) {
                // Right swipe (deltaX > 0) = go back
                if (deltaX > 0) {
                    const swipeProgress = Math.min(Math.abs(deltaX) / 200, 1);
                    currentPage.style.transform = `translateX(${deltaX}px)`;
                    currentPage.style.opacity = (1 - swipeProgress * 0.5).toString();
                }
            } else {
                // Left swipe (deltaX < 0) = go back
                if (deltaX < 0) {
                    const swipeProgress = Math.min(Math.abs(deltaX) / 200, 1);
                    currentPage.style.transform = `translateX(${deltaX}px)`;
                    currentPage.style.opacity = (1 - swipeProgress * 0.5).toString();
                }
            }
        }
    }

    function handleTouchEnd(e) {
        if (!isSwiping || swipeStartX === null) {
            swipeStartX = null;
            swipeStartY = null;
            return;
        }
        
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - swipeStartX;
        
        const currentPage = submenuPages[submenuPages.length - 1];
        
        if (!currentPage) {
            swipeStartX = null;
            swipeStartY = null;
            isSwiping = false;
            return;
        }
        
        // For 3rd level pages (level >= 3), reverse swipe direction (right swipe = go back)
        // For 2nd level pages, keep left swipe (go back)
        if (currentLevel >= 3) {
            // Right swipe (deltaX > swipeThreshold) = go back
            if (deltaX > swipeThreshold) {
                goBack();
            } else {
                // Reset position
                currentPage.style.transform = '';
                currentPage.style.opacity = '';
            }
        } else {
            // Left swipe (deltaX < -swipeThreshold) = go back
            if (deltaX < -swipeThreshold) {
                goBack();
            } else {
                // Reset position
                currentPage.style.transform = '';
                currentPage.style.opacity = '';
            }
        }
        
        swipeStartX = null;
        swipeStartY = null;
        isSwiping = false;
    }

    // ============================================
    // Keyboard Navigation
    // ============================================
    /**
     * Setup keyboard navigation for menu items
     */
    function setupKeyboardNavigation(container, level) {
        const items = container.querySelectorAll('.menu-item');
        
        items.forEach((item, index) => {
            item.addEventListener('keydown', function(e) {
                let target;
                
                switch(e.key) {
                    case 'ArrowDown':
                        e.preventDefault();
                        target = items[index + 1] || items[0];
                        target.querySelector('.menu-link').focus();
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        target = items[index - 1] || items[items.length - 1];
                        target.querySelector('.menu-link').focus();
                        break;
                    case 'ArrowRight':
                        if (item.classList.contains('has-children')) {
                            e.preventDefault();
                            if (level === 1) {
                                const link = item.querySelector('.menu-link');
                                if (link) link.click();
                            } else {
                                const link = item.querySelector('.menu-link');
                                if (link) link.click();
                            }
                        }
                        break;
                    case 'ArrowLeft':
                    case 'Escape':
                        if (level > 1) {
                            e.preventDefault();
                            goBack();
                        }
                        break;
                    case 'Enter':
                    case ' ':
                        e.preventDefault();
                        const link = item.querySelector('.menu-link');
                        if (link) link.click();
                        break;
                    case 'Home':
                        e.preventDefault();
                        items[0].querySelector('.menu-link').focus();
                        break;
                    case 'End':
                        e.preventDefault();
                        items[items.length - 1].querySelector('.menu-link').focus();
                        break;
                }
            });
        });
    }

    // ============================================
    // Accessibility - Screen Reader Announcements
    // ============================================
    function announceNavigation(label, level) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Navigated to ${label} menu, level ${level}`;
        announcement.style.position = 'absolute';
        announcement.style.left = '-10000px';
        announcement.style.width = '1px';
        announcement.style.height = '1px';
        announcement.style.overflow = 'hidden';
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            announcement.remove();
        }, 1000);
    }

    // ============================================
    // Menu Toggle Functions
    // ============================================
    /**
     * Create close button for menu overlay
     */
    function createMenuCloseButton() {
        const closeButton = document.createElement('button');
        closeButton.className = 'menu-close-btn';
        closeButton.setAttribute('aria-label', 'Close menu');
        closeButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>`;
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu();
        });
        return closeButton;
    }

    /**
     * Toggle menu open/close state
     */
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Update ARIA attributes for accessibility
        if (hamburger) {
        hamburger.setAttribute('aria-expanded', isMenuOpen);
        }
        if (menuOverlay) {
        menuOverlay.setAttribute('aria-hidden', !isMenuOpen);
        }
        
        // Toggle classes for animations
        if (hamburger) {
        hamburger.classList.toggle('active', isMenuOpen);
        }
        if (menuOverlay) {
        menuOverlay.classList.toggle('active', isMenuOpen);
        }
        
        // Prevent body scroll when menu is open
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Add close button if it doesn't exist
            let closeButton = menuOverlay.querySelector('.menu-close-btn');
            if (!closeButton) {
                closeButton = createMenuCloseButton();
                menuOverlay.appendChild(closeButton);
            }
            // Render main menu if not already rendered
            if (menuContent && menuContent.children.length === 0) {
                renderMenu(menuData, menuContent, 1);
            }
            // Setup scroll indicators for main menu
            setTimeout(() => {
                updateScrollIndicators(menuContent);
                setupScrollListeners(menuContent);
            }, 300);
            // Focus first menu item for keyboard navigation
            setTimeout(() => {
                const firstItem = menuContent?.querySelector('.menu-link');
                if (firstItem) firstItem.focus();
            }, 300);
        } else {
            document.body.style.overflow = '';
            // Reset menu state
            resetMenuState();
        }
    }

    /**
     * Close menu and reset state
     */
    function closeMenu() {
        if (isMenuOpen) {
            toggleMenu();
        }
    }

    /**
     * Reset menu state when closing
     */
    function resetMenuState() {
        // Close all accordions
        document.querySelectorAll('.menu-item.has-children.active').forEach(item => {
            item.classList.remove('active');
            const dropdown = item.querySelector('.menu-dropdown');
            const dropdownIcon = item.querySelector('.menu-dropdown-icon');
            const link = item.querySelector('.menu-link');
            const iconWrapper = item.querySelector('.menu-icon-wrapper');
            if (dropdown) {
                dropdown.style.maxHeight = '0';
                dropdown.setAttribute('aria-hidden', 'true');
            }
            if (dropdownIcon) {
                dropdownIcon.classList.remove('active');
            }
            if (link) {
                link.setAttribute('aria-expanded', 'false');
            }
            if (iconWrapper) {
                iconWrapper.classList.remove('active');
            }
        });
        
        // Reset all icon active states (including 3rd level items)
        document.querySelectorAll('.menu-icon-wrapper.active').forEach(iconWrapper => {
            iconWrapper.classList.remove('active');
        });
        
        // Remove all submenu pages
        submenuPages.forEach(page => page.remove());
        submenuPages = [];
        navigationStack = [];
        currentLevel = 1;
    }

    // ============================================
    // Event Listeners - Hamburger Menu
    // ============================================
    if (hamburger && menuOverlay) {
        // Hamburger button click
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Close menu when clicking outside (on overlay background)
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                if (currentLevel > 1) {
                    goBack();
                } else {
                closeMenu();
                    if (hamburger) hamburger.focus();
                }
            }
        });
    }

    // Initialize swipe gestures
    initSwipeGestures();

    // ============================================
    // Active Page Highlighting
    // ============================================
    /**
     * Set active state for current page in bottom navigation
     */
    function setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Set active page on load
    setActivePage();

    // ============================================
    // Touch Event Handling & Micro-interactions
    // ============================================
    
    /**
     * Add touch feedback to interactive elements
     */
    function addTouchFeedback(element) {
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.opacity = '';
            }, 150);
        }, { passive: true });
    }

    // Apply touch feedback to navigation items
    navItems.forEach(item => {
        addTouchFeedback(item);
    });

    // Apply touch feedback to CTA button
    if (ctaButton) {
        addTouchFeedback(ctaButton);
        
        // CTA button click handler
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Navigate to contact page (or your desired action)
            window.location.href = 'contact.html';
        });
    }

    // ============================================
    // Page Transition Animation
    // ============================================
    /**
     * Fade in content on page load
     */
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(10px)';
        
        window.addEventListener('load', function() {
            requestAnimationFrame(() => {
                mainContent.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            });
        });
    }

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // Performance Optimization - Debounce Scroll
    // ============================================
    let scrollTimeout;
    function debounceScroll(callback, delay = 100) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(callback, delay);
    }

    // Optional: Add scroll-based effects here
    window.addEventListener('scroll', function() {
        debounceScroll(function() {
            // Add any scroll-based animations here if needed
        });
    }, { passive: true });

    // ============================================
    // Prevent iOS Safari Bounce Scroll
    // ============================================
    let lastTouchY = 0;
    
    // Initialize lastTouchY on touchstart
    document.addEventListener('touchstart', function(e) {
        if (e.touches && e.touches.length > 0) {
            lastTouchY = e.touches[0].clientY;
        }
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
        const touchY = e.touches[0].clientY;
        const touchYDelta = touchY - lastTouchY;
        const scrollableElement = e.target.closest('.content-area');
        
        if (scrollableElement) {
            const scrollTop = scrollableElement.scrollTop;
            const scrollHeight = scrollableElement.scrollHeight;
            const clientHeight = scrollableElement.clientHeight;
            
            // Prevent bounce at top
            if (scrollTop === 0 && touchYDelta > 0) {
                e.preventDefault();
            }
            
            // Prevent bounce at bottom
            if (scrollTop + clientHeight >= scrollHeight && touchYDelta < 0) {
                e.preventDefault();
            }
        }
        
        lastTouchY = touchY;
    }, { passive: false });

    // ============================================
    // Initialize
    // ============================================
    console.log('Mobile/Tablet Wireframe Template with Multi-Level Menu initialized');
})();
