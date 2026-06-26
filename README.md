# Anitah Wairimu - Personal Portfolio Website

A modern, fully responsive portfolio website built with **HTML5, CSS3, and vanilla JavaScript**. Features glassmorphism design, dark mode, smooth animations, and all the essential sections for showcasing your professional work.

## 🌟 Features

### Core Features

- ✨ **Responsive Design** - Mobile-first approach, works perfectly on all devices
- 🎨 **Dark/Light Mode** - Toggle between themes with persistent storage
- 🔤 **Typing Animation** - Animated role/title effect on hero section
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 🎪 **Particle Animation** - Animated background particles
- 💫 **Scroll Animations** - Elements appear as you scroll down
- 📊 **Animated Counters** - Statistics that count up when visible
- 🎬 **Custom Cursor** - Unique cursor effects
- ⬆️ **Back-to-Top Button** - Smooth return to top
- 📱 **Hamburger Menu** - Mobile navigation with smooth toggle

### Sections

1. **Hero Section** - Full-screen landing with typing animation
2. **Navigation Bar** - Sticky navbar with active link highlighting
3. **About Me** - Professional bio with statistics
4. **Skills Section** - Skill cards with animated progress bars
5. **Projects Section** - Filterable project cards with hover effects
6. **Featured Project** - Detailed showcase of Smart Queue Management System
7. **Experience & Education Timeline** - Vertical animated timeline
8. **Services Section** - Services offered with glassmorphism cards
9. **Testimonials Section** - Automated slider with navigation
10. **Contact Section** - Contact form with validation
11. **Footer** - Professional footer with links

### Advanced JavaScript Features

- Form validation with error messages
- Project filtering by category
- Testimonial slider with auto-play
- Animated progress bars
- Keyboard navigation support
- Image lazy loading
- Performance optimization with debouncing

### Design Features

- 🌈 **Glassmorphism Effects** - Modern glass-like transparency
- 🎯 **Gradient Backgrounds** - Beautiful gradient color combinations
- 🔍 **Soft Shadows** - Subtle shadow effects for depth
- 📐 **Rounded Corners** - Modern rounded design elements
- 🎭 **Professional Typography** - Clean, readable fonts
- ✨ **Elegant Spacing** - Proper spacing and alignment

## 📁 Project Structure

```
portfolio/
│
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # All styling and animations
├── js/
│   └── script.js             # All interactive JavaScript
├── images/
│   ├── profile.jpg           # Your profile picture
│   ├── project1.jpg          # Project images
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── featured1.jpg         # Featured project images
│   ├── featured2.jpg
│   └── featured3.jpg
└── assets/                   # Additional assets folder
```

## 🚀 Getting Started

### 1. Basic Setup

Clone or download this portfolio and open `index.html` in your browser. No build tools or dependencies required!

### 2. Customization

#### Update Your Information

**Hero Section (index.html):**

```html
<h1 class="hero-name">Your Name</h1>
```

**About Section:**

- Update the bio text
- Modify the statistics numbers
- Update education and experience

**Projects Section:**

- Replace project titles and descriptions
- Update technology tags
- Add your GitHub and live demo links

**Contact Information:**

```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

**Social Media Links:**
Update all social media links throughout the website:

```html
<a href="https://github.com/yourprofile" class="social-icon">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" class="social-icon">LinkedIn</a>
```

#### Add Your Images

Place your images in the `images/` folder:

1. **Profile Picture** - Replace `profile.jpg` (recommended: 300x300px or larger)
2. **Project Images** - Add up to 4 project images (recommended: 600x400px)
3. **Featured Project** - Add 3 images for the featured project showcase

**Image Optimization Tips:**

- Use WebP format when possible for better compression
- Compress images using tools like TinyPNG or Squoosh
- Recommended sizes:
  - Profile: 400x400px minimum
  - Projects: 800x600px minimum
  - Featured gallery: 1200x800px minimum

#### Modify Colors (CSS)

Edit the CSS variables in `css/style.css`:

```css
:root {
  /* Colors - Light Mode */
  --primary-color: #6366f1; /* Main color */
  --secondary-color: #ec4899; /* Accent color */
  --accent-color: #f59e0b; /* Highlight color */
  --bg-color: #ffffff; /* Background */
  --text-color: #1f2937; /* Text */
  --text-secondary: #6b7280; /* Secondary text */
}
```

#### Add More Projects

Add new project cards to the HTML:

```html
<div class="project-card glass" data-category="web" data-aos="fade-up">
  <div class="project-image">
    <img src="images/projectX.jpg" alt="Project Name" />
    <div class="project-overlay">
      <a href="#" class="project-link" title="GitHub">GitHub</a>
      <a href="#" class="project-link" title="Live Demo">Live Demo</a>
    </div>
  </div>
  <div class="project-info">
    <h3>Project Name</h3>
    <p>Project description goes here.</p>
    <div class="project-tech">
      <span class="tech-tag">Technology 1</span>
      <span class="tech-tag">Technology 2</span>
    </div>
  </div>
