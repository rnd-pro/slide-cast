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

```html
<slide-it caption="First Slide" import-md="/slides/first.md"></slide-it>
<slide-it caption="Second Slide" import-md="/slides/second.md"></slide-it>
<slide-it caption="Third Slide" import-md="/slides/third.md"></slide-it>
<video-spot></video-spot>
<common-toolbar></common-toolbar>
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

## License

MIT

## Authors

rnd-pro.com (team@rnd-pro.com)
