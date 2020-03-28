# Campfire


## Syntax
Campfires use several different new syntax that you will be using:
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
addRecipe("cooked_glowstone", <item:minecraft:glowstone>, <item:minecraft:glowstone_dust>, 10.0, 150);
```
What you see here is that smelting a glowstone dust would award a glowstone.