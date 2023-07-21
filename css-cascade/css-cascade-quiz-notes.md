# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".

  - Inheritance
  - source order
  - Specificity
  - !important

- What does the term "source order" mean with respect to CSS?
  "Source order" in CSS refers to the sequence of HTML elements in the document before any CSS styles are applied. It determines how conflicting styles are resolved, with later rules taking precedence over earlier ones. Inline styles and !important can further override the normal order.

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  Certain properties are inheritable.

---

- List the three selector types in order of increasing specificity.
  1. ID selectors (e.g., #example).
  2. Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
  3. universal selector

---

- Why is using `!important` considered bad practice?
  it breaks the natural cascading of stylesheets, which makes maintaining and debugging your website much more difficult.

## Notes
