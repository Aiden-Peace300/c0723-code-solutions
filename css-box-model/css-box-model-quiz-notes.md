# css-box-model-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What CSS properties make up the box model?
  INSTRUCTORS ANSWER: MARGIN PADDING BORDER
  - Margin => used to create space around elements, outside of any defined borders
    EXAMPLE BELOW: https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_intro

```css
div {
  margin: 70px;
  border: 1px solid #4caf50;
}
```

- Border => accepts multiple values for drawing a line around the element it is applied to.
  EXAMPLE BELOW: https://www.w3schools.com/css/tryit.asp?filename=trycss_border-style

```css
p.dotted {
  border-style: dotted;
}
p.dashed {
  border-style: dashed;
}
p.solid {
  border-style: solid;
}
p.double {
  border-style: double;
}
p.groove {
  border-style: groove;
}
p.ridge {
  border-style: ridge;
}
p.inset {
  border-style: inset;
}
p.outset {
  border-style: outset;
}
p.none {
  border-style: none;
}
p.hidden {
  border-style: hidden;
}
p.mix {
  border-style: dotted dashed solid double;
}
```

- Padding => defines the innermost portion of the box model, creating space around an element's content, inside of any defined margins and/or borders.
  EXAMPLE BELOW: https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_intro

```css
div {
  padding: 70px;
  border: 1px solid #4caf50;
}
```

- Content =>

```css
.topic-games::before {
  content: '🎮 ';
}

.topic-weather::before {
  content: '⛅ ';
}
```

- Height => The height property in CSS defines specifies the content height of boxes and accepts any of the length values
  https://www.w3schools.com/cssref/pr_dim_height.php
  EXAMPLE BELOW: https://www.w3schools.com/cssref/tryit.php?filename=trycss_dim_height

```css
div.a {
  height: auto;
  border: 1px solid black;
}

div.b {
  height: 50px;
  border: 1px solid black;
}
```

- Width => specifies the width of the element's content area.
  https://www.w3schools.com/cssref/pr_dim_width.php
  EXAMPLE BELOW: https://www.w3schools.com/cssref/tryit.php?filename=trycss_dim_width

```css
div.a {
  width: auto;
  border: 1px solid black;
}

div.b {
  width: 150px;
  border: 1px solid black;
}

div.c {
  width: 50%;
  border: 1px solid black;
}
```

- Which CSS property pushes boxes away from each other?
  Margin => The margin is an invisible space around your box. It pushes other elements away from the box. Margins can have positive or negative values.

- Which CSS property add space between a box's content and its border?
  Padding => Padding is the distance between the element's content area and any border that might be applied to the element. Margin is extra space around the element.

## Notes

```css
/*
      	                		  			Margin
			    _____________________________________________________________________
			    |   		 					      Border								                       |
			    |			    _____________________________________			                 |
  	  		|			    |					    Padding 				      |			       |         |
	        |   		  |				    ____________			 			|            |         |
	Margin	|	Border	|	Padding		|	Content		|	  Padding |   Border	 |	Margin |
    	    |    		  |				    _____________						|			       |         |
   		    |   		  |					    Padding					  		|            |         |
     		  |    		  |___________________________________|            |			   |
        	|    		 								  Border		                                 |
        	|___________________________________________________________________ |
             								        Margin
*/
```

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
