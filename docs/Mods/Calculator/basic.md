# Basic

## Package

`mods.calculator.basic`

## Methods

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input1** The block that needs to be broken.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input2** The block that needs to be broken.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input2** The block that needs to be broken.

## Addition

```zenscript
basic.addRecipe(IIngredient input1, IIngredient input2, IIngredient output);

basic.addRecipe(<minecraft:dirt>, <minecraft:stone>, <minecraft:diamond>);
```

## Removal 

```zenscript
mods.calculator.basic.removeRecipe(IIngredient output);
```
