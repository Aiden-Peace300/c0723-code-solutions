# http-messages-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  ANSWER: Used in home and corporate networks, a client is any computer hardware or software device that requests access to a service provided by a server. Clients are typically seen as the requesting program or user in a client-server architecture.

  What is Client Server Architecture?: https://intellipaat.com/blog/what-is-client-server-architecture/?US

- What is a server?
  ANSWER: a server is a piece of computer hardware or software (computer program) that provides functionality (resources, data, services, or programs) for other programs or devices, called "clients"

- Which HTTP method does a browser issue to a web server when you visit a URL?
  ANSWER: GET method

- What three things are on the start-line of an HTTP **request** message?
  ANSWER:

  1. An HTTP method, a verb (like GET, PUT or POST) or a noun (like HEAD or OPTIONS), that describes the action to be performed.
  2. The request target, usually a URL, or the absolute path of the protocol, port, and domain are usually characterized by the request context.
  3. The HTTP version, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.

  HTTP Requests: https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

- What three things are on the start-line of an HTTP **response** message?
  ANSWER:

  1. The protocol version, usually HTTP/1.1.
  2. A status code, indicating success or failure of the request. Common status codes are 200, 404, or 302
  3. A status text. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.

  HTTP Requests: https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages

- What are HTTP headers?
  ANSWER: he HTTP headers are used to pass additional information between the clients and the server through the request and response header. All the headers are case-insensitive, headers fields are separated by colon, key-value pairs in clear-text string format

- Where would you go if you wanted to learn more about a specific HTTP Header?
  ANSWER: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

- Is a body required for a valid HTTP request or response message?
  ANSWER: body is not required, it is useful

## Notes

- what is the difference between http and http Messages?
  ANSWER: HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. HTTP Message is term used for the data exchanged between client and server.
