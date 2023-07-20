# css-flexbox-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the default `flex-direction` of a `flex` container?
  By default, the flex items are placed in the row direction (horizontally left to right).

  there are only 4 states flex-direction can be:
  row (default): left to right in ltr; right to left in rtl
  row-reverse: right to left in ltr; left to right in rtl
  column: same as row but top to bottom
  column-reverse: same as row-reverse but bottom to top

---

- What is the default `flex-wrap` of a `flex` container?
  there are only 3 states flex-direction can be:
  nowrap (default): all flex items will be on one line
  wrap: flex items will wrap onto multiple lines, from top to bottom.
  wrap-reverse: flex items will wrap onto multiple lines from bottom to top.

---

- What axis do the `justify-content` properties work on?
  ANSWER: by default horizontally / primary axis

  IN DEPTH ANSWER: justify-content property, which aligns items horizontally and accepts the following values:
  flex-start: Items align to the left side of the container.
  flex-end: Items align to the right side of the container.
  center: Items align at the center of the container.
  space-between: Items display with equal spacing between them.
  space-around: Items display with equal spacing around them.

---

- What axis do the `align-items` properties work on?
  ANSWER: by default vertically / cross axis
  The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis.

  https://developer.mozilla.org/en-US/docs/Web/CSS/align-items

---

## Notes

## IMPORTANT NOTES: https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-background

- What is display: flex ? and what does it do?
  display: flex; is a CSS property that is used to create a flexible container for laying out items within it. When you apply display: flex; to an element, it becomes a flex container, and its child elements become flex items. The flex container allows you to control the arrangement and alignment of its child flex items in a flexible and responsive manner.

FLEX BOX NOTES

- Flex Container: The element with display: flex; becomes a flex container, and its child elements become flex items.

- Main Axis and Cross Axis: Flex containers have two main axes - the main axis and the cross axis. The main axis is the primary direction in which the flex items are laid out, and the cross axis is perpendicular to the main axis.

- Flex Direction: By default, the main axis runs horizontally from left to right (flex-direction: row;). However, you can change the main axis direction using properties like flex-direction: column; (main axis from top to bottom), flex-direction: row-reverse; (main axis from right to left), etc.

- Flex Wrapping: By default, flex items will try to fit within a single line (single row), but if there's not enough space, they may shrink to fit. You can control the wrapping behavior with flex-wrap: wrap; to allow items to wrap onto multiple lines when needed.

- Justify Content: It allows you to control how flex items are aligned along the main axis. You can use properties like justify-content: flex-start; (align items to the start of the main axis), justify-content: center; (center items along the main axis), justify-content: space-between; (distribute items with equal space between them), etc.

- Align Items: It determines how flex items are aligned along the cross axis. You can use properties like align-items: flex-start; (align items to the start of the cross axis), align-items: center; (center items along the cross axis), align-items: stretch; (make items fill the cross-axis), etc.

- Align Content: It works when flex items wrap onto multiple lines. It controls how lines of flex items are aligned within the flex container along the cross axis.

- Flex Grow, Flex Shrink, and Flex Basis: These properties determine how flex items should grow, shrink, and be sized relative to each other on the main axis.

- What is the difference between order and direction css flexbox?

  order:
  The order property is used to control the visual order of flex items within a flex container. It allows you to change the default order in which the flex items appear on the screen without modifying the HTML structure. The order property takes an integer value, and the items are arranged in ascending order based on this value. By default, all flex items have an order value of 0.

  The flex-direction property is used to control the direction of the main axis in a flex container. The main axis is the primary axis along which the flex items are laid out. It can be either horizontal (row direction) or vertical (column direction).

  The flex-direction property accepts four values:

  row: The main axis is horizontal, and flex items are laid out in a row.
  row-reverse: Similar to row, but items are displayed in reverse order.
  column: The main axis is vertical, and flex items are laid out in a column.
  column-reverse: Similar to column, but items are displayed in reverse order.

  DIFFERENCE:
  The order property is used to change the visual order of individual flex items within a flex container, while the flex-direction property is used to control the main axis direction of the flex container, which, in turn, affects the layout direction of its child flex items.
