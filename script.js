/* Enhanced Portfolio CSS */
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --primary-light: #a5b4fc;
    --secondary-color: #06b6d4;
    --accent-color: #f43f5e;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
    
    --dark-color: #0f172a;
    --dark-light: #1e293b;
    --light-color: #ffffff;
    --light-gray: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-300: #cbd5e1;
    --gray-400: #94a3b8;
    --gray-500: #64748b;
    --gray-600: #475569;
    --gray-700: #334155;
    --gray-800: #1e293b;
    --gray-900: #0f172a;
    
    --text-color: #1e293b;
    --text-light: #64748b;
    --text-lighter: #94a3b8;
    
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-heading: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --gradient-dark: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    --border-radius: 0.5rem;
    --border-radius-lg: 1rem;
    --border-radius-xl: 1.5rem;
    
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::before,
*::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-primary);
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-color);
    overflow-x: hidden;
}

/* Loading Screen */
#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease-out;
}

#loading-screen.fade-out {
    opacity: 0;
    pointer-events: none;
}

.loader {
    width: 80px;
    height: 80px;
}

.loader-inner {
    position: relative;
    width: 100%;
    height: 100%;
}

.loader-line-wrap {
    animation: spin 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
}

.loader-line {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 3px;
    margin: -1px 0 0 -20px;
    background: white;
    border-radius: 2px;
    transform-origin: 50% 1px;
}

.loader-line-wrap:nth-child(1) { animation-delay: -50ms; }
.loader-line-wrap:nth-child(2) { animation-delay: -100ms; }
.loader-line-wrap:nth-child(3) { animation-delay: -150ms; }
.loader-line-wrap:nth-child(4) { animation-delay: -200ms; }
.loader-line-wrap:nth-child(5) { animation-delay: -250ms; }

@keyframes spin {
    0%, 15% { transform: rotate(0); }
    25%, 35% { transform: rotate(90deg); }
    45%, 55% { transform: rotate(180deg); }
    65%, 75% { transform: rotate(270deg); }
    85%, 100% { transform: rotate(360deg); }
}

/* Particle Background */
#particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
}

/* Utility Classes */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.section {
    padding: 6rem 0;
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--primary-light);
    color: var(--primary-color);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: var(--border-radius);
    margin-bottom: 1rem;
}

.section-tag.light {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

.section-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    margin-bottom: 1rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-title.light {
    color: white;
    -webkit-text-fill-color: white;
}

.section-subtitle {
    font-size: 1.125rem;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
}

.section-subtitle.light {
    color: rgba(255, 255, 255, 0.8);
}

.bg-light {
    background-color: var(--light-gray);
}

.bg-dark {
    background: var(--gradient-dark);
    color: white;
}

.bg-gradient {
    background: var(--gradient-primary);
    color: white;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-family: var(--font-primary);
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

.btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
}

.btn-outline {
    background: transparent;
    color: var(--text-color);
    border: 2px solid var(--gray-300);
}

.btn-outline:hover {
    background: var(--text-color);
    color: white;
    border-color: var(--text-color);
}

.btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
}

.btn-large {
    padding: 1rem 2rem;
    font-size: 1rem;
}

.btn-animated {
    overflow: hidden;
    position: relative;
}

.btn-animated span {
    position: relative;
    z-index: 1;
    transition: var(--transition);
}

.btn-animated i {
    position: relative;
    z-index: 1;
    transition: var(--transition);
}

.btn-animated:hover span {
    transform: translateX(-4px);
}

.btn-animated:hover i {
    transform: translateX(4px);
}

/* Glassmorphism Effect */
.glassmorphism {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Navigation */
#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);
    z-index: 1000;
    transition: var(--transition);
}

#navbar.scrolled {
    padding: 0.5rem 0;
    box-shadow: var(--shadow);
}

#navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo-initial {
    width: 40px;
    height: 40px;
    background: var(--gradient-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-weight: 700;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;
    transition: var(--transition);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-link:hover {
    color: var(--primary-color);
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.bar {
    width: 25px;
    height: 3px;
    background: var(--text-color);
    border-radius: 2px;
    transition: var(--transition);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-bg-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.shape {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    animation: float 20s infinite ease-in-out;
}

.shape-1 {
    width: 200px;
    height: 200px;
    background: white;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.shape-2 {
    width: 300px;
    height: 300px;
    background: white;
    top: 60%;
    right: 10%;
    animation-delay: -5s;
}

.shape-3 {
    width: 150px;
    height: 150px;
    background: white;
    bottom: 20%;
    left: 60%;
    animation-delay: -10s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-30px) rotate(120deg); }
    66% { transform: translateY(30px) rotate(240deg); }
}

.hero .container {
    position: relative;
    z-index: 2;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    color: white;
}

.greeting {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
}

.gradient-text {
    background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    min-height: 60px;
    color: rgba(255, 255, 255, 0.9);
}

.hero-description {
    font-size: 1.125rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.hero-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    color: white;
}

.stat-label {
    font-size: 0.875rem;
    opacity: 0.8;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.social-preview {
    display: flex;
    gap: 1rem;
}

.social-link {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-container {
    position: relative;
    width: 350px;
    height: 350px;
}

.image-backdrop {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 1;
}

.placeholder-image {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    border: 4px solid rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 1;
}

.placeholder-image i {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.floating-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius);
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
    animation: floatCard 6s ease-in-out infinite;
}

.card-1 {
    top: 10%;
    right: -10%;
    animation-delay: 0s;
}

.card-2 {
    bottom: 30%;
    left: -15%;
    animation-delay: 2s;
}

.card-3 {
    top: 50%;
    right: -20%;
    animation-delay: 4s;
}

@keyframes floatCard {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    animation: bounce 2s infinite;
}

.scroll-text {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
}

.scroll-arrow {
    font-size: 1.5rem;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

/* About Section */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
}

.text-highlight h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.text-highlight p {
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-light);
}

.achievement-highlights {
    margin-top: 2rem;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: var(--light-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
}

.highlight-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.highlight-item i {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-size: 1.25rem;
}

.highlight-item h4 {
    font-family: var(--font-heading);
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: var(--text-color);
}

.highlight-item p {
    color: var(--text-light);
    font-size: 0.875rem;
}

.about-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.detail-card {
    background: white;
    border-radius: var(--border-radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.detail-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.card-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

.detail-card h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

.education-item {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--gray-200);
}

.education-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.education-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.education-header h4 {
    font-weight: 600;
    color: var(--text-color);
}

.year {
    background: var(--primary-light);
    color: var(--primary-color);
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: 500;
}

.institution {
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.gpa {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
}

.interests-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.interest-tag {
    background: var(--gray-100);
    color: var(--text-color);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;
    transition: var(--transition);
}

.interest-tag:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
}

/* Experience Section */
.experience-timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.experience-timeline::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
}

.timeline-item {
    position: relative;
    padding-left: 80px;
    margin-bottom: 3rem;
}

.timeline-marker {
    position: absolute;
    left: 0;
    top: 0;
}

.marker-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.25rem;
    box-shadow: var(--shadow);
    position: relative;
    z-index: 1;
}

.timeline-content {
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-lg);
    padding: 2rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: var(--transition);
}

.timeline-content:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.timeline-date {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    font-size: 0.9rem;
}

.timeline-status {
    background: var(--gradient-secondary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: 600;
}

.timeline-content h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
}

.timeline-content h4 {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    margin-bottom: 1.5rem;
}

.timeline-description ul {
    list-style: none;
    margin-bottom: 1.5rem;
}

.timeline-description li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
}

.timeline-description li::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: var(--secondary-color);
    font-size: 0.8rem;
}

