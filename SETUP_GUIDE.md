# Quick Setup Guide

## 🎯 5-Minute Quick Start

### Step 1: Replace Your Information

1. Open `index.html` in a text editor
2. Find and replace:
   - "Anitah Wairimu" → Your Name
   - "anitah@example.com" → Your Email
   - "+1234567890" → Your Phone
   - Social media links with your profiles

### Step 2: Add Your Profile Image

1. Add your photo to the `images/` folder
2. Name it `profile.jpg` (or update the src in HTML)
3. Recommended size: 400x400px or larger

### Step 3: Update Projects

In the Projects section, edit:

- Project title
- Description
- Technologies (tech-tag)
- GitHub links
- Live demo links
- Project images

### Step 4: Open & Test

1. Double-click `index.html` to open in browser
2. Test on mobile (responsive design)
3. Try dark mode toggle
4. Click around to test animations

## 🎨 Color Customization (5 minutes)

Open `css/style.css` and find the `:root` section. Change these colors:

```css
:root {
  --primary-color: #6366f1; /* Change this */
  --secondary-color: #ec4899; /* Change this */
  --accent-color: #f59e0b; /* Change this */
}
```

**Quick Color Palettes:**

**Purple Theme (Current):**

```css
--primary-color: #6366f1;
--secondary-color: #ec4899;
--accent-color: #f59e0b;
```

**Blue Theme:**

```css
--primary-color: #3b82f6;
--secondary-color: #06b6d4;
--accent-color: #fbbf24;
```

**Green Theme:**

```css
--primary-color: #10b981;
--secondary-color: #6366f1;
--accent-color: #f59e0b;
```

**Red/Pink Theme:**

```css
--primary-color: #ef4444;
--secondary-color: #f97316;
--accent-color: #fbbf24;
```

## 📝 Content Sections to Update

### In `index.html`:

1. **Hero Section** (Line ~80-120)

   ```html
   <h1 class="hero-name">Your Name</h1>
   <p class="hero-subtitle">Your subtitle</p>
   ```

2. **About Section** (Line ~200-250)
   - Update bio text
   - Update statistics numbers

3. **Skills Section** (Line ~320-390)
   - Add/remove skill cards
   - Update skill names and progress bars

4. **Projects Section** (Line ~430-580)
   - Update project titles, descriptions
   - Update project-tech tags

5. **Contact Section** (Line ~850-920)
   - Update email
   - Update phone
   - Update location
   - Update social links

### In `css/style.css`:

- **Colors**: `:root` section (Line 1-20)
- **Fonts**: `body` section (Line ~50-60)
- **Animation Speed**: Find `--transition` (Line ~10)
- **Shadows**: Find `--shadow` (Line ~15-20)

## 🖼️ Image Setup

### Required Images:

1. **Profile Picture** (`images/profile.jpg`)
   - Size: 400x400px or larger
   - Format: JPG, PNG, or WebP
   - Quality: High resolution

2. **Project Images** (4 images for projects)
   - `images/project1.jpg`
   - `images/project2.jpg`
   - `images/project3.jpg`
   - `images/project4.jpg`
   - Size: 600x400px or 800x600px
   - Format: JPG or WebP

3. **Featured Project** (3 images)
   - `images/featured1.jpg`
   - `images/featured2.jpg`
   - `images/featured3.jpg`
   - Size: 800x600px or 1200x800px

### How to Optimize Images:

1. **Online Tools** (Free):
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim.com

2. **Desktop Tools**:
   - Adobe Photoshop
   - GIMP (Free)
   - ImageMagick (CLI)

3. **Target Sizes**:
   - Profile: < 200KB
   - Projects: < 300KB each
   - Featured: < 500KB each

## ✅ Testing Checklist

- [ ] Dark mode toggle works
- [ ] Smooth scrolling between sections
- [ ] Mobile menu opens/closes
- [ ] All links are correct
- [ ] Images load properly
- [ ] Form validation works
- [ ] Typing animation displays
- [ ] Animations are smooth
- [ ] Mobile view is responsive
- [ ] No console errors (F12 → Console)

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free, 10 minutes)

1. Create GitHub account
2. Create new repository "username.github.io"
3. Upload portfolio files
4. Enable GitHub Pages in settings
5. Your site: https://username.github.io

### Option 2: Netlify (Free, 5 minutes)

1. Go to Netlify.com
2. Drag & drop portfolio folder
3. Done! Auto-generated URL
4. Add custom domain later

### Option 3: Your Own Server

1. Upload files via FTP
2. Access via your domain
3. Keep files updated

## 🔧 Troubleshooting

### Images not showing?

- Check file path matches image names
- Verify images are in `images/` folder
- Check file extensions (.jpg, .png)
- Try browser cache clear (Ctrl+Shift+Delete)

### Dark mode not working?

- Check browser allows localStorage
- Clear browser cache
- Check browser console for errors (F12)

### Form not submitting?

- Currently logs to console (F12 → Console)
- To make it functional, integrate:
  - EmailJS
  - Formspree
  - Backend API

### Animations not smooth?

- Update `--transition` speed in CSS
- Reduce animation complexity on older devices
- Check browser GPU acceleration enabled

### Links not working?

- Verify URLs include `https://`
- Check email format: `mailto:email@example.com`
- Test each link individually

## 📱 Mobile Optimization

The portfolio is mobile-first, but you can enhance it:

1. **Test on real device**:
   - Use phone hotspot
   - Share local IP: http://192.168.x.x:8000

2. **Use DevTools**:
   - Press F12
   - Click device icon (mobile view)
   - Test at different screen sizes

3. **Optimize images**:
   - Images should be < 1MB total
   - Use srcset for different sizes
   - Compress aggressively

## 💡 Pro Tips

1. **Add Google Analytics**:

   ```html
   <!-- Add to <head> -->
   <script
     async
     src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
   ></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag("js", new Date());
     gtag("config", "GA_ID");
   </script>
   ```

2. **Add Favicon**:

   ```html
   <!-- Add to <head> -->
   <link rel="icon" type="image/x-icon" href="favicon.ico" />
   ```

3. **Add Sitemap** (for SEO):
   - Create `sitemap.xml`
   - Submit to Google Search Console

4. **SSL Certificate**:
   - Use https (Netlify/GitHub does this automatically)
   - Better for SEO and security

## 📞 Common Questions

**Q: Can I use this commercially?**
A: Yes! This is your portfolio, use it freely.

**Q: Can I modify the code?**
A: Absolutely! Customize everything to your needs.

**Q: Does it need a backend?**
A: No! It's 100% frontend. For contact forms, integrate with services like EmailJS.

**Q: How do I update content?**
A: Edit HTML and CSS files directly. No build process needed!

**Q: Can I add animations?**
A: Yes! All CSS animations can be customized. Check the animation names in style.css.

**Q: Is it SEO friendly?**
A: Yes! It includes semantic HTML, meta tags, and responsive design. Submit to search engines for better ranking.

---

**Ready to launch?** 🚀

1. Customize your info
2. Add your images
3. Test everything
4. Deploy to GitHub Pages / Netlify
5. Share your portfolio!

Need more help? Check README.md for detailed customization guide.
