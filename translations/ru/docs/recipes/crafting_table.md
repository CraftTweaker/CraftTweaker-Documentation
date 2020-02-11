# Верстак

### Addition:
```zenscript
craftingTable.addShaped(String recipeName, IItemStack output, IIngredient[][] ingredients, @ZenCodeType.Optional RecipeFunctionMatrix recipeFunction);

craftingTable.addShaped("shaped_mirror_test", <item:minecraft:arrow>, [[<item:minecraft:diamond>, <item:minecraft:diamond>], [<item:minecraft:air>, <item:minecraft:flint>], [<item:minecraft:air>, <item:minecraft:flint>]], null);

```

```zenscript
addShapedMirrored(String recipeName, IItemStack output, IIngredient[][] ingredients, @ZenCodeType.Optional RecipeFunctionMatrix recipeFunction);

```

```zenscript
addShapeless(String recipeName, IItemStack output, IIngredient[] ingredients, @ZenCodeType.Optional RecipeFunctionArray recipeFunction);

```

