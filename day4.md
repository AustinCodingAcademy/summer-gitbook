{% include "./header.md" %}

## Day 4

### Objectives
* Students will deploy their website using Git and Github. 

### Agenda
* Deployment

### Website Build

1. Keep working on your website!
1. Use CSS to make your website visually appealing. 

### The 5 Types of Selectors
<!-- Give them our writting of the subject then link to a few articles: Medium, Wikipedia, CSS-Tricks, W3S, MozillaDev, etc... that help give more perspective on the subject  -->

**There are five types of selectors**

  * _types_ - This is the element on the document, i.e. ```<p></p>, <h4></h4>, <div></div>, <section></section>``` and so on.
  * _ids_ - This is added inside the element's opening tag and denoted with a "#". ```html <article id="element_ID"> text goes here </article>```
  * _classes_  - This is denoted by the keyword: class="someClassNameHere" ```html <article class="element_class"> text goes here </article>```
  * _attributes_ - ```<input disabled >``` For a full list of [html attributes](https://www.w3schools.com/html/html_attributes.asp).
  * _pseudo-classes_ are selectors used on an element when something is done to them like when you hover over an element with your cursor: ```:hover { }``` 

#### Type Selectors
The `type selector` simply selects any element specified by its type. Unless you modify it with additional selections, a type selector will affect every instance of that type. If you write one `a` selector, you would then change the styling for every `a` element within the page. Because of this, type selectors are usually reserved for doing just that:

`index.html`
```html
<a href="#">link</a>
```

`css/style.css`
```css
a {
  text-decoration: none; // removes the underline
}
```

#### ID Selectors
The `id` selector is used for a unique element, which means that the `id` should only be used **one time**, on **one element**, per page. Simply add an id `attribute` and a value.

`index.html`
```html
<div id="mario"></div>
```

`css/style.css`
```css
#mario {
  color: red;
}
```

#### Class selectors
The `class` selector is very similar to the `id` selector, but `class` can be shared with more elements. You can apply classes multiple times on a page to any element you want.

`index.html`
```html
<div class="luigi"></div>
<!-- more html -->
<section class="luigi"></section>
```

`css/style.css`
```css
.luigi {
  color: green;
}
```

#### Attribute Selectors
You are not restricted to the two attributes, `class` and `id`. You can specify other element-specific attributes by using `[square brackets]`. Inside the brackets you put the attribute name, optionally followed by a matching operator and a value.

`index.html`
```html
<a disabled>I'm a disabled link!</a>

<input type="button">
```

`css/style.css`
```css
[disabled] {
  color: gray;
}

[type="button"] {
  font-size: 16px;
}
```

### See It - CSS Selectors
<!-- Can be a video on youTube as long as it doesn't go to another code school. Eventually all video content should come from ACA. -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/emMO3iCpvrc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Practice It - CSS Selectors
<!-- Section for Code Pen -->

**CodePen Instructions**
* Make the font change colors.
* Change the font style.
* Change the size of the font.
* Change background color.
* Get the text to be centered in the middle of the page.

<p data-height="265" data-theme-id="0" data-slug-hash="pempxa" data-default-tab="html,result" data-user="austincoding" data-embed-version="2" data-pen-title="Beginning with CSS" class="codepen">See the Pen <a href="http://codepen.io/austincoding/pen/pempxa/">Beginning with CSS</a> by Austin Coding Academy (<a href="http://codepen.io/austincoding">@austincoding</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<hr/>

## Pseudo Selectors

#### Pseudo-class selectors
A CSS pseudo-class is a keyword added to selectors that specifies a special *characteristic* or *state* of the element in question. For example `:hover` will apply a style when the user's mouse hovers over the element specified by the selector. These special state attributes won't be explicitly written in HTML, but are present nonetheless, ready to be manipulated using CSS.

  `css/style.css`
  ```css
  selector:pseudo-class {
    property: value;
  }
  ```
#### Practice it - Pseudo Selectors
**Instruction**
* Click the "Edit on CodePen" in the top right
* Make ```<h1></h1>``` tag in the html
* In the CSS, psuedo-select it with a ```:hover``` and make it change to a color of your choice when you hover on it. 

<p data-height="235" data-theme-id="0" data-slug-hash="grVaJL" data-default-tab="html,result" data-user="mistakevin" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/mistakevin/pen/grVaJL/">grVaJL</a> by Kevin Colten (<a href="http://codepen.io/mistakevin">@mistakevin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<hr/>

**Instructions**:
Open the CodePen Below. Follow the directions in the comment section of the CSS to learn more about selectors. They are also written below for your convenience.

* Give the ```<body>``` element a background: #bdc3c7;
* Make the ```<h1>``` element color: #9b59b6;
* Make all ```<h2>``` elements color: orange;
* Make all ```<li>``` elements blue(Use this [tool](https://chrome.google.com/webstore/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka?hl=en) to pick your own hexadecimal blue)
* Change the background on every paragraph to be background: yellow;
* Make all inputs have a border: solid red 3px;
* Give everything with the class 'hello' a white background
* Give the element with id 'special' a 2px solid blue border(pick your own [rgb](https://www.w3schools.com/cssref/css_colors_legal.asp) blue) #special {border: #ff0000}
* Make all the ```<p>'s``` that are nested inside of divs 25px font(font-size: 25px)
* Make only inputs with type 'text' have a gray background
* Give both ```<p>'s``` inside the 3rd ```<div>``` a pink background
* Give the 2nd ```<p>``` inside the 3rd ```<div>``` a 5px white border
* Make the ```<em>``` in the 3rd ```<div>``` element white and 20px font(font-size:20px)
* __BONUS CHALLENGES__
* You may need to research some other selectors and properties
* Make all "checked" checkboxes have a left margin of 50px(margin-left: 50px)
* Make the ```<label>``` elements all UPPERCASE without changing the HTML(definitely look this one up
* Make the first letter of the element with id 'special' green and 100px font size(font-size: 100)
* Make the ```<h1>``` element's color change to blue when hovered over 
* Make the ```<a>``` element's that have been visited gray 

<p data-height="265" data-theme-id="0" data-slug-hash="YQWNjK" data-default-tab="html,result" data-user="austincoding" data-embed-version="2" data-pen-title="CSS  Selectors Practice Exercise" class="codepen">See the Pen <a href="https://codepen.io/austincoding/pen/YQWNjK/">CSS  Selectors Practice Exercise</a> by Austin Coding Academy (<a href="https://codepen.io/austincoding">@austincoding</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Deployment

Once your finished working on your website, push your changes to git using the following terminal commands:

1. In your Command Line Interface, navigate to the project folder by typing “cd summer-camp”
1. Then type the following git commands. Press enter after each line.
    * git add -A
    * git commit -m “your message explaining what you did”
        You may need to configure. Follow the instructions by typing each line with your information and pressing enter:
            git config --global user.email “johndoe@example.com”
            git config --global user.name "John Doe"
    * git push origin master
        You may need to login to github via the terminal. Type in your username and password as usual even if it doesn’t show up in the terminal. 
1. Go to github.com and check that your code is there. 
1. To deploy your code, navigate to “settings”
1. Scroll down to Github Pages and change the source to “Master Branch”
1. Navigate to the link provided to see your hosted web page. 

## Congratulations! You’ve built and deployed your first website!
{% include "./footer.md" %}
