# Color

If you are uncertain on how to create the colour int object, you can use the Color Object instead.

## Importation du paquet

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.Color;`

## Static Methods

Static Methods are called on the package name and not on the Object itself.  
All these Methods return a Color Object.

| Méthode Zen    | Type de paramètre    |
| -------------- | -------------------- |
| fromInt(color) | Indice               |
| fromHex(color) | chaîne de caractères |

## Nonstatic Methods

Nonstatic Methods are not called on the package name but on the Object itself.

| Méthode Zen   | Type de retour |
| ------------- | -------------- |
| getIntColor() | Indice         |