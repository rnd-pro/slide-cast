# 🎬 SlideCast

**Create stunning presentations with built-in video recording!** 

SlideCast is a modern web presentation tool that lets you build beautiful slideshows while recording yourself presenting. Perfect for content creators, educators, and anyone who wants to make engaging video presentations.

Live example: https://rnd-pro.com/presentations/slide-cast/

## ✨ What Can You Do?

- 📽️ **Interactive Slideshows** - Build dynamic presentations with ease
- 🎨 **Digital Whiteboard** - Draw and annotate directly on your slides
- 📹 **Built-in Recording** - Capture your presentation with webcam overlay
- 🚀 **Web-based** - No downloads needed, works in any modern browser

## 🎯 Perfect For

- 🎥 Creating videos for **YouTube, LinkedIn, TikTok, Instagram**
- 📊 Business presentations and pitches
- 🎓 Educational content and tutorials
- 💼 Online meetups, webinars, and demos

## 🚀 Quick Start

Add SlideCast to your project with just one line:

```html
<script src="https://cdn.jsdelivr.net/npm/slide-cast/index.js/+esm" type="module"></script>
```

## 📖 How to Create Presentations

### 📝 Method 1: Using Markdown Files

Perfect for text-heavy presentations:

```html
<slide-it caption="Welcome to Our Product" import-md="/slides/intro.md"></slide-it>
<slide-it caption="Key Features" import-md="/slides/features.md"></slide-it>
<slide-it caption="Get Started Today" import-md="/slides/cta.md"></slide-it>
<video-spot></video-spot>
<common-toolbar></common-toolbar>
```

### 💻 Method 2: Using JSDA Files

For more advanced, interactive content:

```html
<slide-it caption="Interactive Demo" import-jsda="/slides/demo.html.js"></slide-it>
<slide-it caption="Live Charts" import-jsda="/slides/charts.html.js"></slide-it>
<slide-it caption="Thank You!" import-jsda="/slides/outro.html.js"></slide-it>
<video-spot></video-spot>
<common-toolbar></common-toolbar>
```

> **What's JSDA?** 🤔  
> [JSDA](https://github.com/rnd-pro/jsda) (JavaScript Distributed Assets) are simple JavaScript modules that export web content as strings. Think of them as reusable components for HTML, CSS, SVG, or any text-based web content!

### ⚡ Method 3: Auto-Generate from Markdown

The fastest way to create presentations:

```html
<group-from source="./my-awesome-presentation.md"></group-from>
<video-spot></video-spot>
<common-toolbar></common-toolbar>
```

Your markdown file structure:
```markdown
## Welcome Slide

This is my opening slide with some great content!

---

## Main Points

- First important point
- Second key insight  
- Third amazing feature

---

## Questions?

Thanks for watching! Let's discuss.
```

## 🔧 Component Reference

### `<slide-it>` - Your Slide Builder

Creates individual slides in your presentation.

**Attributes:**
- `caption` - The title shown in your slide navigation
- `import-md` - Path to a Markdown file containing slide content
- `import-jsda` - Path to a JavaScript module exporting slide content
- `slide-number` - Manual slide number setting (can be empty)
- `hide-video-spot` - Hides Video Spot circle when certain slide is in focus

**Inline Content:**
```html
<slide-it caption="About Us">
  <h2>Our Story</h2>
  <p>We started this journey to make presentations more engaging...</p>
</slide-it>
```

### `<group-from>` - Bulk Slide Generator

**Attributes:**
- `source` - Path to the Markdown file used for automatic slide generation

### `<video-spot>` - Webcam Integration

Adds a sleek video circle showing your webcam feed during presentations. Perfect for that personal touch!

### `<common-toolbar>` - Presentation Controls

Provides all the essential controls you need - navigation, recording buttons, and more.

## 🎨 Pre-drawing Feature

Want to prepare some drawings beforehand? You can create slide artwork and save it as a permanent drawing layer:

```html
<slide-it caption="Architecture Overview">
  <img src="./system-diagram.png" pre-drawing>
  <h2>How Our System Works</h2>
  <p>Here's the technical overview...</p>
</slide-it>
```

Just draw on your slide, right-click to save the image, and reference it with the `pre-drawing` attribute!

## Styling

Use regular CSS to customize application elements:

```html
<style>
  :root {
    --clr-1: #899abc;
    --clr-2: #000;
  }
  slide-it {
    border-radius: 2px;
  }
  /* etc... */
</style>
```

## 📄 License

MIT - Feel free to use SlideCast in your projects!

## 👥 Created By

**rnd-pro.com** team (team@rnd-pro.com)

---

**Ready to create amazing presentations?** Start building with SlideCast today! 🚀
