# node-fs-writefile-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What method is available in the `node:fs` module for writing data to a file?
  writeFile method

  ```javascript
  import { writeFile } from 'node:fs/promises';
  ```

- Are file operations using the `fs` module synchronous or asynchronous?
  Every method in fs module has synchronous and asynchronous forms. Asynchronous methods take a last parameter as completion function callback. Asynchronous method is preferred over synchronous method because it never blocks the program execution where as the synchronous method blocks.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
import { writeFile } from 'node:fs/promises';
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
