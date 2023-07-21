# css-fonts-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Name two types of units that can be used to adjust `font-size` in CSS.

  Pixels (px): The pixel unit is an absolute unit of measurement and specifies the font size in pixels. It provides a fixed size for the text regardless of the screen size or resolution.

  Relative Units (e.g., em or rem): Relative units are relative to the font size of the parent element or the root element, respectively. They allow for more flexible and scalable font sizing, making the text responsive to changes in the parent or root font size.

- What CSS property controls the font used for the text inside an element?
  font-family property
  This property sets the font face or typeface that will be applied to the text within the element. Multiple font names can be specified as a fallback system in case the first one is not available on the user's device.

  EXAMPLE:

```css
/* Setting font-family for an element */
.element {
  font-family: Arial, sans-serif;
}
```

## Notes

- What is rem ?
  rem is a CSS unit that stands for "root em." It is a relative unit of measurement used in web development to specify sizes relative to the root element's font size. The root element is usually the <html> element.

```css
/* Setting font size with rem */
html {
  font-size: 16px; /* Root font size is set to 16 pixels */
}

p {
  font-size: 1.5rem; /* 1.5 times the root font size (1.5 * 16px = 24 pixels) */
}

h1 {
  font-size: 2rem; /* 2 times the root font size (2 * 16px = 32 pixels) */
}
```

- In this example, with the root font size set to 16 pixels, the paragraph font size will be 24 pixels (1.5 rem) and the heading font size will be 32 pixels (2 rem). If the root font size is changed to 20 pixels, the paragraph font size will become 30 pixels (1.5 rem) and the heading font size will become 40 pixels (2 rem). The rem-based sizes automatically adjust to the changes in the root font size.

- When to use rem or px?

  Whether it's better to use rem or px depends on the specific use case and design goals of your website. Both units have their advantages and may be appropriate in different scenarios.

  Use px when:

  Pixel-perfect control: If you require precise control over the size of elements and want to ensure that they appear exactly as intended across different devices and screen resolutions, using px might be more suitable. Pixels provide a fixed size, making it easier to achieve consistent layouts.

  Legacy support: Some older browsers or devices may not fully support relative units like rem. If you need to ensure compatibility with a wide range of browsers, px may be a safer choice.

  Use rem when:

  Scalability and Responsiveness: rem is particularly useful for creating responsive designs that scale well across different screen sizes and devices. Since rem is based on the root element's font size, it automatically adjusts when the font size is changed, allowing for better adaptability.

  Ease of Maintainability: Using rem can lead to more maintainable CSS code. By setting the root font size once at the top level of your CSS, you can then define other font sizes and spacing using relative units. This makes it easier to make global changes to the design by adjusting the root font size.

  Accessibility: Relative units like rem can be more accessible because they respond to the user's browser settings. If a user needs larger fonts for better readability, the website's rem-based font sizes will adapt accordingly.
