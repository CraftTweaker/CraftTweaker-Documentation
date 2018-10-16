# Color

If you are uncertain on how to create the colour int object, you can use the Color Object instead.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Color;`

## Static Methods

Static Methods are called on the package name and not on the Object itself.  
All these Methods return a Color Object.

| ZenMethod      | Parameter Type |
| -------------- | -------------- |
| fromInt(color) | int            |
| fromHex(color) | String         |

## Nonstatic Methods

Nonstatic Methods are not called on the package name but on the Object itself.

| ZenMethod     | Return Type |
| ------------- | ----------- |
| getIntColor() | int         |