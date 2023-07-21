# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
  Static - This is the default value for elements. The element is positioned according to the normal flow of the document. The left, right, top, bottom and z-index properties do not affect an element with position: static.

  position: static has no effect on the position of an element.

---

- How does setting `position: relative` on an element affect document flow?
  Elements with position: relative doesn't effect document flow

---

- How does setting `position: relative` on an element affect where it appears on the page?
  don't effect where it appears using offset will effect where it appeares

---

- How does setting `position: absolute` on an element affect document flow?
  The other elements will behave as if that element is not in the document.

  Elements with position: absolute are positioned relative to their parent elements

---

- How does setting `position: absolute` on an element affect where it appears on the page?
  an element with position: absolute is positioned relative to its closest positioned ancestor.

- How do you constrain an absolutely positioned element to a containing block?
  by setting the parent to anything other than static

---

- What are the four box offset properties?
  The top , right , bottom , and left properties specify offsets from the edges of the element's containing block.

  Most often, the containing block is the content area of an element's nearest block-level ancestor, but this is not always the case.

## Notes

There are five values the position property can take. They are:

- Static - The other elements will behave as if that element is not in the document.

- Relative - remain in the normal flow of the document. But, unlike static elements, the left, right, top, bottom and z-index properties affect the position of the element.

- Absolute - Elements with position: absolute are positioned relative to their parent elements. In this case, the element is removed from the normal document flow. The other elements will behave as if that element is not in the document. No space is created for the element in the page layout. The values of left, top, bottom and right determine the final position of the element.

  One thing to note is that an element with position: absolute is positioned relative to its closest positioned ancestor. That means that the parent element has to have a position value other than position: static.

- fixed - Fixed position elements are similar to absolutely positioned elements. They are also removed from the normal flow of the document. But unlike absolutely positioned element, they are always positioned relative to the <html> element.

- sticky - position: sticky is a mix of position: relative and position: fixed. It acts like a relatively positioned element until a certain scroll point and then it acts like a fixed element.
