# FindHub

A search focused, project &amp; document management tool.
This repo holds the **server** code that powers the RESTful API for the FindHub product.

## Get Started

1. Clone this repo to your local dev environment, and `cd` in
2. Run `npm install` via your CLI
3. Run `node index.js`

Congrats! You're up and running!

## Testing

1. Run `npm run test`

## API

Here's a rough outline of the different API endpoints available on the server (thus far):

| HTTP Request | Endpoint   | Description                                  |
| ------------ | ---------- | -------------------------------------------- |
| POST         | `auth/`    | Authenticate user                            |
| POST         | `users/`   | Register a new user                          |
| GET          | `users/me` | Get information about the authenticated user |
