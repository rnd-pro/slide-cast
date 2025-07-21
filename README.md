# SlideCast

Web presentation tool with video recording included.

## Features

- Slideshow / Presentation
- Whiteboard (drawing)
- Screencast recording

## Purpose

- Create videos for YouTube, LinkedIn, TikTok, Instagram, etc.
- Make presentations
- Online meetups & webinars

## App Connection

```html
<script src="https://cdn.jsdelivr.net/npm/slide-cast/index.js/+esm" type="module"></script>
```

## Presentation Markup Example

### Using Markdown files:
```html
<slide-it caption="First Slide" import-md="/slides/first.md"></slide-it>
<slide-it caption="Second Slide" import-md="/slides/second.md"></slide-it>
<slide-it caption="Third Slide" import-md="/slides/third.md"></slide-it>
<video-spot></video-spot>
<common-toolbar></common-toolbar>
```

### Using JSDWA files:
```html
<slide-it caption="First Slide" import-jsdwa="/slides/first.html.js"></slide-it>
<slide-it caption="Second Slide" import-jsdwa="/slides/second.html.js"></slide-it>
<slide-it caption="Third Slide" import-jsdwa="/slides/third.html.js"></slide-it>
<video-spot></video-spot>
<common-toolbar></common-toolbar>
```

> What is JSDWA? <br><br>JSDWA - are JavaScript modules that have a default export (ESM) of string type. That string can represent any of text-based web asset, such us HTML, CSS, SVG etc.

### Using automatic slide generation:
```html
<group-from source="./my_presentation.md"></group-from>
<video-spot></video-spot>
<common-toolbar></common-toolbar>
```
Markdown file example:
```markdown
## First Slide Caption

Slide content...

---

## Second Slide Caption

- List item 1
- List item 2
- List item 3
```

## `<slide-it>` tag details

`<slide-it>` is a tag that allows you to create a slide in the presentation.

### Attributes

- `caption` - the caption of the slide
- `import-md` - the path to the markdown file that contains the slide content
- `import-jsdwa` - the path to the JavaScript Distributed Web Asset file that exports the slide content

### Direct inner content

```html
<slide-it caption="First Slide">
  <p>This is the first slide</p>
</slide-it>
```

## `<group-from>` tag details

### Attributes

- `sources` - path to the markdown file (generation source)

## `<video-spot>` tag details

This tag is used to add video circle (web-camera view) to the presentation view.

## `<common-toolbar>` tag details

This tag adds common control elements to your presentation.

## License

MIT

## Authors

rnd-pro.com (team@rnd-pro.com)
