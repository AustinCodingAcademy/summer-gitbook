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
      <a-scene>
        <a-sphere position="0 1.25 -5" color="red"></a-sphere>
        <a-box position="-1 0.5 -3" rotation="0 45 0" width="1" height="1" depth="1" color="blue"></a-box>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="yellow"></a-cylinder>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="green"></a-plane>
        <a-sky color="gray"></a-sky>
      </a-scene>
    </body>
  </html>
  ```


{% include "./footer.md" %}
