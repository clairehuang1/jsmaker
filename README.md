# Let's build some widgets :bowtie:

## API Reference 

### `POST` User Update widget

`url: /changeModal`

In order for a user to change their modal, they must be signed in. 
**Type** must be one of the following- popup, banner, or panel

```javascript
{
"type": String,
"backgroundColor": Integer,
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
