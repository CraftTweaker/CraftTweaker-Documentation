# Stonecutter


## Syntax
Stonecutters use similar syntax to a furnace, with a few key omissions:
```zenscript
addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
```
Just like before, let's break this down:
```zenscript
addRecipe(recipeName, output, input);
```

Here is an example:

```zenscript
addRecipe("arrow_to_glowing_arrow", <item:minecraft:spectral_arrow>, <item:minecraft:arrow>);
```
What you see here is that "stonecutting" an arrow would award a spectral arrow.