</div>
```

#### Update Timeline Events

Edit the experience section:

```html
<div class="timeline-item" data-aos="fade-up">
  <div class="timeline-marker"></div>
  <div class="timeline-content-item glass">
    <span class="timeline-year">YYYY - YYYY</span>
    <h3>Position/Education</h3>
    <p class="timeline-subtitle">Company/University Name</p>
    <p>Description of the experience or achievement.</p>
  </div>
</div>
```

#### Update Testimonials

Add testimonials in the testimonials section:

```html
<div class="testimonial-card glass">
  <div class="testimonial-header">
    <div class="testimonial-avatar">AB</div>
    <div class="testimonial-info">
      <h4>Person Name</h4>
      <p>Their Title/Position</p>
    </div>
  </div>
  <p class="testimonial-text">"Their testimonial about your work..."</p>
  <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
</div>
```

## 🎨 Customization Guide

### Changing Fonts

Edit the font-family in `css/style.css`:

```css
body {
  font-family: "Your Font", sans-serif;
}
```

Recommended fonts:

- `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` (Current)
- `'Poppins', sans-serif`
- `'Inter', sans-serif`
- `'Roboto', sans-serif`

### Animation Speed

Modify animation durations in CSS variables:

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 0.3s = speed */
--transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

### Removing Features

To disable certain features, comment out the relevant JavaScript in `js/script.js`:

```javascript
// Disable custom cursor:
// const cursor = document.querySelector('.cursor');

// Disable dark mode:
// themeToggle.addEventListener('click', () => {...})

// Disable particles:
// createParticles();
```

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Optimization

The portfolio includes several optimization features:

- Lazy image loading
- Debounced scroll events
- CSS animations (GPU-accelerated)
- Minimal JavaScript
- No external dependencies
- Optimized file sizes

**Performance Tips:**

1. Compress images before uploading
2. Use CDN for images if hosting large files
3. Minify CSS and JavaScript for production
4. Enable gzip compression on your server

## 🌐 Deployment

### Deploy to GitHub Pages

```bash
# 1. Create a GitHub repository
# 2. Push your portfolio files
# 3. Go to Settings → Pages
# 4. Set source to main branch
# 5. Your site will be available at username.github.io
```

### Deploy to Netlify

1. Drag and drop the `portfolio` folder to Netlify
2. Connect your GitHub repository for automatic deployments
3. Custom domain available in settings

### Deploy to Your Web Host

Simply upload all files to your web hosting server via FTP or file manager.

## 📧 Contact Form

The contact form currently logs submissions to the browser console. To make it functional:

### Option 1: EmailJS Integration

```javascript
// Add to script.js
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs.sendForm("service_id", "template_id", contactForm).then(() => {
    // Success handling
  });
});
```

### Option 2: Formspree Integration

```html
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  class="contact-form"
>
  <!-- form fields -->
</form>
```

### Option 3: Backend API

Integrate with your own backend server to handle form submissions.

## 🎯 SEO Optimization

The portfolio includes:

- Semantic HTML5 structure
- Meta tags for description and keywords
- Open Graph tags (ready to add)
- Structured data (ready to add)
- Mobile-friendly design
- Fast loading times

### Enhance SEO:

Add to `<head>`:

```html
<meta property="og:title" content="Anitah Wairimu - Portfolio" />
<meta property="og:description" content="Software Developer & Web Developer" />
<meta property="og:image" content="images/profile.jpg" />
<link rel="canonical" href="https://yourwebsite.com" />
```

## ♿ Accessibility

The portfolio follows accessibility best practices:

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators for keyboard users

## 📝 License

This portfolio template is free to use and modify for personal projects.

## 🤝 Support

For issues or questions:

1. Check the inline code comments
2. Review the customization guide above
3. Ensure all image paths are correct
4. Verify all links are properly formatted

## 💡 Tips for Success

1. **Keep it Updated** - Add new projects regularly
2. **Quality Images** - Use high-quality images
3. **Regular Backups** - Keep backups of your portfolio
4. **Monitor Performance** - Test on different devices
5. **Get Feedback** - Share with peers and get constructive feedback
6. **Mobile First** - Always test on mobile devices
7. **Content Quality** - Write clear, professional descriptions
8. **Links Active** - Ensure all social links work

## 🚀 Future Enhancements

Consider adding:

- Blog section
- PDF resume download
- Real contact form integration
- CMS integration
- Multi-language support
- 3D elements or interactive features
- Video background
- Live chat support

## 📞 Quick Reference

### Common Customizations Checklist

- [ ] Replace `index.html` content with your information
- [ ] Add your profile image to `images/profile.jpg`
- [ ] Update project images and descriptions
- [ ] Add your social media links
- [ ] Customize color scheme in CSS variables
- [ ] Update testimonials
- [ ] Modify timeline/experience section
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Deploy to web hosting

---

**Created with ❤️ for Anitah Wairimu**

Enjoy your professional portfolio! 🎉
