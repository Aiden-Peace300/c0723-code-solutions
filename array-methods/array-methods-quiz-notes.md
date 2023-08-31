# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:

  - What does `Array.forEach` do?
    used to iterate over the elements of an array and execute a provided callback function for each element
    for JS:
  - What should the callback function do?
    The call back function will always returns undefined

  - What is `Array.forEach` useful for?
    forEach is useful for scenarios where you want to perform an operation or action on each element of an array without needing to manage the iteration process explicitly.

```javascript
array.forEach(callback(currentValue, index, array) {
  // write code here
});
```

- `Array.map`:

  - What does `Array.map` do?
    map is used to iterate over the elements of an array and create a new array by applying a provided callback function to each element.
  - What should the callback function return?
    The call back function will create an entirely new array with transformed elements and the same amount of data

  - What is `Array.map` useful for?
    map is useful when you want to transform each element of an array in a specific way and collect the results into a new array.

```javascript
const newArray = array.map(callback(currentValue, index, array) {
  // write code here
});
```

- `Array.filter`:
  - What does `Array.filter` do?
    filter is used to iterate over the elements of an array and create a new array containing only the elements that pass a given condition specified by a callback function.
  - What should the callback function return?
    The call back function will return a Boolean value
  - What is `Array.filter` useful for?
    when you want to create a new array containing only the elements that meet a specific condition.

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
