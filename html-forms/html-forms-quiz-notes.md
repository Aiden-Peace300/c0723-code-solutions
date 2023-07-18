# html-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of an HTML `form` element?
  helps assistive devices like screen readers better understand the content
  of the page and give the person using them more meaningful information.

  MDN ANSWER: The form HTML element represents a document section containing
  interactive controls for submitting information.
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

---

- Give five examples of form control elements.
  MDN ANSWER: You've already met some form elements, including `form` ,
  `fieldset` , `legend` , `textarea`   , `label > , `button` > ,
  and `input`.

  This article covers: The common input types button, checkbox, file,
  hidden, image, password, radio, reset, submit, and text. Some of the
  attributes that are common to all form controls.

  https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls

---


- Give three examples of `type` attribute values for HTML `<input>` elements.
  MDN ANSWER: button, checkbox, file, hidden, image, password, radio, reset, submit, and text.
  https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls

---

- Is an HTML `<input>` element a block element or an inline element?
  Inline element, but are tech 'inline-block' (meaning we can give them a width or height)

## Notes

- What is the 'for' attribute propose?
  The for attribute is an allowed attribute for `label` and `output`. When used on a < label > element it indicates the form element that this label describes.
  https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/for

  EXAMPLE

```html
<label for="username">Your name</label>
<input type="text" required id="username" placeholder="Type Here" />
```

