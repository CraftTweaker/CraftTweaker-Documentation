# Furnace


## Syntax
Furnaces use several different new syntax that you will be using:
```zenscript
addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
```
Just like before, let's break this down:
```zenscript
addRecipe(recipeName, output, input, xp, cookTime);
```

| Name | Function | Data Type | Required |
|------|----------|-----------|----------|
| recipeName | name of the new recipe | string | yes |
| output | IItemStack output of the recipe | IItemStack | yes |
| input | IIngredient input of the recipe | IIngredient | yes |
| xp | how much xp the player gets | float | yes |
| cookTime | how long it takes to cook | integer | yes |

Here is an example:

```zenscript
addRecipe("arrow_to_glowing_arrow", <item:minecraft:spectral_arrow>, <item:minecraft:arrow>, 7283.0, 9999);
```
What you see here is that smelting an arrow would award a spectral arrow, a extremely huge amount of exp, in exchange for a very large cook time.