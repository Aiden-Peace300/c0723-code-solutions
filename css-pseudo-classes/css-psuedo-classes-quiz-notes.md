# css-psuedo-classes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a pseudo-class?

- What are CSS pseudo-classes useful for?

## Notes

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

# css-psuedo-classes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a pseudo-class?
  A pseudo-class is a selector that selects elements that are in a specific state

  pseudo-class list:

  :active - Applies styles to an element while it is being activated (e.g., clicked or tapped) by the user.

  :any - Matches an element if it is the first or only child of its parent, regardless of the type of the element.

  :checked - Targets a radio button or checkbox input element that is checked.

  :default - Selects the default button in a group of buttons when the user presses the "Enter" key.

  :disabled - Matches form elements (inputs, buttons, etc.) that are disabled and cannot be interacted with.

  :empty - Targets an element that has no children or text content.

  :enabled - Matches form elements that are enabled and can be interacted with.

  :first-child - Selects an element that is the first child of its parent.

  :first-of-type - Targets the first occurrence of a particular element type within its parent.

  :focus - Applies styles to an element when it has focus (e.g., when clicked or tabbed into).

  :hover - Selects an element when the user hovers over it with the mouse pointer.

  :in-range - Targets input elements with a value within a specific range (e.g., for input[type="number"]).

  :invalid - Selects form elements with invalid data (according to their specified validation constraints).

  :lang - Matches elements based on the language specified in the "lang" attribute.

  :last-child - Targets an element that is the last child of its parent.

  :last-of-type - Selects the last occurrence of a particular element type within its parent.

  :link - Targets unvisited links.

  :not() - Negates the selector inside parentheses, selecting elements that do not match the given selector.

  :nth-child() - Matches elements based on their position (index) within their parent.

  :nth-of-type() - Selects elements based on their position (index) of a specific type within their parent.

  :only-child - Targets elements that are the only child of their parent.

  :only-of-type - Selects elements that are the only occurrence of a particular type within their parent.

  :optional - Matches form elements that are not marked as required.

  :out-of-range - Targets input elements with a value outside a specific range (e.g., for input[type="number"]).

  :read-only - Matches form elements that are read-only and cannot be edited.

  :read-write - Targets form elements that are editable.

  :required - Selects form elements that are marked as required.

  :root - Selects the root element of the document (i.e., the <html> element).

  :target - Matches the targeted element in the URL fragment identifier (e.g., #example).

- What are CSS pseudo-classes useful for?

  Should use CSS Pseudo-classes to Highlight User's Position

## Notes

- why would I want to have more than one font to font-family ?

  1. Having more than one font in the font-family property allows you to provide a fallback system, ensuring that your webpage displays legible text even if the user's system doesn't have the first font specified. There are several reasons why you would want to include multiple fonts in the font-family declaration:

  2. Cross-platform and Cross-browser Compatibility:
     Different operating systems and web browsers support different font families. By specifying multiple fonts, you increase the chances of your text being displayed in a consistent and readable manner across various platforms.

  3. Font Availability:
     Not all users will have the same fonts installed on their devices. By providing fallback fonts, you ensure that your content remains readable and aesthetically pleasing for a broader audience.

  4. Performance and Loading Times:
     If you use web fonts from external sources, the time it takes to load these fonts can impact the performance of your webpage. By providing fallback fonts, you can display the content immediately with locally installed fonts while the web font loads in the background.

  Theming and Design Flexibility:
  Including multiple fonts in the font-family allows you to establish a hierarchy of fonts for different elements. For example, you might use a more decorative font for headings and a more readable font for the body text, enhancing the overall visual design of your website.

  Here's an example of using multiple fonts in the font-family property:

```css
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
```

- In this example, the browser will first try to use the "Helvetica Neue" font. If it's not available on the user's system, it will attempt to use Arial. If Arial is also not available, it will fall back to a generic sans-serif font that the system provides. This way, you ensure that the text will always be displayed, even if the desired fonts are not available.