.skills-used {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.skill-pill {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.project-card {
    background: white;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.project-card.featured {
    border: 2px solid var(--primary-color);
}

.project-image {
    height: 200px;
    overflow: hidden;
    position: relative;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.project-card:hover .project-overlay {
    opacity: 0.9;
}

.overlay-content {
    text-align: center;
    color: white;
    transform: translateY(20px);
    transition: var(--transition);
}

.project-card:hover .overlay-content {
    transform: translateY(0);
}

.overlay-content i {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.overlay-content p {
    font-size: 1.125rem;
    font-weight: 600;
}

.project-info {
    padding: 2rem;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.project-info h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
    line-height: 1.3;
    flex: 1;
}

.featured-badge {
    background: var(--gradient-primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 1rem;
}

.project-info p {
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.project-impact {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.impact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--success-color);
    font-size: 0.875rem;
    font-weight: 500;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.project-tags span {
    background: var(--gray-100);
    color: var(--text-color);
    padding: 0.25rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    font-weight: 500;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.more-projects {
    text-align: center;
}

/* Skills Section */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.skill-category {
    background: white;
    border-radius: var(--border-radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.skill-category:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.category-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-size: 1.25rem;
}

.category-header h3 {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-color);
}

.skill-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.skill-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
}

.skill-name {
    font-weight: 500;
    color: var(--text-color);
}

.skill-level {
    flex: 1;
    height: 8px;
    background: var(--gray-200);
    border-radius: 4px;
    margin-left: 1rem;
    overflow: hidden;
}

.skill-bar {
    height: 100%;
    background: var(--gradient-primary);
    border-radius: 4px;
    width: 0;
    transition: width 1s ease-in-out;
}

.skill-item.expert .skill-bar { background: var(--gradient-primary); }
.skill-item.advanced .skill-bar { background: var(--gradient-secondary); }
.skill-item.intermediate .skill-bar { background: var(--gradient-accent); }

/* Contact Section */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
}

.contact-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-lg);
    padding: 2rem;
    color: white;
}

.contact-header h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.contact-header p {
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.contact-methods {
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item:last-child {
    border-bottom: none;
}

.contact-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-size: 1.25rem;
}

.contact-details h4 {
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.contact-details p {
    opacity: 0.8;
    margin-bottom: 0.5rem;
}

.contact-link {
    color: var(--secondary-color);
    text-decoration: none;
    font-size: 0.875rem;
    transition: var(--transition);
}

.contact-link:hover {
    color: white;
}

.social-connect h4 {
    font-weight: 600;
    margin-bottom: 1rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links .social-link {
    flex: 1;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: var(--transition);
    font-size: 0.875rem;
    font-weight: 500;
}

.social-links .social-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.social-links .linkedin:hover { background: #0077b5; }
.social-links .github:hover { background: #333; }
.social-links .email:hover { background: var(--danger-color); }

.contact-form-wrapper {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-lg);
    padding: 2rem;
}

.form-header {
    margin-bottom: 2rem;
    color: white;
}

.form-header h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.form-header p {
    opacity: 0.8;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    position: relative;
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    color: white;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem 0;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-family: var(--font-primary);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-bottom-color: white;
}

.form-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
}

.form-group input:focus + .form-line,
.form-group textarea:focus + .form-line {
    width: 100%;
}

/* Footer */
.footer {
    background: var(--gray-900);
    color: white;
    padding: 2rem 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-text p {
    margin-bottom: 0.5rem;
    opacity: 0.8;
}

.footer-text i {
    color: var(--danger-color);
}

.footer-links {
    display: flex;
    gap: 2rem;
}

.footer-links a {
    color: white;
    text-decoration: none;
    opacity: 0.8;
    transition: var(--transition);
}

.footer-links a:hover {
    opacity: 1;
    color: var(--primary-color);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-content,
    .about-content,
    .contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .hero-stats {
        justify-content: center;
    }
    
    .cta-buttons {
        justify-content: center;
    }
    
    .social-preview {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-links {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 2rem;
        transition: left 0.3s ease;
    }
    
    .nav-links.active {
        left: 0;
    }
    
    .nav-links li {
        margin: 1rem 0;
    }
    
    .hero {
        padding: 6rem 0 2rem;
    }
    
    .hero-content {
        text-align: center;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 1rem;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .section {
        padding: 4rem 0;
    }
    
    .timeline-item {
        padding-left: 60px;
    }
    
    .experience-timeline::before {
        left: 20px;
    }
    
    .marker-icon {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .skills-container {
        grid-template-columns: 1fr;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .footer-links {
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 1rem;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1.25rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .timeline-item {
        padding-left: 40px;
    }
    
    .experience-timeline::before {
        left: 10px;
    }
    
    .marker-icon {
        width: 30px;
        height: 30px;
        font-size: 0.875rem;
    }
}
