# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  a client is any computer hardware or software device that requests access to a service provided by a server.

- What is a server?
  a server is a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients"

- Which HTTP method does a browser issue to a web server when you visit a URL?
  The GET method is used to request a resource from the server, such as an HTML page, an image, a stylesheet, or any other type of file that is accessible via the URL.

- What is on the first line of an HTTP **request** message?
  HTTP method.
  the request target, which represents the resource being requested.
  the HTTP version.

```javascript
GET /index.html HTTP/1.1
```

- What is on the first line of an HTTP **response** message?
  HTTP version
  Status code
  Status Text

```javascript
HTTP/1.1 200 OK
```

- What are HTTP headers?
  HTTP headers are key-value pairs included in both HTTP request messages sent by a client (such as a web browser) and HTTP response messages sent by a web server. These headers provide additional information about the request or response and help facilitate communication between the client and server.

- Is a body required for a valid HTTP message?
  No, a body is not required for a valid HTTP message.
