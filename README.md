# Let's build some widgets :bowtie:

## API Reference 

### `POST` User Update widget

`url: /changeModal`

In order for a user to change their modal, they must be signed in.

**Type** must be one of the following- *popup, banner, *or* panel*
**backgroundColor** and **textColor** should be a 6 digit Hex code

```javascript
{
"type": String,
"backgroundColor": Number,
"textColor": Number, 
"width": Number,
"height": Number,
"header": String,
"item": String,
"price": Number,
"duration": String
}
```
