{% include "./header.md" %}

# WebVR 101

## What is WebVR?
> [WebVR](webvr.info) is an experimental JavaScript API that provides access to
  Virtual Reality devices, such as the Oculus Rift, HTC Vive, Samsung Gear VR,
  or Google Cardboard, in your browser.

## Where does WebVR work?
Anywhere with a modern browser! While you can view the Virtual Reality "scene"
on your desktop or computer, its interactivity really shines with the
devices mentioned above, and even on your smartphone!

## Where did it come from?

### WebGL (2009)
The platform for WebVR is the browser, such as Safari, Chrome, Firefox, etc. The
browser is only capable of reading three languages: HTML, CSS, and JavaScript.
Lately, most of the popular browsers have implemented a new JavaScript feature called
[WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API), which allows
your browser to render 2D and 3D scenes by tapping into your device hardware (think CPU,
RAM, etc).

### Three.js (2010)
WebGL was a huge feature for JavaScript, and [Three.js](https://threejs.org/),
among [others](https://en.wikipedia.org/wiki/Three.js#Overview), came along to
help developers build with the WebGL API more easily.

### A-Frame (2015)
From three.js, other projects sprouted up offering frameworks to further help
developers get more done with less effort. One such framework is
[A-Frame](https://aframe.io/), which we will be using today.

## Let's get to work

### 1. Project Setup
1. It's recommended to use a code editor such at [Atom](atom.io) for macOS or Windows, or [Caret](https://chrome.google.com/webstore/detail/caret/fljalecfjciodhpcledpamjachpmelml?hl=en) for Chromebooks.

1. Create a text file called `index.html` on your desktop.

1. Open it up with your code editor and paste this template into it.
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>My first WebVR Project!</title>
      <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
    </head>
    <body>

    </body>
  </html>
  ```

1. Open the file up in your browser. You should see a whole lot of nothing.

### 2. Let's build a `scene`

1. In your template, add as `<a-scene>` tag
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>My first WebVR Project!</title>
      <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
    </head>
    <body>
      <scene>

      </scene>
    </body>
  </html>
  ```
  Refresh your browser and now you should see a little pair of goggles. Good!

1. Baller, shot caller! Let's add a `<a-sphere>`
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>My first WebVR Project!</title>
      <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
    </head>
    <body>
      <a-scene>
        <a-sphere color="red"></a-sphere>
      </scene>
    </body>
  </html>
  ```
  Now refresh the the browser. AAnnndd we see..nothing! WTF? Try backing up with
  the arrow keys. The ball should come into view. We were standing on it!

### 3. Positioning
<img src="https://docs.google.com/drawings/d/1GlFDWXrL-MGIjP0w83-VKmJ8C_y0kcI53lONwQgXNvY/pub?w=536&amp;h=767">

The reason the ball started out under us was because we all start out at `position="0 0 0"`,
even shapes.



{% include "./footer.md" %}
