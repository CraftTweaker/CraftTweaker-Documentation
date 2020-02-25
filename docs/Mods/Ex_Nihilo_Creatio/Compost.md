# Compost

## Package

`mods.exnihilocreatio.Compost`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **Float chance** The chance should be between 0-1.
- **String color** The color is hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.

## Addition

Does not take arrays in for IIngredient.
```zenscript
Compost.addRecipe(IIngredient, Float, String, IItemStack);

Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## Removal 

```zenscript
Compost.removeAll();
```
