# WELCOME TO THE PORTAL :bowtie:

## API Reference 

:exclamation: :exclamation: :exclamation: All requests below with a :lock: next to the title requires the user be registered and signed in first (authentication)

### `POST` User Sign up

`url: /signup`

In order for a user to create a new group order, they must be signed up as a registered user. The request to create a new user account must have the following information:

```javascript
{
"firstName": String,
"lastName": String,
"email": String,
"phone": String,
"password": String
}
```

Note that user accounts must have unique emails. If any part of the required information is not present, then the request will return a `400 Bad Request` error.

A successful user account registration request will result in the following **success** response:

```javascript
{
"haha": idk what this will be lol
}
```
